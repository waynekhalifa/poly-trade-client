"use server";

import { cookies } from "next/headers";
import { getStrapiURL } from "./api-helpers";

export async function updateUser(
  token: string,
  id: number,
  updateInput: any
): Promise<any> {
  const res = await fetch(getStrapiURL() + "/api/users/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updateInput),
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  cookies().set("session", JSON.stringify({ token, ...data }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });

  return data;
}
