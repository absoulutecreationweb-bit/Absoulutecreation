'use client'

import { ArrowUpRight, MapPin, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Project = {
  title: string
  category: string
  location: string
  image: string
}

const projects: Project[] = [
  { title: 'The Horizon Suite', category: 'Exhibition Design', location: 'Dubai, UAE', image: '/new/12.jpeg' },
  { title: 'Crest Retail Pavilion', category: 'Brand Experience', location: 'Abu Dhabi, UAE', image: '/new/13.jpeg' },
  { title: 'Monarch Residence', category: 'Interior Fit-Out', location: 'Riyadh, KSA', image: '/new/14.jpeg' },
  { title: 'Aurelia Lounge', category: 'Theming & Sculpture', location: 'Doha, Qatar', image: '/new/15.jpeg' },
  { title: 'Northstar Events', category: 'Events & Activations', location: 'London, UK', image: '/new/16.jpeg' },
  { title: 'Studio Atelier', category: 'Interior Direction', location: 'Bahrain', image: '/new/17.jpeg' },
  { title: 'Versa Showroom', category: 'Retail Installation', location: 'Muscat, Oman', image: '/new/18.jpeg' },
  { title: 'Mosaic Residence', category: 'Luxury Interior', location: 'Jeddah, KSA', image: '/new/19.jpeg' },
  { title: 'Noir Gallery', category: 'Exhibition Experience', location: 'Dubai, UAE', image: '/new/20.jpeg' },
  { title: 'Lumen Pavilion', category: 'Brand Environment', location: 'Doha, Qatar', image: '/new/21.jpeg' },
]

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <Reveal delay={0.04} className="mb-5 break-inside-avoid">
      <button type="button" onClick={() => onOpen(project)} className="group relative block w-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-secondary text-left shadow-[0_18px_45px_rgba(17,17,17,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/50">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">{project.category}</p>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">{project.title}</h3>
              </div>
              <span className="flex size-10 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:translate-x-1">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
              <MapPin className="size-3.5" />
              {project.location}
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Portfolio" title="A refined body of work across interiors and experiences." />
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-foreground">
            Discuss a project
            <span className="flex size-9 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="mt-14 columns-1 gap-5 md:columns-2 xl:columns-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm" onClick={() => setActiveProject(null)}>
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setActiveProject(null)} className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm">
              <X className="size-5" />
            </button>
            <div className="relative aspect-[4/3]">
              <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" sizes="100vw" priority />
            </div>
            <div className="p-7 md:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">{activeProject.category}</p>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-foreground">{activeProject.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4" />
                  {activeProject.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}
