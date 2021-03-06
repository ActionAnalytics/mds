export const createMockHeader = () => ({
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: "mockToken",
  },
});

export const ERROR = { message: "Errors", status: 400 };

// used for testing selectors
export const MINE_RESPONSE = {
  mines: [
    {
      mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
      mine_name: "mine3",
      mine_no: "BLAH9091",
      mine_region: "NE",
      mine_permit: [],
      mineral_tenure_xref: [
        {
          tenure_number_id: "1234567",
        },
      ],
      mine_location: { longitude: null, latitude: null },
      mine_status: {
        statusvalue: ["CLD", "CM"],
        status_labels: ["Closed", "Care & Maintenance"],
        effective_date: "2018-10-16",
        expiry_date: null,
      },
      mine_tailings_storage_facilities: [
        {
          mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
          mine_tailings_storage_facility_guid: "e2629897-053e-4218-9299-479375e47f78",
          mine_tailings_storage_facility_name: "MockTSF",
        },
      ],
      mine_expected_documents: [
        {
          date_created: "2018-11-19",
          due_date: "",
          exp_document_guid: "806608ed-d2b4-4f83-8b22-739d5223c56f",
          exp_document_name: "OMS Manual",
          mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
          req_document_guid: "c95886bc-e4b2-4743-b38d-42eea858e9ee",
          expected_document_status: {
            exp_document_status_code: "MIA",
            description: "Not Received",
          },
          related_documents: [],
        },
      ],
      mine_type: [{ mine_tenure_type_code: "PLR" }, { mine_tenure_type_code: "MIN" }],
      verified_status: {
        mine_guid: null,
        mine_name: null,
        healthy_ind: null,
        verifying_user: null,
        verifying_timestamp: null,
      },
    },
    {
      mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
      mine_name: "mine2",
      mine_no: "BLAH9091",
      mine_region: "NE",
      mine_permit: [
        {
          permit_guid: "2ec66cff-dbf0-4e4b-b9b8-9c7740ba8c81",
          permit_no: "KNaaWwVdiJ40",
        },
        {
          permit_guid: "1877097f-bf9d-40c8-a5fa-53d9a79623c9",
          permit_no: "xfM0c0ZKEw7B",
        },
      ],
      mineral_tenure_xref: [
        {
          tenure_number_id: "1234567",
        },
      ],
      mine_status: {
        statusvalue: ["CLD", "CM"],
        status_labels: ["Closed", "Care & Maintenance"],
        effective_date: "2018-10-16",
        expiry_date: null,
      },
      mine_location: {
        longitude: null,
        latitude: null,
      },
      mine_tailings_storage_facilities: [
        {
          mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
          mine_tailings_storage_facility_guid: "e2629897-053e-4218-9299-479375e47f34",
          mine_tailings_storage_facility_name: "MockTSF1",
        },
      ],
      mine_expected_documents: [
        {
          date_created: "2018-11-19",
          due_date: "",
          exp_document_guid: "806608ed-d2b4-4f83-8b22-739d5223c56f",
          exp_document_name: "OMS Manual",
          mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
          req_document_guid: "c95886bc-e4b2-4743-b38d-42eea858e9ee",
          expected_document_status: {
            exp_document_status_code: "MIA",
            description: "Not Received",
          },
          related_documents: [],
        },
      ],
      mine_type: [{ mine_tenure_type_code: "PLR" }, { mine_tenure_type_code: "MIN" }],
      verified_status: {
        mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
        mine_name: "mine2",
        healthy_ind: true,
        verifying_user: null,
        verifying_timestamp: null,
      },
    },
  ],
};

export const SUBSCRIBED_MINES = {
  mines: [
    {
      guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
      mine_name: "mine3",
      mine_no: "BLAH9091",
      region_code: "NE",
      mine_permit: [],
      mineral_tenure_xref: [
        {
          tenure_number_id: "1234567",
        },
      ],
      mine_location: { longitude: null, latitude: null },
      mine_tailings_storage_facility: [
        {
          mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
          mine_tailings_storage_facility_guid: "e2629897-053e-4218-9299-479375e47f78",
          mine_tailings_storage_facility_name: "MockTSF",
        },
      ],
      mine_expected_documents: [
        {
          date_created: "2018-11-19",
          due_date: "",
          exp_document_guid: "806608ed-d2b4-4f83-8b22-739d5223c56f",
          exp_document_name: "OMS Manual",
          mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
          req_document_guid: "c95886bc-e4b2-4743-b38d-42eea858e9ee",
          exp_document_status: {
            exp_document_status_code: "MIA",
            description: "Not Received",
          },
          related_documents: [],
        },
      ],
      mine_type: [{ mine_tenure_type_code: "PLR" }, { mine_tenure_type_code: "MIN" }],
      mine_status: {
        statusvalue: ["CLD", "CM"],
        status_labels: ["Closed", "Care & Maintenance"],
        effective_date: "2018-10-16",
        expiry_date: null,
      },
    },
  ],
};
export const MINES = {
  mineIds: ["18133c75-49ad-4101-85f3-a43e35ae989a", "18145c75-49ad-0101-85f3-a43e45ae989a"],
  mines: {
    "18133c75-49ad-4101-85f3-a43e35ae989a": {
      mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
      mine_name: "mine3",
      mine_no: "BLAH9091",
      mine_region: "NE",
      mine_permit: [],
      mineral_tenure_xref: [
        {
          tenure_number_id: "1234567",
        },
      ],
      mine_location: { longitude: null, latitude: null },
      mine_tailings_storage_facilities: [
        {
          mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
          mine_tailings_storage_facility_guid: "e2629897-053e-4218-9299-479375e47f78",
          mine_tailings_storage_facility_name: "MockTSF",
        },
      ],
      mine_expected_documents: [
        {
          date_created: "2018-11-19",
          due_date: "",
          exp_document_guid: "806608ed-d2b4-4f83-8b22-739d5223c56f",
          exp_document_name: "OMS Manual",
          mine_guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
          req_document_guid: "c95886bc-e4b2-4743-b38d-42eea858e9ee",
          expected_document_status: {
            exp_document_status_code: "MIA",
            description: "Not Received",
          },
          related_documents: [],
        },
      ],
      mine_type: [{ mine_tenure_type_code: "PLR" }, { mine_tenure_type_code: "MIN" }],
      mine_status: {
        statusvalue: ["CLD", "CM"],
        status_labels: ["Closed", "Care & Maintenance"],
        effective_date: "2018-10-16",
        expiry_date: null,
      },
      verified_status: {
        mine_guid: null,
        mine_name: null,
        healthy_ind: null,
        verifying_user: null,
        verifying_timestamp: null,
      },
    },
    "18145c75-49ad-0101-85f3-a43e45ae989a": {
      mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
      mine_name: "mine2",
      mine_no: "BLAH9091",
      mine_region: "NE",
      mine_permit: [
        {
          permit_guid: "2ec66cff-dbf0-4e4b-b9b8-9c7740ba8c81",
          permit_no: "KNaaWwVdiJ40",
        },
        {
          permit_guid: "1877097f-bf9d-40c8-a5fa-53d9a79623c9",
          permit_no: "xfM0c0ZKEw7B",
        },
      ],
      mineral_tenure_xref: [
        {
          tenure_number_id: "1234567",
        },
      ],
      mine_status: {
        statusvalue: ["CLD", "CM"],
        status_labels: ["Closed", "Care & Maintenance"],
        effective_date: "2018-10-16",
        expiry_date: null,
      },
      mine_location: {
        longitude: null,
        latitude: null,
      },
      mine_tailings_storage_facilities: [
        {
          mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
          mine_tailings_storage_facility_guid: "e2629897-053e-4218-9299-479375e47f34",
          mine_tailings_storage_facility_name: "MockTSF1",
        },
      ],
      mine_expected_documents: [
        {
          date_created: "2018-11-19",
          due_date: "",
          exp_document_guid: "806608ed-d2b4-4f83-8b22-739d5223c56f",
          exp_document_name: "OMS Manual",
          mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
          req_document_guid: "c95886bc-e4b2-4743-b38d-42eea858e9ee",
          expected_document_status: {
            exp_document_status_code: "MIA",
            description: "Not Received",
          },
          related_documents: [],
        },
      ],
      mine_type: [{ mine_tenure_type_code: "PLR" }, { mine_tenure_type_code: "MIN" }],
      verified_status: {
        mine_guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
        mine_name: "mine2",
        healthy_ind: true,
        verifying_user: null,
        verifying_timestamp: null,
      },
    },
  },
};

export const MINE_BASIC_INFO = [
  {
    mine_guid: "4a20dc10-fb8b-47e8-96bc-fbe287356ab5",
    mine_name: "Grant Smith",
    mine_no: "B572444",
    mine_note: "",
    major_mine_ind: true,
    region_code: "SW",
    mine_permit: [
      {
        permit_id: "25",
        permit_guid: "6515d1bf-23a9-4f36-8f12-bacbca8b138d",
        mine_guid: "4a20dc10-fb8b-47e8-96bc-fbe287356ab5",
        permit_no: "SdT1PbJX0R8c",
        permit_status_code: "C",
      },
      {
        permit_id: "24",
        permit_guid: "44a7f4c6-313d-4040-97d5-7944665d9556",
        mine_guid: "4a20dc10-fb8b-47e8-96bc-fbe287356ab5",
        permit_no: "TSRWCIB7Czc9",
        permit_status_code: "C",
      },
      {
        permit_id: "23",
        permit_guid: "b2dfa766-3de5-40d0-92f9-f31d7f98a65f",
        mine_guid: "4a20dc10-fb8b-47e8-96bc-fbe287356ab5",
        permit_no: "6oB0VXBqtzC1",
        permit_status_code: "O",
      },
    ],
    mine_status: [],
    mine_tailings_storage_facility: [],
    mine_type: [
      {
        mine_type_guid: "45388b3f-5449-4177-9962-3f78300d14af",
        mine_guid: "4a20dc10-fb8b-47e8-96bc-fbe287356ab5",
        mine_tenure_type_code: "MIN",
        mine_type_detail: [],
      },
    ],
    verified_status: null,
  },
  {
    mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
    mine_name: "Austin Myers",
    mine_no: "B905932",
    mine_note: "",
    major_mine_ind: false,
    region_code: "NW",
    mine_permit: [
      {
        permit_id: "22",
        permit_guid: "49604b29-c310-4b9f-99c9-77f3a348f8f5",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        permit_no: "3Lgy4iTpuFWR",
        permit_status_code: "C",
      },
      {
        permit_id: "21",
        permit_guid: "db8f0744-1624-452c-9b20-8fa78c816bd3",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        permit_no: "7HLtfIEMDvR9",
        permit_status_code: "C",
      },
      {
        permit_id: "20",
        permit_guid: "6f1b0d51-6e82-495c-a026-5d4494f7976e",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        permit_no: "hr1AWpnli0gq",
        permit_status_code: "O",
      },
      {
        permit_id: "19",
        permit_guid: "fa9d4d65-5444-43af-89ea-879c2441b1a0",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        permit_no: "lU1ncraKyx3n",
        permit_status_code: "O",
      },
      {
        permit_id: "18",
        permit_guid: "2c43083f-947f-4a79-b3ac-931341b7bf8d",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        permit_no: "zgxEmu4SarAx",
        permit_status_code: "O",
      },
      {
        permit_id: "17",
        permit_guid: "a86b48d8-b978-4373-a629-c19ba8bbf80c",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        permit_no: "A9b7qZudc13Y",
        permit_status_code: "O",
      },
    ],
    mine_status: [],
    mine_tailings_storage_facility: [
      {
        mine_tailings_storage_facility_guid: "7984deca-0f26-4a01-9cae-029af48e218b",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        mine_tailings_storage_facility_name: "First TSF",
      },
    ],
    mine_type: [
      {
        mine_type_guid: "864dcedf-bcd8-4a25-9576-b87c1c9e2fa0",
        mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
        mine_tenure_type_code: "PLR",
        mine_type_detail: [],
      },
    ],
    verified_status: null,
  },
];

export const PARTY = {
  partyIds: ["18133c75-49ad-4101-85f3-a43e35ae989a", "18145c75-49ad-0101-85f3-a43e45ae989a"],
  parties: {
    "18133c75-49ad-4101-85f3-a43e35ae989a": {
      guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
      name: "mock name",
    },
    "18145c75-49ad-0101-85f3-a43e45ae989a": {
      guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
      name: "mock Two",
    },
  },
  partiesWithAppointments: {
    "18133c75-49ad-4101-85f3-a43e35ae989a": {
      guid: "18133c75-49ad-4101-85f3-a43e35ae989a",
      name: "mock name",
      mine_party_appt: [],
    },
    "18145c75-49ad-0101-85f3-a43e45ae989a": {
      guid: "18145c75-49ad-0101-85f3-a43e45ae989a",
      name: "mock Two",
      mine_party_appt: [],
    },
  },
};

export const MINE_NAME_LIST = [
  {
    mine_guid: "fc72863d-83e8-46ba-90f9-87b0ed78823f",
    mine_name: "New Mine",
    mine_no: "BLAH6194",
    longitude: "-119.6963833",
    latitude: "51.4961750",
  },
  {
    mine_guid: "89a65274-581d-4862-8630-99f5f7687089",
    mine_name: "Mine Two",
    mine_no: "BLAH0502",
    longitude: "-119.6963833",
    latitude: "51.4961750",
  },
  {
    mine_guid: "75692b61-7ab9-406b-b1f5-8c9b857404ac",
    mine_name: "Legit Mine",
    mine_no: "BLAH6734",
    longitude: "-119.6963833",
    latitude: "51.4961750",
  },
];

export const MINESPACE_USERS = [
  {
    user_id: "1",
    email: "email1@srvr.com",
    keycloak_guid: "",
    mines: [""],
  },
  {
    user_id: "2",
    email: "email2@srvr.com",
    keycloak_guid: "",
    mines: [""],
  },
  {
    user_id: "3",
    email: "email3@srvr.com",
    keycloak_guid: "",
    mines: [""],
  },
];

export const MINESPACE_RESPONSE = { users: MINESPACE_USERS };

export const PAGE_DATA = {
  current_page: 1,
  has_next: true,
  has_prev: false,
  items_per_page: 25,
  mines: [],
  next_num: 2,
  prev_num: null,
  total: 9000,
  total_pages: 360,
};

export const COORDINATES = [48.70707, -122.489504];
export const STATUS_OPTIONS = {
  records: [
    {
      mine_status_xref_guid: "0b14738f-7980-49ba-b447-ff5a1859dded",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "ORP",
        description: "Orphaned",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "LTM",
        description: "Long Term Maintenance",
      },
      description:
        "The permittee is not able or available to meet permit obligations. The Ministry has taken over responsibility for the mine. Reclamation work is under way. There are long-term care and maintenance activities on site. Contractors are performing the work.",
    },
    {
      mine_status_xref_guid: "b001f941-2421-43a5-aade-f52fe4aecbd1",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "REC",
        description: "Reclamation",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "LTM",
        description: "Long Term Maintenance",
      },
      description:
        "The mine is closed and not expected to re-open. Reclamation work is under way. There are long-term care and maintenance activities on site. Permit and HSRC obligations are still in place. Site is subject to inspection and still has reporting to file with the Ministry.",
    },
    {
      mine_status_xref_guid: "1c04fe6a-ce61-4e0a-be69-2a4130dfaa18",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "ORP",
        description: "Orphaned",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "LWT",
        description: "Long Term Maintenance & Water Treatment",
      },
      description:
        "The permittee is not able or available to meet permit obligations. The Ministry has taken over responsibility for the mine. Reclamation work is under way. There are long-term care and maintenance activities on site in addition to water treatment. Contractors are performing the work.",
    },
    {
      mine_status_xref_guid: "044f007d-caa6-4139-8891-1a65935ee595",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "REC",
        description: "Reclamation",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "LWT",
        description: "Long Term Maintenance & Water Treatment",
      },
      description:
        "The mine is closed and not expected to re-open. Reclamation work is under way. There are long-term care and maintenance activities on site in addition to water treatment. Permit and HSRC obligations are still in place. Site is subject to inspection and still has reporting to file with the Ministry.",
    },
    {
      mine_status_xref_guid: "d360d834-b483-4e1a-8057-f85c9df8f184",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "REC",
        description: "Reclamation",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "PRP",
        description: "Permit Release Pending",
      },
      description:
        "Reclamation work is complete, no additional care required. Ministry needs to return bond and close permit for mine to be Abandoned.",
    },
    {
      mine_status_xref_guid: "efe8ee38-2abe-4ca7-9e42-ff1d3a142188",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "ORP",
        description: "Orphaned",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "RNS",
        description: "Reclamation Not Started",
      },
      description:
        "The permittee is not able or available to meet permit obligations. The Ministry has taken over responsibility for the mine. Reclamation work has not started. A contractor has not been retained to perform the work.",
    },
    {
      mine_status_xref_guid: "c419022a-5b13-4146-b23f-770d0f4c4337",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "ORP",
        description: "Orphaned",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: "SVR",
        description: "Site Visit Required",
      },
      description:
        "The permittee is not able or available to meet permit obligations. The Ministry will take over responsibility for the mine. The site needs to be visited and assessed to determine status and work required.",
    },
    {
      mine_status_xref_guid: "1397385d-80a5-47a0-a796-e6be9c28de06",
      mine_operation_status: {
        mine_operation_status_code: "ABN",
        description: "Abandoned",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: null,
        description: null,
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description:
        "The mine site is shut down, the permit obligations have been fulfilled. Bond has been returned if permittee completed reclamation work.",
    },
    {
      mine_status_xref_guid: "4c431538-2c2c-4010-9f65-e4d67db96818",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: null,
        description: null,
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description: null,
    },
    {
      mine_status_xref_guid: "d4b402ce-84ec-4c8f-a531-5e4abc110cdc",
      mine_operation_status: {
        mine_operation_status_code: "NS",
        description: "Not Started",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: null,
        description: null,
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description:
        "No mine related work has started at this site (including exploration). The mine record may have been created as placeholder for an exploration permit. Sites with closed exploration permits that are constructing production facilities also fit into this category.",
    },
    {
      mine_status_xref_guid: "1ef87948-17f8-4a06-8589-afc1bb4f4dd6",
      mine_operation_status: {
        mine_operation_status_code: "OP",
        description: "Operating",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "SEA",
        description: "Seasonal",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description:
        "This mine operates seasonally. Dates shown are from the most recently approved NoW application. Confirm operating dates with operator or permittee before visiting.",
    },
    {
      mine_status_xref_guid: "0b86ff77-fdcf-4e81-a6fc-2401e2f53c23",
      mine_operation_status: {
        mine_operation_status_code: "OP",
        description: "Operating",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "YR",
        description: "Year round",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description:
        "This mine operates year-round (can be conducting exploration and/or production activities).",
    },
    {
      mine_status_xref_guid: "f3e60c05-b3df-4a6b-83b5-f5f390ca1c71",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "UN",
        description: "Unknown",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description:
        "Ministry has not determined if the permittee is able or available to meet permit obligations. A visit to the site is required.",
    },
    {
      mine_status_xref_guid: "887873b5-6298-42db-a712-3fee5946fefe",
      mine_operation_status: {
        mine_operation_status_code: "CLD",
        description: "Closed",
      },
      mine_operation_status_reason: {
        mine_operation_status_reason_code: "CM",
        description: "Care & Maintenance",
      },
      mine_operation_status_sub_reason: {
        mine_operation_status_sub_reason_code: null,
        description: null,
      },
      description:
        "The mine is temporarily closed. It is expected that it will eventually re-open. Permit and HSRC obligations are still in place. Site is subject to inspection and still has reporting to file with the Ministry.",
    },
  ],
};

export const STATUS_OPTIONS_DROPDOWN = [
  {
    children: [],
    label: "Abandoned",
    title:
      "The mine site is shut down, the permit obligations have been fulfilled. Bond has been returned if permittee completed reclamation work.",
    value: "ABN",
  },
  {
    children: [
      {
        children: [],
        label: "Care & Maintenance",
        title:
          "The mine is temporarily closed. It is expected that it will eventually re-open. Permit and HSRC obligations are still in place. Site is subject to inspection and still has reporting to file with the Ministry.",
        value: "CM",
      },
      {
        children: [
          {
            children: [],
            label: "Long Term Maintenance",
            title:
              "The permittee is not able or available to meet permit obligations. The Ministry has taken over responsibility for the mine. Reclamation work is under way. There are long-term care and maintenance activities on site. Contractors are performing the work.",
            value: "LTM",
          },
          {
            children: [],
            label: "Long Term Maintenance & Water Treatment",
            title:
              "The permittee is not able or available to meet permit obligations. The Ministry has taken over responsibility for the mine. Reclamation work is under way. There are long-term care and maintenance activities on site in addition to water treatment. Contractors are performing the work.",
            value: "LWT",
          },
          {
            children: [],
            label: "Reclamation Not Started",
            title:
              "The permittee is not able or available to meet permit obligations. The Ministry has taken over responsibility for the mine. Reclamation work has not started. A contractor has not been retained to perform the work.",
            value: "RNS",
          },
          {
            children: [],
            label: "Site Visit Required",
            title:
              "The permittee is not able or available to meet permit obligations. The Ministry will take over responsibility for the mine. The site needs to be visited and assessed to determine status and work required.",
            value: "SVR",
          },
        ],
        label: "Orphaned",
        title: null,
        value: "ORP",
      },
      {
        children: [
          {
            children: [],
            label: "Long Term Maintenance",
            title:
              "The mine is closed and not expected to re-open. Reclamation work is under way. There are long-term care and maintenance activities on site. Permit and HSRC obligations are still in place. Site is subject to inspection and still has reporting to file with the Ministry.",
            value: "LTM",
          },
          {
            children: [],
            label: "Long Term Maintenance & Water Treatment",
            title:
              "The mine is closed and not expected to re-open. Reclamation work is under way. There are long-term care and maintenance activities on site in addition to water treatment. Permit and HSRC obligations are still in place. Site is subject to inspection and still has reporting to file with the Ministry.",
            value: "LWT",
          },
          {
            children: [],
            label: "Permit Release Pending",
            title:
              "Reclamation work is complete, no additional care required. Ministry needs to return bond and close permit for mine to be Abandoned.",
            value: "PRP",
          },
        ],
        label: "Reclamation",
        title: null,
        value: "REC",
      },
      {
        children: [],
        label: "Unknown",
        title:
          "Ministry has not determined if the permittee is able or available to meet permit obligations. A visit to the site is required.",
        value: "UN",
      },
    ],
    label: "Closed",
    title: null,
    value: "CLD",
  },
  {
    children: [],
    label: "Not Started",
    title:
      "No mine related work has started at this site (including exploration). The mine record may have been created as placeholder for an exploration permit. Sites with closed exploration permits that are constructing production facilities also fit into this category.",
    value: "NS",
  },
  {
    children: [
      {
        children: [],
        label: "Seasonal",
        title:
          "This mine operates seasonally. Dates shown are from the most recently approved NoW application. Confirm operating dates with operator or permittee before visiting.",
        value: "SEA",
      },
      {
        children: [],
        label: "Year round",
        title:
          "This mine operates year-round (can be conducting exploration and/or production activities).",
        value: "YR",
      },
    ],
    label: "Operating",
    title: null,
    value: "OP",
  },
];

export const a = [
  {
    value: "CLD",
    label: "Closed",
    children: [
      {
        value: "ORP",
        label: "Orphaned",
        children: [
          { value: "LTM", label: "Long Term Maintenance" },
          { value: "LWT", label: "Long Term Maintenance & Water Treatment" },
          { value: "RNS", label: "Reclamation Not Started" },
          { value: "SVR", label: "Site Visit Required" },
        ],
      },
      {
        value: "REC",
        label: "Reclamation",
        children: [
          { value: "LTM", label: "Long Term Maintenance" },
          { value: "LWT", label: "Long Term Maintenance & Water Treatment" },
          { value: "PRP", label: "Permit Release Pending" },
        ],
      },
      { value: "UN", label: "Unknown", children: [] },
      { value: "CM", label: "Care & Maintenance", children: [] },
    ],
  },
  { value: "ABN", label: "Abandoned", children: [] },
  { value: "NS", label: "Not Started", children: [] },
  {
    value: "OP",
    label: "Operating",
    children: [
      { value: "SEA", label: "Seasonal", children: [] },
      { value: "YR", label: "Year round", children: [] },
    ],
  },
];

export const REGION_OPTIONS = {
  options: [
    {
      value: "SW",
      label: "South West",
    },
    {
      value: "SC",
      label: "South Central",
    },
    {
      value: "NW",
      label: "North West",
    },
    {
      value: "NE",
      label: "North East",
    },
    {
      value: "SE",
      label: "South East",
    },
  ],
};

export const REGION_HASH = {
  SW: "South West",
  SC: "South Central",
  NW: "North West",
  NE: "North East",
  SE: "South East",
};

export const TENURE_TYPES = [
  { value: "COL", label: "Coal" },
  { value: "MIN", label: "Mineral" },
  { value: "PLR", label: "Placer" },
  { value: "BCL", label: "BC Land" },
];

export const TENURE_TYPES_RESPONSE = {
  records: [
    { mine_tenure_type_code: "COL", description: "Coal" },
    { mine_tenure_type_code: "MIN", description: "Mineral" },
    { mine_tenure_type_code: "PLR", description: "Placer" },
    { mine_tenure_type_code: "BCL", description: "BC Land" },
  ],
};

export const TENURE_HASH = {
  COL: "Coal",
  MIN: "Mineral",
  PLR: "Placer",
  BCL: "BC Land",
};

export const PERMITTEE = {
  permitteeIds: ["1c7da2c4-10d5-4c9f-994a-96427aa0c69b"],
  permittees: {
    "1c7da2c4-10d5-4c9f-994a-96427aa0c69b": {
      effective_date: "2018-10-02",
      expiry_date: null,
      party_guid: "1c7da2c4-10d5-4c9f-994a-96427aa0c69b",
      party_name: "Yivihoke",
      permit_guid: "1877097f-bf9d-40c8-a5fa-53d9a79623c9",
      permittee_guid: "3491c9a5-8f09-471f-bb1b-3ea246eb9796",
      party: {
        effective_date: "2018-10-03",
        email: "JgHxeyjv@aezZIwee.com",
        expiry_date: null,
        first_name: "Tiyudoveh",
        name: "Tiyudoveh Higesewawa",
        party_guid: "1c7da2c4-10d5-4c9f-994a-96427aa0c69b",
        party_name: "Higesewawa",
        party_type_code: "PER",
        phone_ext: null,
        phone_no: "123-123-1234",
      },
    },
  },
};

export const EXPECTED_DOCUMENT_STATUS_OPTIONS = {
  options: [
    { exp_document_status_code: "MIA", description: "Not Received" },
    { exp_document_status_code: "PRE", description: "Received / Pending Review" },
    { exp_document_status_code: "RIP", description: "Review In Progress" },
    { exp_document_status_code: "ACC", description: "Accepted" },
    { exp_document_status_code: "REJ", description: "Rejected / Waiting On Update" },
  ],
};

export const MINE_TSF_REQUIRED_REPORTS_RESPONSE = {
  required_documents: [
    {
      req_document_guid: "05388944-afb3-4ef4-9db1-94db72f6060e",
      req_document_name: "Annual Reclamation",
      req_document_description: "10.4.4a",
      req_document_category: "TSF",
    },
    {
      req_document_guid: "ca3f5a58-d7ea-4620-a064-507450f082de",
      req_document_name: "Annual DSI",
      req_document_description: "10.4.4b",
      req_document_category: "TSF",
    },
    {
      req_document_guid: "faa99067-3639-4d9c-a3e5-5401df15ad4b",
      req_document_name: "5 year DSR",
      req_document_description: "10.5.4",
      req_document_category: "TSF",
    },
  ],
};

export const MINE_TSF_REQUIRED_REPORTS = [
  { value: "05388944-afb3-4ef4-9db1-94db72f6060e", label: "Annual Reclamation" },
  { value: "ca3f5a58-d7ea-4620-a064-507450f082de", label: "Annual DSI" },
  { value: "faa99067-3639-4d9c-a3e5-5401df15ad4b", label: "5 year DSR" },
];

export const MINE_TSF_REQUIRED_REPORTS_HASH = {
  "05388944-afb3-4ef4-9db1-94db72f6060e": "Annual Reclamation",
  "ca3f5a58-d7ea-4620-a064-507450f082de": "Annual DSI",
  "faa99067-3639-4d9c-a3e5-5401df15ad4b": "5 year DSR",
};

export const PERMITS = [
  {
    permit_id: "283",
    permit_guid: "1628847c-060b-45f2-990f-815877174801",
    mine_guid: "8e9ca839-a28e-427e-997e-9ef23d9d97cd",
    permit_no: "C-12345",
    permit_status_code: "O",
    amendments: [
      {
        permit_amendment_guid: "822310fd-3a2c-44a9-a9ce-dee81acc9585",
        permit_guid: "71d00d45-9fda-45d3-a4b0-59a7ceb6518e",
        permit_amendment_status_code: "ACT",
        permit_amendment_type_code: "OGP",
        received_date: null,
        issue_date: "2019-04-01",
        authorization_end_date: null,
        description: "Initial permit issued.",
        related_documents: [
          {
            mine_guid: "8e9ca839-a28e-427e-997e-9ef23d9d97cd",
            document_guid: "31204ba5-5207-4fb5-b6c3-d47e55a0971c",
            document_name: "Adams_amendment_1.pdf",
            document_manager_guid: "64caef0e-060d-4875-a470-6c225b242723",
          },
        ],
      },
    ],
  },
];

export const USER_ACCESS_DATA = [
  "mds-mine-view",
  "idir",
  "mds-mine-create",
  "offline_access",
  "admin",
  "uma_authorization",
  "mds-mine-admin",
];

export const DISTURBANCE_OPTIONS = {
  options: [
    {
      description: "Surface",
      exclusive_ind: false,
      mine_disturbance_code: "SUR",
      mine_tenure_type_codes: ["COL", "MIN", "PLR", "BCL"],
    },
    {
      description: "Underground",
      exclusive_ind: false,
      mine_disturbance_code: "UND",
      mine_tenure_type_codes: ["COL", "MIN", "PLR"],
    },
    {
      description: "Coal Wash",
      exclusive_ind: true,
      mine_disturbance_code: "CWA",
      mine_tenure_type_codes: ["COL"],
    },
    {
      description: "Mill",
      exclusive_ind: true,
      mine_disturbance_code: "MIL",
      mine_tenure_type_codes: ["PLR"],
    },
  ],
};

export const DISTURBANCE_OPTIONS_HASH = {
  SUR: "Surface",
  UND: "Underground",
  CWA: "Coal Wash",
  MIL: "Mill",
};

export const COMMODITY_OPTIONS = {
  options: [
    {
      description: "Thermal Coal",
      exclusive_ind: true,
      mine_commodity_code: "TO",
      mine_tenure_type_codes: ["COL"],
    },
    {
      description: "Metallurgic",
      exclusive_ind: true,
      mine_commodity_code: "MC",
      mine_tenure_type_codes: ["COL"],
    },
    {
      description: "Construction Aggregate",
      exclusive_ind: false,
      mine_commodity_code: "CG",
      mine_tenure_type_codes: ["BCL"],
    },
  ],
};

export const DROPDOWN_COMMODITY_OPTIONS = [
  {
    value: "TO",
    label: "Thermal Coal",
  },
  {
    value: "MC",
    label: "Metallurgic",
  },
  {
    value: "CG",
    label: "Construction Aggregate",
  },
];

export const DROPDOWN_PROVINCE_OPTIONS = [
  {
    value: "BC",
    label: "BC",
  },
  {
    value: "AB",
    label: "AB",
  },
];

export const PROVINCE_OPTIONS = {
  options: [
    { description: "British Columbia", display_order: 10, sub_division_code: "BC" },
    { description: "Alberta", display_order: 10, sub_division_code: "AB" },
  ],
};

export const CONDITIONAL_COMMODITY_OPTIONS = {
  BCL: [{ label: "Construction Aggregate", value: "CG", exclusive: false }],
  COL: [
    { label: "Thermal Coal", value: "TO", exclusive: true },
    { label: "Metallurgic", value: "MC", exclusive: true },
  ],
};

export const COMMODITY_OPTIONS_HASH = {
  TO: "Thermal Coal",
  MC: "Metallurgic",
  CG: "Construction Aggregate",
};

export const CONDITIONAL_DISTURBANCE_OPTIONS = {
  BCL: [{ label: "Surface", value: "SUR", exclusive: false }],
  COL: [
    { label: "Surface", value: "SUR", exclusive: false },
    { label: "Underground", value: "UND", exclusive: false },
    { label: "Coal Wash", value: "CWA", exclusive: true },
  ],
  MIN: [
    { label: "Surface", value: "SUR", exclusive: false },
    { label: "Underground", value: "UND", exclusive: false },
  ],
  PLR: [
    { label: "Surface", value: "SUR", exclusive: false },
    { label: "Underground", value: "UND", exclusive: false },
    { label: "Mill", value: "MIL", exclusive: true },
  ],
};

export const COMPLIANCE = {
  last_inspection: "2018-12-12 00:00",
  last_inspector: "test",
  num_open_orders: 5,
  num_overdue_orders: 5,
  advisories: 5,
  warnings: 5,
  section_35_orders: 5,
  open_orders: [
    { order_no: "", report_no: "", due_date: "", inspector: "", violation: "", overdue: false },
  ],
};

export const MINE_TYPES = [
  {
    mine_tenure_type_code: [],
    mine_commodity_code: [],
    mine_disturbance_code: [],
  },
];

export const PARTYRELATIONSHIPS = [
  {
    mine_party_appt_guid: "17dbf02d-a3ba-40dd-8347-36cd04b7a49b",
    mine_guid: "db059bf5-14aa-4b98-af67-9c1e635a6120",
    party_guid: "43f513af-1142-443b-a1e6-f14ef857f4ea",
    mine_party_appt_type_code: "PMT",
    start_date: "2019-01-01",
    end_date: "2019-01-03",
    party: {
      party_guid: "43f513af-1142-443b-a1e6-f14ef857f4ea",
      party_type_code: "ORG",
      phone_no: "123-123-1234",
      phone_ext: null,
      email: "test@test.test",
      effective_date: "2019-01-02",
      expiry_date: null,
      party_name: "test company 2 ",
      name: "test company 2 ",
    },
    related_guid: "97b59b9c-8576-47cb-9a04-d7d0340730d5",
  },
  {
    mine_party_appt_guid: "43f513af-1142-443b-a1e6-f14ef857f4ea",
    mine_guid: "db059bf5-14aa-4b98-af67-9c1e635a6120",
    party_guid: "17dbf02d-a3ba-40dd-8347-36cd04b7a49b",
    mine_party_appt_type_code: "MMG",
    start_date: "2019-01-01",
    end_date: "2019-01-03",
    party: {
      party_guid: "97b59b9c-8576-47cb-9a04-d7d0340730d5",
      party_type_code: "PER",
      phone_no: "123-123-1234",
      phone_ext: null,
      email: "test@test.test",
      effective_date: "2019-01-02",
      expiry_date: null,
      party_name: "test dude 1 ",
      name: "test dude 1 ",
    },
    related_guid: "43f513af-1142-443b-a1e6-f14ef857f4ea",
  },
];

export const PARTY_RELATIONSHIP = [
  {
    mine_party_appt_guid: "17dbf02d-a3ba-40dd-8347-36cd04b7a49b",
    mine_guid: "db059bf5-14aa-4b98-af67-9c1e635a6120",
    party_guid: "43f513af-1142-443b-a1e6-f14ef857f4ea",
    mine_party_appt_type_code: "PMT",
    start_date: "2019-01-01",
    end_date: "2019-01-03",
    party: {
      party_guid: "43f513af-1142-443b-a1e6-f14ef857f4ea",
      party_type_code: "ORG",
      phone_no: "123-123-1234",
      phone_ext: null,
      email: "test@test.test",
      effective_date: "2019-01-02",
      expiry_date: null,
      party_name: "test company 2 ",
      name: "test company 2 ",
    },
    related_guid: "97b59b9c-8576-47cb-9a04-d7d0340730d5",
  },
];

export const MINE_INFO_HASH = { "db059bf5-14aa-4b98-af67-9c1e635a6120": "mockMineName" };

export const PARTY_RELATIONSHIP_TYPES = [
  {
    mine_party_appt_type_code: "MMG",
    description: "Mine Manager",
    display_order: "1",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "3",
  },
  {
    mine_party_appt_type_code: "PMT",
    description: "Permitee",
    display_order: "2",
    active_ind: "True",
    person: "True",
    organization: "True",
    grouping_level: "3",
  },
  {
    mine_party_appt_type_code: "MOR",
    description: "Mine Operator",
    display_order: "3",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "3",
  },
  {
    mine_party_appt_type_code: "MOW",
    description: "Mine Owner",
    display_order: "4",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "3",
  },
  {
    mine_party_appt_type_code: "EOR",
    description: "Engineer Of Record",
    display_order: "5",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "2",
  },
  {
    mine_party_appt_type_code: "EVS",
    description: "Environmental Specialist",
    display_order: "6",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "2",
  },
  {
    mine_party_appt_type_code: "EMM",
    description: "Exploration Mine Manager",
    display_order: "7",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "2",
  },
  {
    mine_party_appt_type_code: "SVR",
    description: "Supervisor",
    display_order: "8",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "1",
  },
  {
    mine_party_appt_type_code: "SHB",
    description: "Shift Boss",
    display_order: "9",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "1",
  },
  {
    mine_party_appt_type_code: "FRB",
    description: "Fire Boss",
    display_order: "10",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "1",
  },
  {
    mine_party_appt_type_code: "BLA",
    description: "Blaster",
    display_order: "11",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "1",
  },
  {
    mine_party_appt_type_code: "MRC",
    description: "Mine Rescue Contact",
    display_order: "12",
    active_ind: "True",
    person: "True",
    organization: "False",
    grouping_level: "1",
  },
];

export const PARTY_RELATIONSHIP_TYPE_HASH = {
  BLA: "Blaster",
  EMM: "Exploration Mine Manager",
  EOR: "Engineer Of Record",
  EVS: "Environmental Specialist",
  FRB: "Fire Boss",
  MMG: "Mine Manager",
  MOR: "Mine Operator",
  MOW: "Mine Owner",
  MRC: "Mine Rescue Contact",
  PMT: "Permittee",
  SHB: "Shift Boss",
  SVR: "Supervisor",
  TQP: "TSF Qualified Person",
};

export const MINEDOCUMENTS = {
  mine_documents: [
    {
      active_ind: "True",
      document_manager_guid: "4c7d88d6-e78d-48cf-a860-89b6a1e8903b",
      document_name: "05.4_Parent_Conduct.pdf",
      mine_document_guid: "11d15c31-5f0a-4a18-94de-e04e3ca7936f",
      mine_guid: "a2036de0-ce47-4f2c-a245-bbabb17cadc5",
    },
  ],
};

export const OPEN_ORDERS = [
  {
    overdue: true,
    due_date: "2019-01-31",
    order_no: "2",
    violation: "Mine isn't good enough",
    report_no: "report3",
    inspector: "George",
  },
  {
    overdue: false,
    due_date: "2019-02-28",
    order_no: "1",
    violation: "Wearing purple hats",
    report_no: "report2",
    inspector: "Paul",
  },
  {
    overdue: true,
    due_date: "2019-02-02",
    order_no: "7",
    violation: "Looks dangerous",
    report_no: "report1",
    inspector: "Paul",
  },
];

export const APPLICATION_STATUS_CODE_OPTIONS = [
  { application_status_code: "RIP", description: "In Review" },
  { application_status_code: "APR", description: "Approved" },
];

export const VARIANCES = {
  records: [
    {
      variance_guid: "0d3ec917-179f-4dbc-80a3-4c993fdfe596",
      compliance_article_id: 1,
      expiry_date: "2019-03-30",
      issue_date: "2019-03-01",
      note: "notesss",
      received_date: "2019-03-01",
      documents: [
        {
          created_at: "2019-05-02",
          document_manager_guid: "d7f64a25-6eaf-4bed-97fe-fd63ac347c70",
          document_name: "test.pdf",
          mine_document_guid: "33e6b965-2402-4229-a213-23bbe7fd3e99",
          mine_guid: "59e73109-48f7-4ad2-977c-3005b5bff010",
        },
      ],
    },
  ],
};

export const VARIANCE = {
  variance_guid: "0d3ec917-179f-4dbc-80a3-4c993fdfe596",
  compliance_article_id: 1,
  expiry_date: "2019-03-30",
  issue_date: "2019-03-01",
  note: "notesss",
  received_date: "2019-03-01",
  documents: [
    {
      created_at: "2019-05-02",
      document_manager_guid: "d7f64a25-6eaf-4bed-97fe-fd63ac347c70",
      document_name: "test.pdf",
      mine_document_guid: "33e6b965-2402-4229-a213-23bbe7fd3e99",
      mine_guid: "59e73109-48f7-4ad2-977c-3005b5bff010",
    },
  ],
};

export const COMPLIANCE_CODES = {
  records: [
    {
      article_act_code: "HSRCM",
      compliance_article_id: 305,
      description: "Spills",
      effective_date: "1970-01-01",
      expiry_date: null,
      paragraph: "7",
      section: "2",
      sub_paragraph: null,
      sub_section: "3",
    },
    {
      article_act_code: "HSRCM",
      compliance_article_id: 306,
      description: "Flammable Waste Storage",
      effective_date: "1970-01-01",
      expiry_date: null,
      paragraph: "8",
      section: "2",
      sub_paragraph: null,
      sub_section: "3",
    },
  ],
};

export const DROPDOWN_HSRCM_CODES = [
  {
    value: 305,
    label: "2.3.7 - Spills",
  },
  {
    value: 306,
    label: "2.3.8 - Flammable Waste Storage",
  },
];

export const HSRCM_HASH = {
  305: "2.3.7 - Spills",
  306: "2.3.8 - Flammable Waste Storage",
};

export const APPLICATION_LIST = {
  applications: [
    {
      application_guid: "85e05fe9-2b5a-4e6d-a7d0-cc1a2395dd14",
      application_no: "TA-09876",
      application_status_code: "RIP",
      description: "Test.",
      received_date: "2019-03-06",
    },
    {
      application_guid: "85e05fe9-2b5a-4e6d-a7d0-cc1a2395dd11",
      application_no: "TA-93475",
      application_status_code: "RIP",
      description: null,
      received_date: "2019-02-25",
    },
  ],
};

export const CORE_USERS = {
  results: [
    {
      core_user_guid: "51b3a499-a474-4d52-be99-5c5123d7501c",
      email: "user@gov.bc.ca",
      idir_user_detail: {
        bcgov_guid: "13b7821b-04d9-4a1d-a0f4-8f6bba2c6094",
        city: "Victoria",
        department: "Mines Health, Safety & Enforcement Division",
        title: "Geomatics Specialist",
        username: "IDIR\\BLAH",
      },
      last_logon: null,
      phone_no: "555-555-5556",
    },
  ],
};

export const CORE_USERS_DROPDOWN = [
  { value: "51b3a499-a474-4d52-be99-5c5123d7501c", label: "BLAH" },
];

export const CORE_USERS_HASH = {
  "51b3a499-a474-4d52-be99-5c5123d7501c": "BLAH",
};

export const INCIDENTS = {
  mine_incidents: [
    {
      mine_incident_guid: "dc101155-de3e-4f37-8303-eb6a6d2d5866",
      mine_incident_report_no: "2019-70",
      mine_incident_id_year: 2019,
      mine_guid: "3cfba01f-f8f3-4948-b488-d9e7a915f5ec",
      incident_timestamp: "2019-04-06T00:34:44+00:00",
      incident_description:
        "Paper others interview development military short design often town participant church road daughter.",
      reported_timestamp: "2019-03-17T17:42:37+00:00",
      reported_by: "Robert Bell",
      reported_by_role: "Investment banker, operational",
      followup_type_code: "NOA",
      followup_inspection_no: "721814",
      closing_report_summary:
        "Parent south person form evidence receive tree wide memory but medical car himself benefit key really series sea enter money prove if lawyer seven ready religious shake.",
    },
  ],
};

export const FOLLOWUP_ACTIONS = [
  {
    mine_incident_followup_type_code: "NOA",
    description: "No Action",
    display_order: 20,
    active_ind: true,
  },
];

export const SIMPLE_SEARCH_RESULTS = {
  search_terms: ["Abb"],
  search_results: [
    {
      result: {
        id: "aa3cb08a-ee1b-4dc9-8bf6-f54eb7484d4d",
        value: "Abbott Inc",
      },
      score: 375,
      type: "mine",
    },
    {
      result: {
        id: "5a993f02-1006-4a07-a448-f4064294de11",
        value: "Abbott PLC",
      },
      score: 375,
      type: "mine",
    },
  ],
};

export const VARIANCE_STATUS_OPTIONS = {
  records: [
    {
      variance_application_status_code: "REV",
      description: "In Review",
    },
    {
      variance_application_status_code: "NAP",
      description: "Not Applicable",
    },
    {
      variance_application_status_code: "APP",
      description: "Approved",
    },
    {
      variance_application_status_code: "DEN",
      description: "Denied",
    },
  ],
};

export const SEARCH_OPTIONS = [
  {
    model_id: "mine",
    description: "Mines",
  },
  {
    model_id: "party",
    description: "Contacts",
  },
  {
    model_id: "permit",
    description: "Permits",
  },
  {
    model_id: "mine_documents",
    description: "Mine Documents",
  },
  {
    model_id: "permit_documents",
    description: "Permit Documents",
  },
];

export const SEARCH_RESULTS = {
  search_terms: ["Abb"],
  search_results: {
    mine: [
      {
        result: {
          mine_guid: "aa3cb08a-ee1b-4dc9-8bf6-f54eb7484d4d",
          mine_name: "Abbott Inc",
          mine_no: "13353605",
          mine_region: "SW",
          mine_permit: [
            {
              permit_guid: "dfbc581b-fedf-415f-9543-b590d8ff9dcc",
              mine_guid: "aa3cb08a-ee1b-4dc9-8bf6-f54eb7484d4d",
              permit_no: "P-1707761",
              mine_name: "Abbott Inc",
              permitee: "Leslie Reed, Bailey and Gomez",
            },
          ],
          mine_status: [
            {
              status_labels: ["Closed", "Unknown"],
            },
          ],
        },
        score: 375,
        type: "mine",
      },
      {
        result: {
          mine_guid: "5a993f02-1006-4a07-a448-f4064294de11",
          mine_name: "Abbott PLC",
          mine_no: "63830194",
          mine_region: "SC",
          mine_permit: [
            {
              permit_guid: "ffcf7d9a-8a1a-4c56-9a2e-b5bbf82bc175",
              mine_guid: "5a993f02-1006-4a07-a448-f4064294de11",
              permit_no: "G-3117130",
              mine_name: "Abbott PLC",
              permitee: "Rachel Patterson LLC",
            },
          ],
          mine_status: [
            {
              status_labels: ["Closed", "Unknown"],
            },
          ],
        },
        score: 375,
        type: "mine",
      },
      {
        result: {
          mine_guid: "bbf2ccfe-9da6-4d88-95df-fe9997d64d96",
          mine_name: "Abbott Ltd",
          mine_no: "24326469",
          mine_region: "SW",
          mine_permit: [
            {
              permit_guid: "3528ffc0-f917-4553-aa14-639a396cbf71",
              mine_guid: "bbf2ccfe-9da6-4d88-95df-fe9997d64d96",
              permit_no: "M-8412263",
              mine_name: "Abbott Ltd",
              permitee: "Julia Martin, Chapman and White",
            },
          ],
          mine_status: [
            {
              status_labels: ["Closed"],
            },
          ],
        },
        score: 375,
        type: "mine",
      },
      {
        result: {
          mine_guid: "72de71d3-edc9-4e42-ba7b-7a18ff97a8e2",
          mine_name: "Abbott PLC",
          mine_no: "14676857",
          mine_region: "NW",
          mine_permit: [
            {
              permit_guid: "a4132a01-9d78-458a-b4d2-e7bb9ee0900b",
              mine_guid: "72de71d3-edc9-4e42-ba7b-7a18ff97a8e2",
              permit_no: "Q-9936020",
              mine_name: "Abbott PLC",
              permitee: "Cheryl Hernandez, Cook and Galvan",
            },
          ],
          mine_status: [
            {
              status_labels: ["Operating", "Year round"],
            },
          ],
        },
        score: 375,
        type: "mine",
      },
      {
        result: {
          mine_guid: "e8ccfdd4-c852-4116-be2c-b2cc7f3148a3",
          mine_name: "Abbott Inc",
          mine_no: "75293246",
          mine_region: "NE",
          mine_permit: [
            {
              permit_guid: "732002b5-fc47-4203-bd59-a41772392ccd",
              mine_guid: "e8ccfdd4-c852-4116-be2c-b2cc7f3148a3",
              permit_no: "CX-4742851",
              mine_name: "Abbott Inc",
              permitee: "Christina Brown PLC",
            },
          ],
          mine_status: [
            {
              status_labels: ["Closed", "Orphaned", "Site Visit Required"],
            },
          ],
        },
        score: 375,
        type: "mine",
      },
      {
        result: {
          mine_guid: "2b626772-1c3d-4e98-98d5-10d66b9d5555",
          mine_name: "Abbott-Garza",
          mine_no: "11557593",
          mine_region: "NW",
          mine_permit: [
            {
              permit_guid: "ed8395ec-b7c2-4e07-82e5-5bfb1a143bf3",
              mine_guid: "2b626772-1c3d-4e98-98d5-10d66b9d5555",
              permit_no: "G-1987651",
              mine_name: "Abbott-Garza",
              permitee: "Justin Bray Group",
            },
          ],
          mine_status: [
            {
              status_labels: ["Closed", "Reclamation", "Long Term Maintenance"],
            },
          ],
        },
        score: 321,
        type: "mine",
      },
    ],
    party: [
      {
        result: {
          party_guid: "c0816fad-ef1d-4fa8-be74-2a57d1b3d05b",
          name: "Cody Abbott",
          email: "Cody.Abbott@example.com",
          phone_no: "401-392-0090",
          mine_party_appt: [
            {
              mine_party_appt_type_code: "EOR",
              mine: {
                mine_name: "Lopez-Hale",
              },
            },
          ],
        },
        score: 75,
        type: "party",
      },
      {
        result: {
          party_guid: "bb93b7de-8ef3-44c2-8c3c-d1ce21e98aa6",
          name: "Eric Abbott",
          email: "Eric.Abbott@example.com",
          phone_no: "659-797-6365",
          mine_party_appt: [
            {
              mine_party_appt_type_code: "EOR",
              mine: {
                mine_name: "French Inc",
              },
            },
          ],
        },
        score: 75,
        type: "party",
      },
      {
        result: {
          party_guid: "e59f15a0-4bf1-4963-9546-1009e7e96f23",
          name: "Chad Abbott",
          email: "Chad.Abbott@example.com",
          phone_no: "242-001-2306",
          mine_party_appt: [
            {
              mine_party_appt_type_code: "EOR",
              mine: {
                mine_name: "Nguyen, Case and Fernandez",
              },
            },
          ],
        },
        score: 75,
        type: "party",
      },
      {
        result: {
          party_guid: "e412fdd0-e640-4bfa-805e-86b331f29b6d",
          name: "Kyle Abbott",
          email: "Kyle.Abbott@example.com",
          phone_no: "988-817-2676",
          mine_party_appt: [
            {
              mine_party_appt_type_code: "MMG",
              mine: {
                mine_name: "Anderson-Martin",
              },
            },
          ],
        },
        score: 75,
        type: "party",
      },
      {
        result: {
          party_guid: "70bf5e33-26a2-4bfa-9841-7fe46b089712",
          name: "Lee Abbott",
          email: "Lee.Abbott@example.com",
          phone_no: "593-906-1501",
          mine_party_appt: [
            {
              mine_party_appt_type_code: "MMG",
              mine: {
                mine_name: "Garza, Kelly and Williams",
              },
            },
          ],
        },
        score: 75,
        type: "party",
      },
      {
        result: {
          party_guid: "b4058b95-a367-428c-bc85-50c2e008e96f",
          name: "Dawn Abbott",
          email: "Dawn.Abbott@example.com",
          phone_no: "743-912-5775",
          mine_party_appt: [
            {
              mine_party_appt_type_code: "MMG",
              mine: {
                mine_name: "Schmidt Ltd",
              },
            },
          ],
        },
        score: 74,
        type: "party",
      },
    ],
    permit: [
      {
        result: {
          permit_guid: "9df4593a-4b58-4cee-8c3a-1cad5df7d3f6",
          mine_guid: "5bf528d0-9e5a-421e-92c5-7e088374dad5",
          permit_no: "CX-803",
          mine_name: "Wheeler Inc",
          permitee: "Carl Taylor, Goodwin and Wade",
        },
        score: 1285,
        type: "permit",
      },
      {
        result: {
          permit_guid: "b066a984-55fc-47aa-8ecf-fb3bf33ec2bb",
          mine_guid: "d5aeba94-6d58-4617-b71e-b16a145de86e",
          permit_no: "CX-7230",
          mine_name: "Reese, Brown and Diaz",
          permitee: "Traci Franklin-Baker",
        },
        score: 1125,
        type: "permit",
      },
      {
        result: {
          permit_guid: "88280bbd-18ab-483d-94d4-94e3063622f1",
          mine_guid: "af9b3e68-981e-42cb-9931-34f37d006378",
          permit_no: "CX-4926",
          mine_name: "Mcgrath and Sons",
          permitee: "Paul Parker, Mckee and Wilson",
        },
        score: 1125,
        type: "permit",
      },
      {
        result: {
          permit_guid: "38e01cc1-bc49-430b-9453-1df508b98e64",
          mine_guid: "5392aef5-9a7b-4a94-98cd-66582fe423cb",
          permit_no: "CX-9917",
          mine_name: "Brown-Wheeler",
          permitee: "Nathaniel Harris-Randolph",
        },
        score: 1125,
        type: "permit",
      },
      {
        result: {
          permit_guid: "db1cbe69-1f13-4be3-a874-0093af1e6a49",
          mine_guid: "74b668b3-0bce-4886-a93f-25fb59783ed3",
          permit_no: "CX-7566",
          mine_name: "Williams-Baird",
          permitee: "Jeffery Jones, Benson and Frazier",
        },
        score: 1125,
        type: "permit",
      },
      {
        result: {
          permit_guid: "ab74c658-891f-4a56-9604-fa4ba694ae73",
          mine_guid: "25003e54-314e-492e-b858-5af18381c6d3",
          permit_no: "CX-63820",
          mine_name: "Harmon and Sons",
          permitee: "Denise Arroyo-Moran",
        },
        score: 999,
        type: "permit",
      },
    ],
    mine_documents: [
      {
        result: {
          mine_guid: "e56e4252-1ce2-45e7-b362-762aa144bae0",
          mine_document_guid: "f8341ebb-d673-42c1-bad2-8db22d7e3ddb",
          document_name: "above.js",
          mine_name: "Conrad Ltd",
          document_manager_guid: "a8248ab9-43d0-478a-9380-0891868e3f8d",
        },
        score: 225,
        type: "mine_documents",
      },
      {
        result: {
          mine_guid: "6f165b2a-fa60-4ed5-aa06-0aeed06659b5",
          mine_document_guid: "be071be2-346d-44dc-8f8f-fb4201b50d7e",
          document_name: "about.js",
          mine_name: "Lozano, Hanson and Smith",
          document_manager_guid: "dfc16cff-6542-4807-9ffc-af7ec00efd79",
        },
        score: 225,
        type: "mine_documents",
      },
      {
        result: {
          mine_guid: "5422ce91-774a-4ced-beba-78d36bbb8676",
          mine_document_guid: "25db4852-83dd-4916-8c10-33e1d78aa279",
          document_name: "above.avi",
          mine_name: "Rose Inc",
          document_manager_guid: "a79fb6bd-d7b8-4a92-98e6-85598a2f853f",
        },
        score: 225,
        type: "mine_documents",
      },
      {
        result: {
          mine_guid: "7f2319d0-920d-4776-8856-4903c39665db",
          mine_document_guid: "c207486f-dbdd-4b3f-99a0-a650abddf85e",
          document_name: "above.avi",
          mine_name: "Hall Ltd",
          document_manager_guid: "14bd5393-8586-4561-afbe-727fdbefcb65",
        },
        score: 225,
        type: "mine_documents",
      },
      {
        result: {
          mine_guid: "51884cec-18d8-4dc3-87a3-6ed7047056f1",
          mine_document_guid: "2c111d6b-f360-4eb5-b37d-fe9a935cd40f",
          document_name: "above.avi",
          mine_name: "Lawrence-Vargas",
          document_manager_guid: "a8034837-a710-40f8-9c3b-8ae08a444b4d",
        },
        score: 225,
        type: "mine_documents",
      },
      {
        result: {
          mine_guid: "fa173dcb-4d5c-4e3d-a3d6-e379308688ea",
          mine_document_guid: "28060d75-f434-4f58-9082-fc4a05a696ad",
          document_name: "about.js",
          mine_name: "Thomas-Jackson",
          document_manager_guid: "99e7cf58-6b48-473c-9d05-4c010839eb8d",
        },
        score: 225,
        type: "mine_documents",
      },
    ],
    permit_documents: [],
  },
};

export const MINE_SEARCH_RESULTS = [
  {
    mine_guid: "aa3cb08a-ee1b-4dc9-8bf6-f54eb7484d4d",
    mine_name: "Abbott Inc",
    mine_no: "13353605",
    mine_region: "SW",
    mine_permit: [
      {
        permit_guid: "dfbc581b-fedf-415f-9543-b590d8ff9dcc",
        mine_guid: "aa3cb08a-ee1b-4dc9-8bf6-f54eb7484d4d",
        permit_no: "P-1707761",
        mine_name: "Abbott Inc",
        permitee: "Leslie Reed, Bailey and Gomez",
      },
    ],
    mine_status: [
      {
        status_labels: ["Closed", "Unknown"],
      },
    ],
  },
  {
    mine_guid: "5a993f02-1006-4a07-a448-f4064294de11",
    mine_name: "Abbott PLC",
    mine_no: "63830194",
    mine_region: "SC",
    mine_permit: [
      {
        permit_guid: "ffcf7d9a-8a1a-4c56-9a2e-b5bbf82bc175",
        mine_guid: "5a993f02-1006-4a07-a448-f4064294de11",
        permit_no: "G-3117130",
        mine_name: "Abbott PLC",
        permitee: "Rachel Patterson LLC",
      },
    ],
    mine_status: [
      {
        status_labels: ["Closed", "Unknown"],
      },
    ],
  },
  {
    mine_guid: "bbf2ccfe-9da6-4d88-95df-fe9997d64d96",
    mine_name: "Abbott Ltd",
    mine_no: "24326469",
    mine_region: "SW",
    mine_permit: [
      {
        permit_guid: "3528ffc0-f917-4553-aa14-639a396cbf71",
        mine_guid: "bbf2ccfe-9da6-4d88-95df-fe9997d64d96",
        permit_no: "M-8412263",
        mine_name: "Abbott Ltd",
        permitee: "Julia Martin, Chapman and White",
      },
    ],
    mine_status: [
      {
        status_labels: ["Closed"],
      },
    ],
  },
  {
    mine_guid: "72de71d3-edc9-4e42-ba7b-7a18ff97a8e2",
    mine_name: "Abbott PLC",
    mine_no: "14676857",
    mine_region: "NW",
    mine_permit: [
      {
        permit_guid: "a4132a01-9d78-458a-b4d2-e7bb9ee0900b",
        mine_guid: "72de71d3-edc9-4e42-ba7b-7a18ff97a8e2",
        permit_no: "Q-9936020",
        mine_name: "Abbott PLC",
        permitee: "Cheryl Hernandez, Cook and Galvan",
      },
    ],
    mine_status: [
      {
        status_labels: ["Operating", "Year round"],
      },
    ],
  },
  {
    mine_guid: "e8ccfdd4-c852-4116-be2c-b2cc7f3148a3",
    mine_name: "Abbott Inc",
    mine_no: "75293246",
    mine_region: "NE",
    mine_permit: [
      {
        permit_guid: "732002b5-fc47-4203-bd59-a41772392ccd",
        mine_guid: "e8ccfdd4-c852-4116-be2c-b2cc7f3148a3",
        permit_no: "CX-4742851",
        mine_name: "Abbott Inc",
        permitee: "Christina Brown PLC",
      },
    ],
    mine_status: [
      {
        status_labels: ["Closed", "Orphaned", "Site Visit Required"],
      },
    ],
  },
  {
    mine_guid: "2b626772-1c3d-4e98-98d5-10d66b9d5555",
    mine_name: "Abbott-Garza",
    mine_no: "11557593",
    mine_region: "NW",
    mine_permit: [
      {
        permit_guid: "ed8395ec-b7c2-4e07-82e5-5bfb1a143bf3",
        mine_guid: "2b626772-1c3d-4e98-98d5-10d66b9d5555",
        permit_no: "G-1987651",
        mine_name: "Abbott-Garza",
        permitee: "Justin Bray Group",
      },
    ],
    mine_status: [
      {
        status_labels: ["Closed", "Reclamation", "Long Term Maintenance"],
      },
    ],
  },
];

export const PERMIT_SEARCH_RESULTS = [
  {
    permit_guid: "9df4593a-4b58-4cee-8c3a-1cad5df7d3f6",
    mine_guid: "5bf528d0-9e5a-421e-92c5-7e088374dad5",
    permit_no: "CX-803",
    mine_name: "Wheeler Inc",
    permitee: "Carl Taylor, Goodwin and Wade",
  },

  {
    permit_guid: "b066a984-55fc-47aa-8ecf-fb3bf33ec2bb",
    mine_guid: "d5aeba94-6d58-4617-b71e-b16a145de86e",
    permit_no: "CX-7230",
    mine_name: "Reese, Brown and Diaz",
    permitee: "Traci Franklin-Baker",
  },

  {
    permit_guid: "88280bbd-18ab-483d-94d4-94e3063622f1",
    mine_guid: "af9b3e68-981e-42cb-9931-34f37d006378",
    permit_no: "CX-4926",
    mine_name: "Mcgrath and Sons",
    permitee: "Paul Parker, Mckee and Wilson",
  },

  {
    permit_guid: "38e01cc1-bc49-430b-9453-1df508b98e64",
    mine_guid: "5392aef5-9a7b-4a94-98cd-66582fe423cb",
    permit_no: "CX-9917",
    mine_name: "Brown-Wheeler",
    permitee: "Nathaniel Harris-Randolph",
  },

  {
    permit_guid: "db1cbe69-1f13-4be3-a874-0093af1e6a49",
    mine_guid: "74b668b3-0bce-4886-a93f-25fb59783ed3",
    permit_no: "CX-7566",
    mine_name: "Williams-Baird",
    permitee: "Jeffery Jones, Benson and Frazier",
  },

  {
    permit_guid: "ab74c658-891f-4a56-9604-fa4ba694ae73",
    mine_guid: "25003e54-314e-492e-b858-5af18381c6d3",
    permit_no: "CX-63820",
    mine_name: "Harmon and Sons",
    permitee: "Denise Arroyo-Moran",
  },
];

export const PARTY_SEARCH_RESULTS = [
  {
    party_guid: "c0816fad-ef1d-4fa8-be74-2a57d1b3d05b",
    name: "Cody Abbott",
    email: "Cody.Abbott@example.com",
    phone_no: "401-392-0090",
    mine_party_appt: [
      {
        mine_party_appt_type_code: "EOR",
        mine: {
          mine_name: "Lopez-Hale",
        },
      },
    ],
  },
  {
    party_guid: "bb93b7de-8ef3-44c2-8c3c-d1ce21e98aa6",
    name: "Eric Abbott",
    email: "Eric.Abbott@example.com",
    phone_no: "659-797-6365",
    mine_party_appt: [
      {
        mine_party_appt_type_code: "EOR",
        mine: {
          mine_name: "French Inc",
        },
      },
    ],
  },
  {
    party_guid: "e59f15a0-4bf1-4963-9546-1009e7e96f23",
    name: "Chad Abbott",
    email: "Chad.Abbott@example.com",
    phone_no: "242-001-2306",
    mine_party_appt: [
      {
        mine_party_appt_type_code: "EOR",
        mine: {
          mine_name: "Nguyen, Case and Fernandez",
        },
      },
    ],
  },
  {
    party_guid: "e412fdd0-e640-4bfa-805e-86b331f29b6d",
    name: "Kyle Abbott",
    email: "Kyle.Abbott@example.com",
    phone_no: "988-817-2676",
    mine_party_appt: [
      {
        mine_party_appt_type_code: "MMG",
        mine: {
          mine_name: "Anderson-Martin",
        },
      },
    ],
  },

  {
    party_guid: "70bf5e33-26a2-4bfa-9841-7fe46b089712",
    name: "Lee Abbott",
    email: "Lee.Abbott@example.com",
    phone_no: "593-906-1501",
    mine_party_appt: [
      {
        mine_party_appt_type_code: "MMG",
        mine: {
          mine_name: "Garza, Kelly and Williams",
        },
      },
    ],
  },

  {
    party_guid: "b4058b95-a367-428c-bc85-50c2e008e96f",
    name: "Dawn Abbott",
    email: "Dawn.Abbott@example.com",
    phone_no: "743-912-5775",
    mine_party_appt: [
      {
        mine_party_appt_type_code: "MMG",
        mine: {
          mine_name: "Schmidt Ltd",
        },
      },
    ],
  },
];

export const MINE_DOCUMENT_SEARCH_RESULTS = [
  {
    mine_guid: "e56e4252-1ce2-45e7-b362-762aa144bae0",
    mine_document_guid: "f8341ebb-d673-42c1-bad2-8db22d7e3ddb",
    document_name: "above.js",
    mine_name: "Conrad Ltd",
    document_manager_guid: "a8248ab9-43d0-478a-9380-0891868e3f8d",
  },
  {
    mine_guid: "6f165b2a-fa60-4ed5-aa06-0aeed06659b5",
    mine_document_guid: "be071be2-346d-44dc-8f8f-fb4201b50d7e",
    document_name: "about.js",
    mine_name: "Lozano, Hanson and Smith",
    document_manager_guid: "dfc16cff-6542-4807-9ffc-af7ec00efd79",
  },
  {
    mine_guid: "5422ce91-774a-4ced-beba-78d36bbb8676",
    mine_document_guid: "25db4852-83dd-4916-8c10-33e1d78aa279",
    document_name: "above.avi",
    mine_name: "Rose Inc",
    document_manager_guid: "a79fb6bd-d7b8-4a92-98e6-85598a2f853f",
  },
  {
    mine_guid: "7f2319d0-920d-4776-8856-4903c39665db",
    mine_document_guid: "c207486f-dbdd-4b3f-99a0-a650abddf85e",
    document_name: "above.avi",
    mine_name: "Hall Ltd",
    document_manager_guid: "14bd5393-8586-4561-afbe-727fdbefcb65",
  },
  {
    mine_guid: "51884cec-18d8-4dc3-87a3-6ed7047056f1",
    mine_document_guid: "2c111d6b-f360-4eb5-b37d-fe9a935cd40f",
    document_name: "above.avi",
    mine_name: "Lawrence-Vargas",
    document_manager_guid: "a8034837-a710-40f8-9c3b-8ae08a444b4d",
  },
  {
    mine_guid: "fa173dcb-4d5c-4e3d-a3d6-e379308688ea",
    mine_document_guid: "28060d75-f434-4f58-9082-fc4a05a696ad",
    document_name: "about.js",
    mine_name: "Thomas-Jackson",
    document_manager_guid: "99e7cf58-6b48-473c-9d05-4c010839eb8d",
  },
];

export const VARIANCE_DROPDOWN_STATUS_OPTIONS = [
  {
    label: "In Review",
    value: "REV",
  },
  {
    label: "Not Applicable",
    value: "NAP",
  },
  {
    label: "Approved",
    value: "APP",
  },
  {
    label: "Denied",
    value: "DEN",
  },
];

export const VARIANCE_STATUS_OPTIONS_HASH = {
  REV: "In Review",
  NAP: "Not Applicable",
  APP: "Approved",
  DEN: "Denied",
};
