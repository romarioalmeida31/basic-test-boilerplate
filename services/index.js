import axios from "axios";

const api = axios.create({
  baseURL: "https://front-br-challenges.web.app/api/v2/green-thumb/?",
});

export const getPlants = async (sun, water, pets) =>
  await api
    .get("", {
      params: {
        sun,
        water,
        pets,
      },
    })
    .then((response) => {
      return {
        success: response["status"],
        data: response["data"] ? response["data"] : [],
      };
    })
    .catch((error) => {
      if (error.response) {
        return {
          success: false,
          message: error.response.data.error,
          status: error.response.data.status,
        };
      } else {
        return {
          success: false,
          message: "Unexpected error",
        };
      }
    });

export default api;
