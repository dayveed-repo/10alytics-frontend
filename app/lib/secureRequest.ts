export async function fetchAPI(endpoint: string, token?: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return { error: "An error occured while making request" };
  }

  return res.json();
}
