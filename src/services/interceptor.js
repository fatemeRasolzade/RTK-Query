import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const staggeredBaseQueryWithBailOut = retry(async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({ baseUrl: "/api/" })(args, api, extraOptions);

  // bail out of re-tries immediately if unauthorized,
  // because we know successive re-retries would be redundant
  if (result.error?.status === 401) {
    return;
    retry.fail(result.error);
  }

  return result;
});
