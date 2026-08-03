import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Fija la raíz al proyecto (hay un lockfile suelto en la carpeta de usuario).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
