export async function FetchData(slug) {
  const data = await fetch(`${process.env.ENDPOINT}/api/${slug}`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}