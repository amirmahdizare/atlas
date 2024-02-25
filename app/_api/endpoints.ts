import { ApiRequestType } from "types"

export const AuthEndpoints = Object.freeze({
    SEND_OTP: '/auth/sendOTP',
    VERIFY: '/auth/verify',
})



export interface AuthEndpointType {
    SEND_OTP: ApiRequestType<
        {
            phoneNumber: string
        }, {
            code: {
                code: string,
                phoneNumber: string,
                is_used: string,
                id: number,
                created_at: string,
                updated_at: string
            }
        }>,

    VERIFY: ApiRequestType<
        {
            phoneNumber: string,
            code: string
        },
        {
            access_token: string
        }>
}