const devBaseUrl = "https://httpbin.org";
const productBaseUrl = "https.production.org";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseUrl : productBaseUrl;

export const TIMEOUT = 5000;
