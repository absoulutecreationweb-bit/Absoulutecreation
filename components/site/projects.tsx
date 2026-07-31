'use client'

import { ArrowUpRight, MapPin, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Project = {
  title: string
  category: string
  location: string
  image: string
  description?: string
  span: string
}

const projects: Project[] = [
  { title: 'The Horizon Suite', category: 'Exhibition Design', location: 'Dubai, UAE', image: '/new/12.jpeg', description: 'An immersive brand pavilion built around light, movement and material contrast.', span: 'lg:col-span-7 lg:row-span-2' },
  { title: 'Crest Retail Pavilion', category: 'Brand Experience', location: 'Abu Dhabi, UAE', image: '/new/13.jpeg', description: 'A retail environment designed to slow visitors down and let the product lead.', span: 'lg:col-span-5' },
  { title: 'Monarch Residence', category: 'Interior Fit-Out', location: 'Riyadh, KSA', image: '/new/14.jpeg', description: 'A full residential fit-out balancing classical proportion with contemporary finish.', span: 'lg:col-span-5' },
  { title: 'Aurelia Lounge', category: 'Theming & Sculpture', location: 'Doha, Qatar', image: '/new/15.jpeg', description: 'Sculptural theming for a hospitality space centred on a single dramatic form.', span: 'lg:col-span-4' },
  { title: 'Northstar Events', category: 'Events & Activations', location: 'London, UK', image: '/new/16.jpeg', description: 'A modular activation kit built to travel and reassemble across venues.', span: 'lg:col-span-4' },
  { title: 'Avenue Launch', category: 'Brand Environment', location: 'Muscat, Oman', image: '/new/22.jpeg', description: 'A premium launch environment crafted with refined materials and cinematic light.', span: 'lg:col-span-4' },
  { title: 'Versa Showroom', category: 'Retail Installation', location: 'Muscat, Oman', image: '/new/18.jpeg', description: 'A showroom installation designed around modular, reconfigurable display walls.', span: 'lg:col-span-5' },
  { title: 'Mosaic Residence', category: 'Luxury Interior', location: 'Jeddah, KSA', image: '/new/19.jpeg', description: 'A layered material palette across a multi-level private residence.', span: 'lg:col-span-7' },
  { title: 'Noir Gallery', category: 'Exhibition Experience', location: 'Dubai, UAE', image: '/new/20.jpeg', description: 'A gallery experience built on contrast — deep shadow against precise light.', span: 'lg:col-span-4' },
  { title: 'Lumen Pavilion', category: 'Brand Environment', location: 'Doha, Qatar', image: '/new/21.jpeg', description: 'A brand environment where lighting design carries the narrative.', span: 'lg:col-span-8' },
]

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
  return (
    <Reveal delay={Math.min(index, 6) * 0.05} className={cn('group relative min-h-[280px] overflow-hidden rounded-[1.75rem] border border-border/70 bg-secondary text-left shadow-[0_18px_45px_rgba(17,17,17,0.05)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_28px_60px_rgba(17,17,17,0.12)]', project.span)}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative flex h-full w-full flex-col overflow-hidden"
      >
        <div className="relative h-full min-h-[280px] overflow-hidden lg:min-h-[340px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

          <span className="absolute left-6 top-6 font-serif text-sm text-white/55 md:left-7 md:top-7">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">{project.category}</p>
                <h3 className="mt-2 font-serif text-xl font-medium text-white">{project.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="size-3.5" />
                  {project.location}
                </div>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-[-2px] group-hover:border-gold group-hover:bg-gold group-hover:text-black">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </div>
        </div>
      </button>
    </Reveal>
  )
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const filteredProjects = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : ''
    if (activeProject) closeButtonRef.current?.focus()
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

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border/70 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'border-gold bg-gold text-black'
                  : 'border-border text-muted-foreground hover:border-gold/50 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onOpen={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-gold hover:text-black"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-[4/3]">
              <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" sizes="100vw" priority />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
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
              {activeProject.description ? (
                <p className="mt-5 max-w-xl border-t border-border/70 pt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {activeProject.description}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}