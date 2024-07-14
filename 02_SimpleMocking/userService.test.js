import getUserName from "./user.js";
import fetchUser from "./api.js";

jest.mock("./api.js"); // Mock the entire 'api' module

test("should return user name", async () => {
  // Arrange
  fetchUser.mockResolvedValue({ name: "John Doe" });

  // Act
  const userName = await getUserName(1);

  // Assert
  expect(userName).toBe("John Doe");
});
