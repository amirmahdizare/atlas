import { api } from "_api/config";
import { BlogEndPoints, BlogEndPointsType } from "_api/endpoints/blog";
import { CategoryEndPoints, CategoryEndPointsType } from "_api/endpoints/category";
import { LocationEndPoints, LocationEndPointsType, SubLocationEndPoints, SubLocationEndPointsType } from "_api/endpoints/location";
import { TagsEndPoints, TagsEndPointsType } from "_api/endpoints/tag";
import { UsersEndpointType, UsersEndpoints } from "_api/endpoints/users";
import { AxiosError, AxiosResponse } from "axios";
import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions, useInfiniteQuery, useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { ApiGetRequestType, ApiPostRequestType, UserFullInfo } from "types";

export const useCustomMutation = <T extends ApiPostRequestType, CT = unknown>(data: UseMutationOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>) => useMutation<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>(data)

export const useCustomQuery = <T extends ApiGetRequestType, CT = unknown>(data: UseQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)

export const useCustomInfiniteQuery = <T extends ApiGetRequestType, CT = unknown >(data: UseInfiniteQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useInfiniteQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)


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


export const useUserInfo  = (): {data:UserFullInfo}=> {

    return {
        data: {
            firstName: 'امیر حسین',
            lastName: 'کشن زارع',
            phoneNumber: '09196442725',
            blogs:[],
            bookmarks:[],
            permissions:[],
            privateNotes:[],
            products:[],
            tags:[],
            role: { id: 1, name: 'superAdmin' },
            id: '',
            avatar: 'uploads/avatar-1714907579743-746723178.jpg',
            userName: 'asdf'
        }
    }

    useCustomQuery<UsersEndpointType['USER_INFO']>({
        queryKey: 'getUserInfo',
        queryFn: () => api.get(UsersEndpoints.USER_INFO),
        onError: () => toast.error('خطا در دریافت اطلاعات کاربری'),
    })
}

export const useTags = () => useCustomQuery<TagsEndPointsType['LIST']>({
    queryKey: 'getTags',
    queryFn: () => api.get(TagsEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت برچسب ها'),
})