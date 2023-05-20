export type ApiOptions = {
  method: string;
  headers: any;
  query?: string;
  params?: string;
  body?: any;
};

export type NextOptions = {
  revalidate?: number | string;
  cache?: string;
};

export type ApiCaller = {
  endpoint: string;
  options: ApiOptions;
  nextOptions?: NextOptions;
};
