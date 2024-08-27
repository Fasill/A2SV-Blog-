import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { use } from "chai";
import { get } from "http";


export const BlogApi = createApi({
  reducerPath: "BlogService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a2sv-backend.onrender.com",
  }),
  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: () => ({
        url: "/api/blogs",
        method: "GET",

      }),
    }),
    getBlogById: builder.query({
      query: ({id}:{id:string}) => ({
        url: `/api/blogs/${id}`,
        method: "GET"
      }),
    })
   

  }),
  
});

export const {
  useGetAllBlogQuery,
  useGetBlogByIdQuery
} = BlogApi;
