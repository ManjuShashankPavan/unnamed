import Hero from '@/app/hero/page'
import About from '@/app/about/page'
import Contact from '@/app/contact/page'
import Projects from '@/app/project/page'
import Team from '@/app/team/page'
import Button from '@/app/button/page'

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Projects />
    <Team />
    <Contact />
    <Button />
    </>
  );
}
