import { UseMutationOptions, useMutation } from "react-query";
import { ApiRequestType } from "types";

export const useCustomMutation  = < T extends ApiRequestType ,CT = unknown> (data: UseMutationOptions<T['RESPONSE']['SUCCESS'] , T['RESPONSE']['ERROR'],  T['REQUEST'], CT>) => useMutation <T['RESPONSE']['SUCCESS'] , T['RESPONSE']['ERROR'],  T['REQUEST'] ,CT>(data)