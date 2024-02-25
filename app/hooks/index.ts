import { AxiosError, AxiosResponse } from "axios";
import { UseMutationOptions, useMutation } from "react-query";
import { ApiPostRequestType } from "types";

export const useCustomMutation  = < T extends ApiPostRequestType ,CT = unknown> (data: UseMutationOptions<AxiosResponse< T['RESPONSE']['SUCCESS']> ,AxiosError< T['RESPONSE']['ERROR']>,  T['REQUEST'], CT>) => useMutation <AxiosResponse< T['RESPONSE']['SUCCESS']> , AxiosError< T['RESPONSE']['ERROR']>,  T['REQUEST'] ,CT>(data)