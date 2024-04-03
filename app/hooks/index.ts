import { api } from "_api/config";
import { CategoryEndPoints, CategoryEndPointsType } from "_api/endpoints/category";
import { AxiosError, AxiosResponse } from "axios";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "react-query";
import { ApiGetRequestType, ApiPostRequestType } from "types";

export const useCustomMutation = <T extends ApiPostRequestType, CT = unknown>(data: UseMutationOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>) => useMutation<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>(data)

export const useCustomQuery = <T extends ApiGetRequestType, CT = unknown>(data: UseQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)


export const useFullCategories = () => useCustomQuery<CategoryEndPointsType['ALL_WITH_RELATION']>({
    queryFn: () => api.post(CategoryEndPoints.ALL_WITH_RELATION),
    queryKey: 'GetAllCategories'
})
