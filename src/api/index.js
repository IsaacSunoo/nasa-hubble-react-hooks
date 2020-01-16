export const fetchCall = async (url, options) => {
  const response = await fetch(url, option);
  if (response.ok && response.status !== 204) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Error retrieving data. Status: ${response.status}. Body: ${response.body}`);
  }
}