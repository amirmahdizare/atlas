import { Banner, HeroSection, News, Services } from "components/landingPage";

export default function Home() {
  return (
    <main className="flex flex-col py-4 gap-8 box-border ">
      <HeroSection/>
      <Services />
      <News />
      <Banner />
    </main>
  )
}
