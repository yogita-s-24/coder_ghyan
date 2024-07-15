import { config as conf } from 'dotenv';
             
conf();

const _config = {
    port: process.env.PORT,
    databaseUrl:process.env.MONGODB_CONNECTION
};

export const config = Object.freeze(_config);