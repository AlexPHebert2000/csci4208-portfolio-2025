export const sendGetRequest = async (url) => {
  const options = {
    method: "GET"
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export const sendPutRequest = async (url, data) => {
  const options = {
    method: "PUT",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(data)
  }
  console.log(options)
  const response = await fetch(url, options);
  return response;
}