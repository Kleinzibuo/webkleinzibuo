type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

export async function gqlRequest<T>({
  url,
  query,
  variables,
  headers,
}: {
  url: string;
  query: string;
  variables?: Record<string, unknown>;
  headers?: Record<string, string>;
}): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(headers),
    },
    body: JSON.stringify({ query, variables }),
  });

  const json: GraphQLResponse<T> = await res.json();

  if (!res.ok || json.errors?.length) {
    const msg = json.errors?.[0]?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }

  if (!json.data) throw new Error("No data returned from API.");
  return json.data;
}
