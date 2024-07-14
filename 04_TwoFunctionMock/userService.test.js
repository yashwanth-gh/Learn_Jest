// userService.test.js
import { fetchUser, fetchPost } from "./api";
import getUserName from "./userService";

jest.mock("./api", () => {
  const originalModule = jest.requireActual("./api"); // Import the actual module

  return {
    __esModule: true,
    ...originalModule,
    fetchUser: jest.fn().mockResolvedValue({ name: "John Doe" }), // Mock fetchUser
    fetchPost: jest.fn().mockResolvedValue({ title: "Mocked Post" }), // Mock fetchPost
  };
});

test("should return user name", async () => {
  // Act
  const userName = await getUserName(1);

  // Assert
  expect(userName).toBe("John Doe");
});

test("should return mocked post title", async () => {
  // Act
  const post = await fetchPost(1);

  // Assert
  expect(post.title).toBe("Mocked Post");
});
