const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  turbopack: {
    root: path.join(__dirname, "../../"), // 🔥 DAS IST DER FIX
  },
};

module.exports = nextConfig;