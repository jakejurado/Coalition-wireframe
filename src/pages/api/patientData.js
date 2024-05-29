import fetch from 'node-fetch';
import base64 from 'base-64';

export default async function handler(req, res) {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const auth = base64.encode(`${username}:${password}`);
    const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
  
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${auth}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Fetch data error:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
