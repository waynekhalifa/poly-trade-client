"use server";

import { cookies } from "next/headers";

export const setSession = async (session: any) => {
  cookies().set("session", JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
};
