/**
 * Fetches data from the specified URL.
 *
 * @param url The URL to fetch data from.
 * @returns A promise that resolves to the data fetched from the API, parsed as JSON.
 */


export default async function fetchData(route: string): Promise<any> {
  try {
    const response: Response = await fetch(
      `http://localhost:1337/api${route}?locale=sq`,
      { next: { revalidate: 18000 } }
    );
    if (!response.ok) {
      throw new Error(
        `API call failed: ${response.status} - ${response.statusText}`
      );
    }
    const data: any = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}