declare namespace NodeJS {
  interface ProcessEnv {
    npm_package_name: string;
    npm_package_version: string;
    NODE_ENV: "development" | "production";
  }
}
