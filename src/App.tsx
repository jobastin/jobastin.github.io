import { Education } from '@/components/Education'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Section } from '@/components/Section'
import { SiteNav } from '@/components/SiteNav'
import { Skills } from '@/components/Skills'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="relative min-h-screen bg-white font-sans antialiased">
        <SiteNav />

        <main id="main" tabIndex={-1} className="focus:outline-none">
          <Hero />

          <Section id="experience" label="Experience">
            <Experience />
          </Section>

          <Section id="skills" label="Skills">
            <Skills />
          </Section>

          <Section id="education" label="Education">
            <Education />
          </Section>

          <Section id="projects" label="Projects" tone="muted">
            <Projects />
          </Section>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
