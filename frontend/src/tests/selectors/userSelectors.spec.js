import { getCoreUsers, getDropdownCoreUsers, getCoreUsersHash } from "@/selectors/userSelectors";
import userReducer from "@/reducers/userReducer";
import { storeCoreUserList } from "@/actions/userActions";
import { USERS } from "@/constants/reducerTypes";
import * as Mock from "@/tests/mocks/dataMocks";

const mockState = {
  coreUsers: Mock.CORE_USERS.results,
};

describe("userSelectors", () => {
  const { coreUsers } = mockState;

  it("`getCoreUsers` calls `userReducer.getCoreUsers`", () => {
    const storeAction = storeCoreUserList(Mock.CORE_USERS);
    const storeState = userReducer({}, storeAction);
    const localMockState = {
      [USERS]: storeState,
    };
    expect(getCoreUsers(localMockState)).toEqual(coreUsers);
  });

  it("`getDropdownCoreUsers` calls `userReducer.getCoreUsers`", () => {
    const storeAction = storeCoreUserList(Mock.CORE_USERS);
    const storeState = userReducer({}, storeAction);
    const localMockState = {
      [USERS]: storeState,
    };
    expect(getDropdownCoreUsers(localMockState)).toEqual(Mock.CORE_USERS_DROPDOWN);
  });

  it("`getCoreUsersHash` calls `userReducer.getCoreUsers`", () => {
    const storeAction = storeCoreUserList(Mock.CORE_USERS);
    const storeState = userReducer({}, storeAction);
    const localMockState = {
      [USERS]: storeState,
    };
    expect(getCoreUsersHash(localMockState)).toEqual(Mock.CORE_USERS_HASH);
  });
});
