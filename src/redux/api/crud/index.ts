import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        url: "/new",
        method: "GET",
      }),
      providesTags: ["crud"],
    }),
    postProduct: builder.mutation<TODO.PostResponse, TODO.PostRequest>({
      query: (newProduct) => ({
        url: "/new",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["crud"],
    }),
    updateProduct: builder.mutation<TODO.EditResponse, TODO.EditRequest>({
      query: (newProduct) => ({
        url: `new/${newProduct.id}`,
        method: "PATCH",
        body: newProduct,
      }),
      invalidatesTags: ["crud"],
    }),
    deleteProduct: builder.mutation<TODO.DeleteResponse, TODO.DeleteRequest>({
      query: (id) => ({
        url: `new/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = api;
