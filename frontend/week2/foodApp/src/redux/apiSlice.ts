import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating?: { rate: number };
};
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/"
  }),
  endpoints: (builder) => ({
    getFoods: builder.query<Product[], void>({
      query: () => "products"
    })
  })
});
export const { useGetFoodsQuery } = apiSlice;