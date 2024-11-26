"use server";

import { cookies } from "next/headers";

export const logout = async (): Promise<void> => {
  cookies().delete("token");
  cookies().delete("session");
};
