import { AppError } from "@/common/domain/errors/app-error";
import "dotenv/config";

import z from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  API_URL: z.string().default("hhtp:\\localhost:3333"),
});

const _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  throw new AppError("Invalid environment variables");
}

export const env = _env.data;
