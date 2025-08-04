import { auth } from "@/lib/auth"; // Path to your auth configuration file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
