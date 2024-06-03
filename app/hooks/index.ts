import { api } from "_api/config";
import { AgentNoteEndPoints, AgentNoteEndPointsType } from "_api/endpoints/agentNote";
import { BlogEndPoints, BlogEndPointsType } from "_api/endpoints/blog";
import { BookmarkEndPoints, BookmarkEndPointsType } from "_api/endpoints/bookmark";
import { CategoryEndPoints, CategoryEndPointsType } from "_api/endpoints/category";
import { LocationEndPoints, LocationEndPointsType, SubLocationEndPoints, SubLocationEndPointsType } from "_api/endpoints/location";
import { CorpEndPoints, CorpEndPointsType } from "_api/endpoints/participation";
import { TagsEndPoints, TagsEndPointsType } from "_api/endpoints/tag";
import { UsersEndpointType, UsersEndpoints } from "_api/endpoints/users";
import { AxiosError, AxiosResponse } from "axios";
import { usePathname, useRouter } from "next/navigation";
import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions, useInfiniteQuery, useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { ApiGetRequestType, ApiPostRequestType, UserFullInfo } from "types";
import { getToken, minuteToMs } from "utils";
import { create } from "zustand";

export const useCustomMutation = <T extends ApiPostRequestType, CT = unknown>(data: UseMutationOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>) => useMutation<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>, T['REQUEST'], CT>(data)

export const useCustomQuery = <T extends ApiGetRequestType, CT = unknown>(data: UseQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)

export const useCustomInfiniteQuery = <T extends ApiGetRequestType, CT = unknown>(data: UseInfiniteQueryOptions<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>) => useInfiniteQuery<AxiosResponse<T['RESPONSE']['SUCCESS']>, AxiosError<T['RESPONSE']['ERROR']>>(data)


export const useFullCategories = () => useCustomQuery<CategoryEndPointsType['ALL_WITH_RELATION']>({
    queryFn: () => api.post(CategoryEndPoints.ALL_WITH_RELATION),
    queryKey: 'GetAllCategories'
})



export const useCities = (data?: UseQueryOptions) => useCustomQuery<LocationEndPointsType['GET_LIST']>({
    queryKey: 'getCities',
    queryFn: () => api.get(LocationEndPoints.GET_LIST),
    onError: (e) => console.log('خطا در دریافت لیست شهرها', e),
    staleTime: minuteToMs(10)
})


export const useSubCities = (data?: UseQueryOptions) => useCustomQuery<SubLocationEndPointsType['GET_LIST']>({
    queryKey: 'getSubCities',
    queryFn: () => api.get(SubLocationEndPoints.GET_LIST),
    onError: (e) => console.log('خطا در دریافت لیست مناطق', e),
    staleTime: minuteToMs(10)
})

export const useBlogs = () => useCustomQuery<BlogEndPointsType['LIST']>({
    queryKey: 'getBlogs',
    queryFn: () => api.get(BlogEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست مقالات'),
    staleTime: minuteToMs(10)
})


export const useUserInfo = () => {

    // return {
    //     data: {
    //         firstName: 'امیر حسین',
    //         lastName: 'کشن زارع',
    //         phoneNumber: '09196442725',
    //         blogs: [],
    //         bookmarks: [],
    //         permissions: [],
    //         privateNotes: [],
    //         products: [],
    //         tags: [],
    //         role: { id: 1, name: 'superAdmin' },
    //         id: '',
    //         avatar: 'uploads/avatar-1714907579743-746723178.jpg',
    //         userName: 'asdf'
    //     }
    // }

    return useCustomQuery<UsersEndpointType['USER_INFO']>({
        queryKey: 'getUserInfo',
        queryFn: () => api.post(UsersEndpoints.USER_INFO),
        staleTime: 1000 * 60 * 10
        // onError: () => toast.error('خطا در دریافت اطلاعات کاربری'),
    })
}

export const useTags = () => useCustomQuery<TagsEndPointsType['LIST']>({
    queryKey: 'getTags',
    queryFn: () => api.get(TagsEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت برچسب ها'),
})

export const useBookmark = (productId: string, isActive: boolean) => {

    const pathname = usePathname()

    const { push } = useRouter()

    const store = create<{ isActive: boolean, toggle: (state: boolean) => void }>((set) => ({
        isActive: isActive,
        toggle: () => set((state) => ({ isActive: !state.isActive }))
    }))


    const { mutate: baseMutate, ...mutQury } = useCustomMutation({
        mutationFn: () => store.getState().isActive ? api.delete(BookmarkEndPoints.OFF(productId)) : api.post(BookmarkEndPoints.ON(productId)),
        onSuccess: (d, v) => {
            store.getState().toggle(v)
        },
        onError: (e) => {
            console.log(e)
        }
    })

    const mutate = (d: any) => {
        if (!getToken()) {
            alert('برای ذخیره یادداشت باید به سایت وارد شود.')
            return push(`/login?callbackUrl=${pathname}`)
        }
        baseMutate(d)
    }

    return { ...store.getState(), ...mutQury, mutate }
}


export const useMyBookmarks = () => useCustomQuery<BookmarkEndPointsType['GET_ALL']>({
    queryFn: () => api.get(BookmarkEndPoints.GET_ALL),
    queryKey: ['getAllBookmarks'],
    onError: (e) => { console.log(e) },
    staleTime: 1000 * 60 * 5
})


export const useAgentNotes = (props?: any) => useCustomQuery<AgentNoteEndPointsType['LIST']>({
    queryFn: () => api.get(AgentNoteEndPoints.LIST),
    queryKey: ['getAllAgentNotes'],
    onError: (e) => { console.log(e) },
    staleTime: minuteToMs(5),
    ...props
})


export const useCorps = (props?: any) => useCustomQuery<CorpEndPointsType['LIST']>({
    queryFn: () => api.get(CorpEndPoints.LIST),
    queryKey: ['getAllCorps'],
    onError: (e) => { console.log(e) },
    staleTime: minuteToMs(5),
    ...props
})
