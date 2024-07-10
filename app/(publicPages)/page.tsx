import { Banner, Blogs, ContactSummary, Corporate, HeroSection, MostViewed, News, SecondBanner, Services } from "components/landingPage";
import SSR from "components/landingPage/SSR/SSR"
import SearchSSR from 'components/SSR/SSR'

export default function Home() {
  return (
    <main className="flex flex-col py-4 gap-8 box-border px-1.5">
      <SearchSSR />
      <SSR />
      <HeroSection />
      <Services />
      <News />
      <Banner />
      <Corporate />
      {/* <MostViewed/> */}
      <SecondBanner />
      <Blogs />
      {/* <ContactSummary /> */}
    </main>
  )
}
