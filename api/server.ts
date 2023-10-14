import { Api } from "./Api";

export const serverApi = new Api({ baseUrl: process.env.BASE_API_INTERNAL });

export default serverApi;
