import { createTRPCMsw } from "msw-trpc";
import { getBaseUrl } from "@/utils/api";
import type { AppRouter } from "../server/api/root";

export const trpcMsw = createTRPCMsw<AppRouter>({
  basePath: "/api/trpc",
  baseUrl: getBaseUrl(),
});