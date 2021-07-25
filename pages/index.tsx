import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import ImageGrid from '../components/ImageGrid'
import Services from '../components/Services/Services';
import Technologies from '../components/Technologies'
import Team from '../components/Team/Team'
import Partnerships from '../components/Partnerships/Partnerships'
import FAQ from '../components/FAQ'


export default function Home() {
  return (
    <div >

      <main >
        <section>
          <Hero />
        </section>
        <section>
          <Projects />
        </section>
        <ImageGrid />
        <section>
          <Services />
        </section>
        <section>
          <Technologies />
        </section>
        <section>
          <Team />
        </section>
        <section>
          <Partnerships />
        </section>
        <section>
          <FAQ />
        </section>
      </main>
    </div>
  )
}
