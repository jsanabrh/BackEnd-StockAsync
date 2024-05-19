import { registerAs } from '@nestjs/config';

export default registerAs('dbConfig', () => {
  return {
    db: {
      connection: process.env.DB_CONNECTION,
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      srv: process.env.DB_SRV,
      cluster: process.env.DB_CLUSTER,
      retry: process.env.DB_RETRY,
    },
    env: process.env.NODE_ENV || 'local',
    session: {
      accessToken: process.env.ACCESS_TOKEN,
      jwtAccessTokenSecret: process.env.JWT_ACCESS_SECRET,
      jwtAccessTokenExpiresTime: process.env.JWT_ACCESS_EXPIRES_TIME,
    },
  };
});
