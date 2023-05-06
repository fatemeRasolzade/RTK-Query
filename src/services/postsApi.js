import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["post"], //Auto refetching
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts/`,
      providesTags: ["post"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "/posts/",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["post"],
    }),
    editPost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: { id, ...rest },
      }),
      invalidatesTags: ["post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["post"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation, useEditPostMutation, useDeletePostMutation } =
  postsApi;
