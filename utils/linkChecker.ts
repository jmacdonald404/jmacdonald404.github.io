import fetch from 'node-fetch';

interface LinkStatus {
  url: string;
  isAlive: boolean;
  lastChecked: Date;
  statusCode?: number;
  error?: string;
}

interface LinkCheckError extends Error {
  message: string;
}

export async function checkLink(url: string): Promise<LinkStatus> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      method: 'HEAD', // HEAD request is lighter than GET
      signal: controller.signal,
      redirect: 'follow',
    });

    clearTimeout(timeout);

    return {
      url,
      isAlive: response.ok,
      lastChecked: new Date(),
      statusCode: response.status
    };
  } catch (error: unknown) {
    const linkError = error as LinkCheckError;
    return {
      url,
      isAlive: false,
      lastChecked: new Date(),
      error: linkError.message
    };
  }
}

export async function batchCheckLinks(urls: string[]): Promise<LinkStatus[]> {
  // Process in batches of 5 to avoid overwhelming servers
  const batchSize = 5;
  const results: LinkStatus[] = [];
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(url => checkLink(url))
    );
    results.push(...batchResults);
    
    // Add a small delay between batches
    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
} 