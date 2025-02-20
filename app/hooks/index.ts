import { api } from "_api/config";
import { AgentNoteEndPoints, AgentNoteEndPointsType } from "_api/endpoints/agentNote";
import { BlogEndPoints, BlogEndPointsType } from "_api/endpoints/blog";
import { BookmarkEndPoints, BookmarkEndPointsType } from "_api/endpoints/bookmark";
import { BuyOrSellEndPoints, BuyOrSellEndPointsType } from "_api/endpoints/buyOrSell";
import { CategoryEndPoints, CategoryEndPointsType } from "_api/endpoints/category";
import { LocationEndPoints, LocationEndPointsType, SubLocationEndPoints, SubLocationEndPointsType } from "_api/endpoints/location";
import { CorpEndPoints, CorpEndPointsType } from "_api/endpoints/participation";
import { TagsEndPoints, TagsEndPointsType } from "_api/endpoints/tag";
import { UsersEndpointType, UsersEndpoints } from "_api/endpoints/users";
import { AxiosError, AxiosResponse } from "axios";
import { PermissionBackendRoutes } from "enums";
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
    queryKey: 'GetAllCategories',
    staleTime: minuteToMs(10)
})



export const useCities = (data?: UseQueryOptions) => useCustomQuery<LocationEndPointsType['GET_LIST']>({
    queryKey: 'getCities',
    queryFn: () => api.get(LocationEndPoints.GET_LIST),
    onError: (e) => console.log('خطا در دریافت لیست شهرها', e),
    staleTime: minuteToMs(10),
    refetchOnMount: false,
})


export const useSubCities = (data?: UseQueryOptions) => useCustomQuery<SubLocationEndPointsType['GET_LIST']>({
    queryKey: 'getSubCities',
    queryFn: () => api.get(SubLocationEndPoints.GET_LIST),
    onError: (e) => console.log('خطا در دریافت لیست مناطق', e),
    staleTime: minuteToMs(10),
    refetchOnMount: false,
})

export const useBlogs = () => useCustomQuery<BlogEndPointsType['LIST']>({
    queryKey: 'getBlogs',
    queryFn: () => api.get(BlogEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت لیست مقالات'),
    staleTime: minuteToMs(10),
    refetchOnMount: false,
})


export const useUserInfo = () => {

    return useCustomQuery<UsersEndpointType['USER_INFO']>({
        queryKey: 'getUserInfo',
        queryFn: () => {
            if (!!getToken())
                return api.post(UsersEndpoints.USER_INFO)
            return Promise.reject()
        },
        staleTime: 1000 * 60 * 10
        // onError: () => toast.error('خطا در دریافت اطلاعات کاربری'),
    })
}

export const useTags = () => useCustomQuery<TagsEndPointsType['LIST']>({
    queryKey: 'getTags',
    queryFn: () => api.get(TagsEndPoints.LIST),
    onError: () => toast.error('خطا در دریافت برچسب ها'),
    staleTime: minuteToMs(10)
})

export const useBookmark = (productId: string) => {

    const pathname = usePathname()

    const { data, refetch } = useMyBookmarks()

    const { push } = useRouter()

    const state = !!data?.data.find(d => d.product.id == productId)

    const store = create<{ isActive: boolean, toggle: (state: boolean) => void }>((set) => ({
        isActive: state,
        toggle: () => set((state) => ({ isActive: !state.isActive }))
    }))


    const { mutate: baseMutate, ...mutQury } = useCustomMutation({
        mutationFn: () => store.getState().isActive ? api.delete(BookmarkEndPoints.OFF(productId)) : api.post(BookmarkEndPoints.ON(productId), { productId: productId }),
        onSuccess: (d, v) => {
            store.getState().toggle(v)
            refetch()
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



export const useBuyOrSells = (props?: any) => useCustomQuery<BuyOrSellEndPointsType['LIST']>({
    queryFn: () => api.get(BuyOrSellEndPoints.LIST),
    queryKey: ['getAllBuyOrSells'],
    onError: (e) => { console.log(e) },
    staleTime: minuteToMs(5),
    ...props
})


export const usePermission = (permissionItem: keyof typeof PermissionBackendRoutes): { state: boolean, isLoading: boolean } => {

    const { data, isError, isFetching } = useUserInfo()


    if (isError)
        return { state: false, isLoading: isFetching }

    else if (data?.data)
        return {
            state: data.data.role.name == 'superAdmin' || data.data.permissions.findIndex(pr => pr.action == PermissionBackendRoutes[permissionItem]) != -1, isLoading: isFetching
        }


    return { state: false, isLoading: isFetching }
}

export const useAllAgents = (props?: any) => useCustomQuery<UsersEndpointType['GET_AGENTS']>({
    queryFn: () => api.get(UsersEndpoints.GET_AGENTS),
    queryKey: ['getAllAgents'],
    onError: (e) => { console.log(e) },
    staleTime: minuteToMs(5),
    ...props
})


export const useTitle = () => {


    usePathname()


    return document.title
}