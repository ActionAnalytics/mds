package spec

import geb.spock.GebReportingSpec
import spock.lang.*
import org.junit.Rule
import org.junit.rules.TemporaryFolder
import org.openqa.selenium.Keys
import groovy.transform.SourceURI
import java.nio.file.Path
import java.nio.file.Paths

import pages.*
import utils.*


@Title("MDS-MineProfile-PermitTab")
@Stepwise
class  PermitSpec extends GebReportingSpec {
    static PERMIT_NUMBER = "M-"+Const.PERMIT_NUMBER

    @Rule
    TemporaryFolder dir = new TemporaryFolder()

    @SourceURI
    URI sourceUri
    Path scriptLocation = Paths.get(sourceUri)

    def setup() {
        to MineProfilePage
        permitTab.tabSelect.click()
    }

    def "User can create a permit"(){
        when: "I click on the new permit"
        permitTab.newPermitButton.click()
        newPermitForm.completePermitForm()
        then: "A permit with the correct ID is present in the permits tab"
        permitTab.permitTitle.text() == PERMIT_NUMBER
    }

    def "User can edit the status of a permit"(){
        when: "I hover over the the add/edit button."
        moveToFooterAndHoverOnEdit()
        permitTab.editPermitStatusButton.click()

        and: "I change the status of the permit to closed."
        permitTab.editPermitFormStatusDropdown.click()
        permitTab.closedDropdownOption.click()
        permitTab.submitEditPermitStatus.click()
        waitFor() {permitTab.permitRow.children().has(title: "Status").text() != "Open"} 
    
        then: "The permit status has changed to closed"
        permitTab.permitRow.children().has(title: "Status").text() == "Closed"
    }

    def "User can upload a doc to a permit"(){
        when: "I open the edit initial permit modal."
        permitTab.permitRow.children().has(text:"Add/Edit").click()
        permitTab.openFileModalButton.click()
        
        and: "Upload a test file to the permit."
        def uploadedFile = dir.newFile(Const.TEST_FILE_NAME) << Const.TEST_FILE_CONTENT
        permitTab.uploadField = uploadedFile.absolutePath
        permitTab.uploadCompleteMessage
        permitTab.editPermitFileButton.click()
        downloadTestFileLink

        then: "The file is attached to the permit."
        downloadTestFileLink.text() == Const.TEST_FILE_NAME
    }

    def "User can download a doc from a permit"(){
        when: "The user navigates to the test permit's files"
        permitTab.permitRow.children().has(text:"Add/Edit").click()

        and: "User downloads the  test file"
        downloadTestFileLink.click()
        def file = new File(Const.DOWNLOAD_PATH+'/'+Const.TEST_FILE_NAME)
        // allow time for the file to be created in the DOWNLOAD_PATH
        waitFor(){file.exists()}
        String lineString = file.getText('UTF-8')
        file.delete()

        then: "The doc upload complete message is shown"
        assert lineString == Const.TEST_FILE_CONTENT
    }

    def "User can add an amendment to a permit"(){
        when: "A user opens the Add Permit Amendment Modal"
        permitTab.permitRow.children().has(text:"Add/Edit").click()
        moveToFooterAndHoverOnEdit()
        permitTab.addAmendmentButton.click()

        and: "Completes all the fields"
        newPermitForm.completePermitAmendment() 
        permitTab.amendmentDescriptionSpecific
       
        then: "An Amendment is added to the permit in question"
        assert permitTab.amendmentDescriptions.children()[0].text()== Const.PERMIT_DESCRIPTION
    }
    
    def "User can amalgamate a permit"(){
        when: "The user amalgamates a permit."
        moveToFooterAndHoverOnEdit()
        permitTab.amalgamatePermitButton.click()
        newPermitForm.amalgamatePermit()
        waitFor(){permitTab.permitRow.children().has(text:"Add/Edit")}

        and: "The user hovers over the Add/Edit button."
        moveToFooterAndHoverOnEdit()
        waitFor() {permitTab.hoverDropdown}

        then: "There is no 'amalgamate' option in the Add/Edit dropdown."
        assert permitTab.hoverDropdown.children().has(text:"Add permit amendment").isDisplayed()
        assert !permitTab.hoverDropdown.children().has(text:"Amalgamate permit").isDisplayed()

    }

    def moveToFooterAndHoverOnEdit() {
        interact {
            moveToElement(footer)
            footer.click()
            moveToElement(permitTab.permitRow.children().has(text:"Add/Edit")) 
        }
    }

}
