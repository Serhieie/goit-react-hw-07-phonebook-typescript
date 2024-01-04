import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Contact {
  createdAt: string;
  id?: string;
  name: string;
  phone: string;
}

interface GetAllContactsResponse extends Array<Contact> {}

interface PostContactRequest {
  name: string;
  phone: string;
}

interface DeleteContactRequest {
  id: string;
}

export const contactsApi = createApi({
  reducerPath: 'mockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6582fdb302f747c8367acf8e.mockapi.io/v1/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query<GetAllContactsResponse, void>({
      query: () => `contacts`,
      providesTags: ['Contact'],
    }),

    postContact: builder.mutation<Contact, PostContactRequest>({
      query: contactData => ({
        url: `contacts`,
        method: 'POST',
        body: contactData,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation<void, DeleteContactRequest>({
      query: ({ id }) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = contactsApi;
