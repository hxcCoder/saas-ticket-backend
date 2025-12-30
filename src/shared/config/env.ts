export const env = {
  jwtSecret: process.env.JWT_SECRET as string,
  nodeEnv: process.env.NODE_ENV || "development",
};
