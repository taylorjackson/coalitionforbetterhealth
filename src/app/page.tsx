import { Banner } from '@/components/Banner'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero as HeroSection } from '@/components/Hero'
import { PrimaryFeatures as AboutSection } from '@/components/PrimaryFeatures'
import { SecondaryFeatures as ModelOfCare } from '@/components/SecondaryFeatures'
import { Services as ServicesSection } from '@/components/Services'
import { Team as ImpactStats } from '@/components/Team'
import { Location as ContactSection } from '@/components/Location'

export default function Home() {
    return (
        <>
            <Banner />
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ModelOfCare />
                <ServicesSection />
                <ImpactStats />
                <CallToAction />
                <ContactSection />
            </main>
            <Footer />
        </>
    )
}
