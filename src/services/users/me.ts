import { fetchAPI } from "@/utils/fetch-api";

export async function me(token: string) {
  const path = `/users/me`;
  const urlParamsObject = { populate: ["role"] };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
