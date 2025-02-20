import logo from 'images/atlaslight.svg'
import sampleAvatar from 'images/sampleavatar.jpg'
import noPhoto from 'images/noPhoto.png'

export const LIGHT_LOGO = logo

export const COORDINATE = {
    latitude: 35.99623487171556,
    longitude: 50.74290417946498
}

export const NESHAN_SHORTCUT = "https://nshn.ir/_bv0-UOxSRKg"

export const CONTACT_INFO = {
    email: 'amlakatlas@gmail.com',
    phone: '02644250952',
    // description: `دپارتمان املاک اطلس سال 1398 کار خود را برای هدف ارتقای سطح رضایت متقاضیان ملک در شهر جدید هشتگرد (مهستان) آغاز کرده است.
    // این مجموعه همواره سعی بر جلب رضایت مالکیت و متقاضیان ملک دارد.`
}

export const DESCRIPTION = `دپارتمان املاک اطلس سال 1398 کار خود را برای هدف ارتقای سطح رضایت متقاضیان ملک در شهر جدید هشتگرد (مهستان) آغاز کرده است.
این مجموعه همواره سعی بر جلب رضایت مالکیت و متقاضیان ملک دارد.`


export const NEW_USER_DEFAULT_NAME = '-- کاربر جدید --'
export const NO_NAME_USER = '-- کاربر بی نام --'

export const SAMPLE_AVATAR = sampleAvatar.src
export const NO_PHOTO_IMAGE = noPhoto.src

export const agentRoles = ['superAdmin', 'admin', 'agent']

export const SEARCH_PRODUCT_LIMIT = 10


export const MAIN_AGENTS = [
    {
        lastName: 'زارع',
        phoneNumber: '09196442725',
        instaUserName: 'amirzare__official'
    },
    {
        lastName: 'اخلاقی',
        phoneNumber: '09377634864',
        instaUserName: 'hosseinakhlaqi_official'
    },
    {
        lastName: 'امین دهقان',
        phoneNumber: '09129675563',
        instaUserName: 'hameddehghan_realestate'
    }
]

export const SEO_WORD_REGEX = /^[0-9A-Za-z_]+$/

export const bannedAgentNumbers = ['09199660906', '09355583212']