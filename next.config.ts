import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

nextConfig.images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      pathname: "/Frame%20168-xPH4VFiJLkWDBhYGa9sGA2NfPdU8HF.png",
    },
  ],
};

export default nextConfig;