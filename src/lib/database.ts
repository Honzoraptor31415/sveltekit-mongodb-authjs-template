import { MongoClient } from 'mongodb';
import { DB_URI } from '$env/static/private';

export const client = new MongoClient(DB_URI);

await client.connect();

export default client.db('main');
