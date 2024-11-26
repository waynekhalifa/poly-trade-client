import { fetchAPI } from "./fetch-api";

export async function getAuthUser(token: string) {
  const path = `/users/me`;
  const urlParamsObject = {
    populate: ["role"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
