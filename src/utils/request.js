export function request(url, method, data) {
  const BASE_URL = "http://localhost:3001";

  return fetch(BASE_URL + url, {
    headers: {
      "content-type": "application/json",
    },
    method: method || "GET",
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res.json());
}
