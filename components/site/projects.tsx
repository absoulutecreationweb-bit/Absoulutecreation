'use client'

import { cn } from '@/lib/utils'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

type Project = {
  title: string
  category: string
  location: string
  image: string
  span: string
}

const projects: Project[] = [
  {
    title: 'The Skyline Penthouse',
    category: 'Interior Design',
    location: 'Downtown Dubai, UAE',
    image: '/images/project-1.png',
    span: 'lg:col-span-7 lg:row-span-2',
  },
  {
    title: 'Aria Grand Hotel',
    category: 'Commercial Fit-Out',
    location: 'Riyadh, KSA',
    image: '/images/project-2.png',
    span: 'lg:col-span-5',
  },
  {
    title: 'Villa Serenità',
    category: 'Architecture',
    location: 'Palm Jumeirah, UAE',
    image: '/images/project-3.png',
    span: 'lg:col-span-5',
  },
  {
    title: 'The Meridian Residence',
    category: 'Renovation',
    location: 'London, UK',
    image: '/images/project-4.png',
    span: 'lg:col-span-4',
  },
  {
    title: 'Marble & Brass Kitchen',
    category: 'Interior Design',
    location: 'Abu Dhabi, UAE',
    image: '/images/project-5.png',
    span: 'lg:col-span-4',
  },
  {
    title: 'Vertex Headquarters',
    category: 'Corporate Fit-Out',
    location: 'Doha, Qatar',
    image: '/images/project-6.png',
    span: 'lg:col-span-4',
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      delay={(index % 3) * 0.08}
      className={cn(
        'group relative min-h-[320px] overflow-hidden rounded-sm bg-secondary lg:min-h-0',
        project.span,
      )}
    >
      <img
        src={project.image || '/placeholder.svg'}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-end p-7 md:p-8">
        <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            {project.category}
          </span>
          <h3 className="mt-2 font-serif text-2xl font-medium text-white md:text-3xl">
            {project.title}
          </h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-sm text-white/70">
              <MapPin className="size-3.5" />
              {project.location}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
              View Project
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
      <span className="absolute right-6 top-6 flex size-11 items-center justify-center rounded-full border border-white/30 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
        <ArrowUpRight className="size-5" />
      </span>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A portfolio of spaces crafted to endure."
          />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            View All Projects
            <span className="flex size-9 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-5 lg:grid-cols-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
