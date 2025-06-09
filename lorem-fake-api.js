const result = sendHttpRequest(
  "https://fakeapi.net/lorem/70",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  },
);

if (result.status == "success") {
  alert(result.response.body);
} else if (result.status == "httpError") {
  alert("Failed with status code " + result.response.statusCode);
} else {
  alert("Failed with network error: " + result.networkError);
}
