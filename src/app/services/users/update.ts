import { IUserUpdateInput } from "@/app/types/user";
import { getStrapiURL } from "@/app/utils/api-helpers";

export async function update(
  token: string,
  id: number,
  input: IUserUpdateInput
): Promise<any> {
  const res = await fetch(getStrapiURL() + "/api/users/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  return data;
}
