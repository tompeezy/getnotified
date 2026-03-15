import Hero from "@/components/Hero"
import DamageRisk from "@/components/DamageRisk"
import Markets from "@/components/Markets"
import Packages from "@/components/Packages"
import Privacy from "@/components/Privacy"
import PrivacyHub from "@/components/PrivacyHub"
import Veteran from "@/components/Veteran"
import HowItWorks from "@/components/HowItWorks"

import Testimonials from "@/components/Testimonials"
import DamageCalculator from "@/components/DamageCalculator"
import LocalTrust from "@/components/LocalTrust"
import ServiceAgreement from "@/components/ServiceAgreement"
import Contact from "@/components/Contact"
import RemoteSupport from "@/components/RemoteSupport"
import SiteFooter from "@/components/SiteFooter"

export default function Home() {
  return (
    <main>
      <Hero/>
      <DamageRisk/>
      <HowItWorks/>
      <Markets/>

      <Packages/>
      <DamageCalculator/>
      <PrivacyHub/>
      <Privacy/>
      <Veteran/>
      <Testimonials/>
      <LocalTrust/>
      <ServiceAgreement/>
      <RemoteSupport/>
      <Contact/>
      <SiteFooter/>
    </main>
  )
}
