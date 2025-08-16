import { apiClient } from "@repo/api-client";
import { UsersResponse } from "./types";

export async function getUsers({
  page = 1,
  per_page = 10,
}: {
  page: number;
  per_page: number;
}) {
  try {
    const response = await apiClient.get<UsersResponse>("/users", {
      params: {
        page,
        per_page,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Get users failed");
  }
}
