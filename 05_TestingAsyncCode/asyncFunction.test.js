// asyncFunction.test.js
import { fetchData, fetchDataWithError } from "./asyncFunction";

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("Fetch fails with an error", async () => {
  await expect(fetchDataWithError()).rejects.toBe("error");
});
