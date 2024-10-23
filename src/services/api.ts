const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-api-gateway-url.amazonaws.com/prod';

export const healthApi = {
  async getCovidStats() {
    const response = await fetch(`${API_BASE_URL}/covid-stats`);
    if (!response.ok) throw new Error('Failed to fetch COVID stats');
    return response.json();
  },

  async getHealthResources() {
    const response = await fetch(`${API_BASE_URL}/health-resources`);
    if (!response.ok) throw new Error('Failed to fetch health resources');
    return response.json();
  }
};