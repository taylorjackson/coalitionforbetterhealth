import { Banner } from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Team } from '@/components/Team'
import { Location } from '@/components/Location'

export default function Home() {
  return (
    <>
      <Banner />
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Team />
        <Faqs />
        <Location />
      </main>
      <Footer />
    </>
  )
}
