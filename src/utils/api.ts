import axios from "axios";

const api = axios.create({
  headers: { "Content-Type": "application/json" },
  timeout: 60 * 1000,
});

export const callApi = async (endpoint: string, method = "POST", data = {}) => {
  try {
    const response = await api({
      method,
      url: endpoint,
      data,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
