/**
 * Fetches data from the specified URL.
 *
 * @param url The URL to fetch data from.
 * @returns A promise that resolves to the data fetched from the API, parsed as JSON.
 */

export default async function fetchData<T = any>(
  route: string,
  locale:string = 'sq',
  fetchOptions?: RequestInit
): Promise<T> {
  // const baseUrl = process.env.API_BASE_URL || 'http://localhost:1337/api${route}?locale=sq';
  const baseUrl = `http://localhost:1337/api${route}&locale=${locale}`;
  try {
    const response: Response = await fetch(`${baseUrl}`, fetchOptions);
    if (!response.ok) {
      return [];
      // throw new Error(
        // `API call failed: ${response.status} - ${response.statusText}`
      // );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
