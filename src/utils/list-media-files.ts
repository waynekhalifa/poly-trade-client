import { fetchAPI } from "./fetch-api";

export async function listMediaFiles(
  token: string,
  pagination: any = {}
): Promise<any> {
  const path = `/upload/files`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const sort: any = { createdAt: "desc" };
  const urlParamsObject = { sort, pagination };

  return await fetchAPI(path, urlParamsObject, options);
}
