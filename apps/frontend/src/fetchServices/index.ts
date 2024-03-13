/**
 * Fetches data from the specified URL.
 *
 * @param url The URL to fetch data from.
 * @returns A promise that resolves to the data fetched from the API, parsed as JSON.
 */

export default async function fetchData<T = any>(
  route: string,
  shouldAddLocale: boolean = true,
  locale: string = "sq",
  fetchOptions?: RequestInit
): Promise<T> {
  const baseUrl = shouldAddLocale
    ? `http://localhost:1337/api${route}&locale=${locale}`
    : `http://localhost:1337/api${route}`;
  try {
    const response: Response = await fetch(`${baseUrl}`, fetchOptions);

    if (!response.ok) {
      // throw new Error(
      //   `API call failed: ${response.status} - ${response.statusText}`
      // );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
