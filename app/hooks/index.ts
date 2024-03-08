import { AxiosError, AxiosResponse } from "axios";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "react-query";
import { ApiGetRequestType, ApiPostRequestType } from "types";

export const useCustomMutation  = < T extends ApiPostRequestType ,CT = unknown> (data: UseMutationOptions<AxiosResponse< T['RESPONSE']['SUCCESS']> ,AxiosError< T['RESPONSE']['ERROR']>,  T['REQUEST'], CT>) => useMutation <AxiosResponse< T['RESPONSE']['SUCCESS']> , AxiosError< T['RESPONSE']['ERROR']>,  T['REQUEST'] ,CT>(data)

export const useCustomQuery  = < T extends ApiGetRequestType ,CT = unknown> (data: UseQueryOptions<AxiosResponse< T['RESPONSE']['SUCCESS']> ,AxiosError< T['RESPONSE']['ERROR']>>) => useQuery <AxiosResponse< T['RESPONSE']['SUCCESS']> , AxiosError< T['RESPONSE']['ERROR']>>(data)