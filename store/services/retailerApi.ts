import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRetailer } from "@/types/types";

export const retailerApi = createApi({
  reducerPath: "retailerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://6691970d26c2a69f6e903628.mockapi.io/api/v1" }),
  endpoints: (builder) => ({
    getRetailers: builder.query<IRetailer[], void>({
      query: () => {
        return {
          url: `/retailers`,
          method: "get",
        };
      },
    }),
  }),
});

export const { useGetRetailersQuery } = retailerApi;
