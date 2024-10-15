import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { SwapiResponse } from './types';
import { BASE_URL, proxy } from './config';

const agent = new HttpsProxyAgent(proxy);

export async function fetchData(resource: string, id: string): Promise<void> {
  const url = `${BASE_URL}${resource}/${id}/`;
  console.log(`Fetching data from: ${url} via proxy: ${proxy}`);

  try {
    const response = await fetch(url, { agent });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: SwapiResponse = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error fetching data:', (error as Error).message);
  }
}
