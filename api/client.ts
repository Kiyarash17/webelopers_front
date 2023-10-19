import { Api } from "./Api";

export const clientApi = new Api({
  baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
});

export default clientApi;
