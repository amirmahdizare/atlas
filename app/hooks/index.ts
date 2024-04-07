import { api } from "_api/config";
import { BlogEndPoints, BlogEndPointsType } from "_api/endpoints/blog";
import { CategoryEndPoints, CategoryEndPointsType } from "_api/endpoints/category";
import { LocationEndPoints, LocationEndPointsType, SubLocationEndPoints, SubLocationEndPointsType } from "_api/endpoints/location";
import { AxiosError, AxiosResponse } from "axios";
import { UseMutationOptions, UseQueryOptions, useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { ApiGetRequestType, ApiPostRequestType } from "types";

export const useCustomMutation = <T extends ApiPostRequestType, CT = unknown>(data: UseMutationOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>) => useMutation<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>(data)

export const useCustomQuery = <T extends ApiGetRequestType, CT = unknown>(data: UseQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)


export const useFullCategories = () => useCustomQuery<CategoryEndPointsType['ALL_WITH_RELATION']>({
    queryFn: () => api.post(CategoryEndPoints.ALL_WITH_RELATION),
    queryKey: 'GetAllCategories'
})



export const useCities = (data?: UseQueryOptions) => useCustomQuery<LocationEndPointsType['GET_LIST']>({
    queryKey: 'getCities',
    queryFn: () => api.get(LocationEndPoints.GET_LIST),
    onError: () => toast.error('خطا در دریافت لیست شهرها'),
})


export const useSubCities = (data?: UseQueryOptions) => useCustomQuery<SubLocationEndPointsType['GET_LIST']>({
    queryKey: 'getSubCities',
    queryFn: () => api.get(SubLocationEndPoints.GET_LIST),
    onError: () => toast.error('خطا در دریافت لیست مناطق'),
})

export const useBlogs = () => useCustomQuery<BlogEndPointsType['LIST']>({
    queryKey: 'getBlogs',
    queryFn: () => api.get(BlogEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست مناطق'),
})
