export const sendGetRequest = async (url) => {
  const options = {
    method: "GET"
  }
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}