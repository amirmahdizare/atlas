import { Banner, Blogs, Corporate, HeroSection, MostViewed, News, SecondBanner, Services } from "components/landingPage";

export default function Home() {
  return (
    <main className="flex flex-col py-4 gap-8 box-border ">
      <HeroSection/>
      <Services />
      <News />
      <Banner />
      <Corporate/>
      <MostViewed/>
      <SecondBanner/>
      <Blogs />
    </main>
  )
}
