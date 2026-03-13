import Hero from "@/components/Hero"
import DamageRisk from "@/components/DamageRisk"
import Markets from "@/components/Markets"
import Packages from "@/components/Packages"
import Privacy from "@/components/Privacy"
import Veteran from "@/components/Veteran"
import HowItWorks from "@/components/HowItWorks"
import WhoWeProtect from "@/components/WhoWeProtect"
import Testimonials from "@/components/Testimonials"
import DamageCalculator from "@/components/DamageCalculator"
import LocalTrust from "@/components/LocalTrust"
import ServiceAgreement from "@/components/ServiceAgreement"
import Contact from "@/components/Contact"
import SiteFooter from "@/components/SiteFooter"

export default function Home() {
  return (
    <main>
      <Hero/>
      <DamageRisk/>
      <HowItWorks/>
      <Markets/>
      <WhoWeProtect/>
      <Packages/>
      <DamageCalculator/>
      <Privacy/>
      <Veteran/>
      <Testimonials/>
      <LocalTrust/>
      <ServiceAgreement/>
      <Contact/>
      <SiteFooter/>
    </main>
  )
}
