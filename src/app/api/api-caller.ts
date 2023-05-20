import { ApiCaller, ApiOptions } from "./types";

const apiCaller = async ({
  endpoint,
  options = {
    method: "GET",
    headers: {},
    query: undefined,
    params: undefined,
    body: undefined,
  },
  nextOptions,
}: ApiCaller) => {
  const HOST = "http://localhost:3001";

  const opt: ApiOptions = {
    method: options.method,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
    ...(nextOptions && { next: { revalidate: nextOptions.revalidate } }),
  };

  const url = `${HOST}${endpoint}`;

  if (options.body) opt.body = JSON.stringify(options.body);

  if (options.query) opt.query = options.query;

  if (options.params) opt.params = options.params;

  try {
    const response = await fetch(url, opt);
    return await response.json();
  } catch (error: any) {
    console.log(error);
  }
};

export default apiCaller;
