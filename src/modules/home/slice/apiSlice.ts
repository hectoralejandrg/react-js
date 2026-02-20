import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { Pokemon } from '../types/types';
import mainApi from '@/api/mainApi';
import { globalApi } from '@/store/globalApi';

const apiTags = globalApi.enhanceEndpoints({
  addTagTypes: [],
});

export const apiSlice = apiTags.injectEndpoints({
  endpoints: (builder) => ({
    getAllPokemon: builder.query<
      Pokemon,
      void
    >({
      queryFn: async () => {
        try {
          const { data } = await mainApi<Pokemon>(
            `pokemon`
          );
          return { data };
        } catch (error) {
          throw error as FetchBaseQueryError;
        }
      },
    }),
  }),
});

export const { useGetAllPokemonQuery } = apiSlice;
