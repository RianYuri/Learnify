const setUserDataMock = vi.fn();
const userDataMock = { userName: "" };
export const mockedUserDataContext = {
  userData: userDataMock,
  setUserData: setUserDataMock,
};
