import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import CategoryNav from "@/components/CategoryNav"
import Contact from "@/components/Contact"
import SiteFooter from "@/components/SiteFooter"

export default function Home() {
  return (
    <main className="pt-14">
      <NavBar/>
      <Hero/>
      <CategoryNav/>
      <Contact/>
      <SiteFooter/>
    </main>
  )
}
