import axios from "axios";

const API_URL = "http://localhost:5000"; // Adjust this if needed

export const fetchElectionResults = async () => {
  try {
    const response = await axios.get(`${API_URL}/results`);
    return response.data;
  } catch (error) {
    console.error("Error fetching election results:", error);
    return [];
  }
};
