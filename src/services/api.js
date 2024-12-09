// import axios from "axios";

// const API_KEY = "bKDI2etZpoO5aLZGwq1QW7MVpMbrAGAh-5iUHTPtWtY";
// const BASE_URL = "https://api.unsplash.com";

// export async function getImages({ query, page }) {
//   const response = await axios.get(`${BASE_URL}/search/photos`, {
//     params: {
//       query,
//       page,
//       per_page: 15,
//       client_id: API_KEY,
//     },
//   });
//   return response.data;
// }

import axios from "axios";

const API_KEY = "bKDI2etZpoO5aLZGwq1QW7MVpMbrAGAh-5iUHTPtWtY";
const BASE_URL = "https://api.unsplash.com";

export async function getImages({ query, page }) {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
}
