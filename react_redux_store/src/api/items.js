const BASE_URL = 'https://my-json-server.typicode.com/zarichnyi/';

export const getItems = async() => {
  const response = await fetch(`${BASE_URL}data/items`);
  const result = await response.json();

  return result;
}
