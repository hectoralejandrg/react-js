import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import mainApi from '../../api/mainApi';
import { globalApi } from '../../store/globalApi';
import type { Pokemon } from '../types/types';
const apiPokemonTags = globalApi.enhanceEndpoints({
  addTagTypes: [],
});

export const customerApiSlice = apiPokemonTags.injectEndpoints({
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

export const { useGetAllPokemonQuery } = customerApiSlice;
