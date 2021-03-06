const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export default {
  endpoints: {
    userProfile: (userId: string): string => `${API_BASE_URL}/users/${userId}`,
    users: `${API_BASE_URL}/users`,
  },
};
