import { getConnectionString } from '@netlify/database';
import game from '../../server.js';

game.connectDatabase(getConnectionString(), { secureCookies: process.env.NETLIFY_DEV !== 'true' });

export default game.server;
