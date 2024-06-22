import React from 'react'
import Image from 'next/image'
import logofull from 'images/logo-full.svg'
// import { IconArrowDownLeft } from '@tabler/icons-react'
import Link from 'next/link'
import { Icon123, IconArrowUp, IconArrowUpRight, IconLink, IconMap, IconMessage, IconPhone, IconPhoneCall } from '@tabler/icons-react'
import { CONTACT_INFO, DESCRIPTION, MAIN_AGENTS, NESHAN_SHORTCUT } from 'variables'
import { IconArrowLeft, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp, IconBrandTelegram, IconArrowDownLeft, IconPlus } from '@tabler/icons-react'
import { Button } from '@components'
import { captilizeFirstLetter, createPhoneCallLink } from 'utils'

const SocialMediaButton = ({ icon: Icon, link, type }: { icon: typeof IconArrowLeft, link: string, type: 'colored' | 'normal' }) => {

    const appendClassName = type == 'colored' ? 'bg-coral text-white' : 'bg-gray-300 text-gray-800'
    return <Link href={link} className={`rounded-circle p-1.5 aspect-square ${appendClassName}`
    }>
        <span className='sr-only'>دپارتمان اطلس در شبکه های اجتماعی</span>
        <Icon width={22.5} height={22.5} />
    </Link>
}
const ContactItem = ({ icon: Icon, link, title }: { icon: typeof Icon123, link: string, title: string }) => <  Link href={link} className='hover:text-blue-600 flex flex-row gap-2 items-center'>

    <div className='bg-gray-200 aspect-square rounded-circle p-1'>

        <Icon width={20} height={20} />

    </div>

    <span>{title}</span>


</Link>


const PersonContactInfo = ({ title, phoneNumber, instaUserName }: { title: string, phoneNumber: string, instaUserName: string }) => <div className='flex flex-row w- 2/3 gap-2 items-center lg:text-body-3-normal text-body-2-normal'>

    <span className='flex-1 font-semibold'>{title}</span>

    <a className='cursor-pointer hover:text-coral flex-row flex gap-0.5 items-center flex-1 ' href={createPhoneCallLink(phoneNumber)}>
        {phoneNumber}
        <IconPhoneCall className='text-french-gray w-2 h-2' />
    </a >

    <a className='cursor-pointer hover:text-coral flex-row flex gap-0.5 items-center flex-1 text-body-3-normal' href={`https://instagram.com/${instaUserName}`}>
        {captilizeFirstLetter(instaUserName)}
        <IconBrandInstagram className='text-french-gray w-2 h-2' />
    </a>





</div>

export const Footer = () => {
    return (
        <div className='bg-seasalt grid grid-cols-2 gap-6 p-2 lg:p-4 pb-0 lg:pb-0' id='footer'>

            <div className='col-span-2 lg:col-span-1 flex flex-col gap-4'>

                <div className='flex flex-row justify-center'>
                    <Image src={logofull} alt='لوگوی دپارتمان املاک اطلس' className='max-h-[50px] lg:max-h-[60px]' />
                </div>

                <p className='text-ultra-violet leading-3 text-body-3-normal'>
                    {DESCRIPTION}
                    {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد */}
                </p>


                {/* <div className='flex flex-row gap-2 items-center'>
                    <span>بیشتر بدانید</span>
                    <IconArrowDownLeft />
                </div> */}

                <div className='flex flex-row gap-4 text-ultra-violet text-h4-bolder justify-evenly   text-center leading-3 flex-wrap ' >

                    <Link href={'/login'}>ورود و ثبت نام</Link>
                    <Link href={'/blogs'}>مقالات</Link>
                    <Link href={'/aboutus'}>درباره ما</Link>
                    <Link href={'/contactus'}>تماس با ما</Link>
                    {/* <Link href={'#'}>حریم خصوصی</Link> */}

                </div>

                <span className='text-ultra-violet text-body-2-normal hidden lg:block'>کلیه حقوق این سایت متعلق به دپارتمان املاک اطلس می باشد.</span>



            </div>

            <div className='col-span-2 lg:col-span-1 flex flex-col gap-4 justify-start'>

                <div className='text-raisin-black text-h6-bolder relative text-right w-fit'>
                    ارتباط با دپارتمان اطلس
                    <div className='absolute bg-mint-green w-[80px] left-1/2  h-[2px] top-full mt-1.5 rounded '></div>
                </div>

                <ContactItem icon={IconMap} link={NESHAN_SHORTCUT} title='شهر جدید هشتگرد (مهستان) ، فاز 2 ، بلوار شهریار شمالی' />

                <div className='flex flex-col gap-3 border-r pr-1  '>
                    {MAIN_AGENTS.map(item =>
                        <PersonContactInfo key={item.phoneNumber}
                            instaUserName={item.instaUserName}
                            phoneNumber={item.phoneNumber}
                            title={item.lastName}
                        />

                    )}
                </div>
                {/* <ContactItem icon={IconMessage} link={`mailto:${CONTACT_INFO.email}`} title={CONTACT_INFO.email} />
                <ContactItem icon={IconPhone} link={`tel:+${CONTACT_INFO.phone}`} title={CONTACT_INFO.phone} /> */}


                {/* <div className='flex flex-row gap-2 items-center bottom-4 justify-center '>
                    <SocialMediaButton icon={IconBrandInstagram} link='www.google.com' type='normal' />
                    <SocialMediaButton icon={IconBrandTwitter} link='www.twitter.com' type='normal' />
                    <SocialMediaButton icon={IconBrandWhatsapp} link='www.whatsapp' type='colored' />
                    <SocialMediaButton icon={IconBrandTelegram} link='www.telegram' type='normal' />
                </div> */}

                <span className='text-ultra-violet text-body-2-normal  lg:hidden'>کلیه حقوق این سایت متعلق به دپارتمان املاک اطلس می باشد.</span>



            </div>

            <div className='flex flex-row gap-1  justify-center bg-gray-200 w-full col-span-2 p-2 lg:p-1.5 text-body-2-normal' >
                <span>پیاده سازی داده شده توسط</span>
                <a target='_blank' href='https://amkz.dev' className='hover:text-coral flex flex-row gap-0.5 items-center'>
                    <span>AMKZ Team </span>
                    <IconArrowUpRight className='w-2 h-2' /></a>

            </div>

        </div>
    )
}
