// asyncFunction.js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 1000);
  });
}

function fetchDataWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("error");
    }, 1000);
  });
}

export { fetchData, fetchDataWithError };
