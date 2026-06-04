import Image from "next/image"

import { cn } from "@/lib/utils"
import { aboutContent } from "./content"

import { Container } from "@/components/container"
import { Icon } from "@iconify/react"
import { ProseText } from "./prose-text"
import { StackSection } from "./stack-section"

const proseBody =
  "max-w-prose text-base leading-relaxed text-pretty text-foreground"
const proseDetail =
  "max-w-prose text-sm leading-relaxed text-pretty text-foreground"

const linkFocus =
  "rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function hasText(value: string | undefined | null): value is string {
  return Boolean(value?.trim())
}

function ExternalLink({
  href,
  children,
  className,
  externalLabel = "opens in new tab",
}: {
  href: string
  children: React.ReactNode
  className?: string
  externalLabel?: string
}) {
  const external = href.startsWith("http")

  return (
    <a
      href={href}
      className={cn(
        "text-foreground underline-offset-4 transition-colors hover:text-foreground/80 hover:underline",
        linkFocus,
        className
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
      {external ? (
        <span className="sr-only">{`, ${externalLabel}`}</span>
      ) : null}
    </a>
  )
}

const sectionGap = "gap-[clamp(3rem,6vw,3.5rem)]"
const sectionBlock = "flex flex-col gap-4"

function SectionHeading({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2
      id={id}
      className="text-base font-semibold tracking-[-0.01em] text-balance text-foreground"
    >
      {children}
    </h2>
  )
}

export function AboutPage() {
  const {
    name,
    title,
    location,
    now,
    availability,
    image,
    sections,
    experience,
    projects,
    stack,
  } = aboutContent

  const showIntro = hasText(now)
  const showProjects = sections.projects && projects.length > 0
  const hasStack = stack.some((category) => category.items.length > 0)

  return (
    <article
      aria-labelledby="about-title"
      className="py-[clamp(2.5rem,5vw,3.5rem)] sm:py-[clamp(3rem,7vw,4.5rem)]"
    >
      <Container className={cn("flex flex-col", sectionGap)}>
        <header
          className={cn(
            "flex max-w-prose flex-col gap-5 sm:gap-6",
            image && "max-w-none sm:flex-row sm:items-start sm:gap-8"
          )}
        >
          {image ? (
            <div className="relative size-28 shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:mt-0.5 sm:size-32">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover"
                priority
              />
            </div>
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="space-y-1.5">
              <h1
                id="about-title"
                className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.02em] text-balance wrap-break-word text-foreground"
              >
                {name}
              </h1>
              <p className="text-lg font-semibold tracking-tight text-foreground">
                {title}
              </p>
            </div>

            <div className="mt-4 space-y-1 text-sm">
              <p className="flex items-center gap-1.5 text-muted-foreground">
                <Icon
                  icon="twemoji:flag-thailand"
                  className="mt-px size-4 shrink-0"
                  aria-hidden
                />
                <span>{location}</span>
              </p>
              {hasText(availability) ? (
                <p className="text-foreground">{availability}</p>
              ) : null}
            </div>
          </div>
        </header>

        {showIntro ? (
          <section
            aria-labelledby="about-now"
            className={cn(sectionBlock, "max-w-prose")}
          >
            <SectionHeading id="about-now">About</SectionHeading>
            <ProseText className={proseBody}>{now}</ProseText>
          </section>
        ) : null}

        {experience.length > 0 ? (
          <section
            aria-labelledby="about-experience"
            className={cn(sectionBlock, "max-w-prose")}
          >
            <SectionHeading id="about-experience">Experience</SectionHeading>
            <ol className="relative space-y-8 border-l border-border pl-5 sm:pl-6">
              {experience.map((item) => (
                <li
                  key={`${item.period}-${item.company}-${item.role}`}
                  className="relative"
                >
                  <div className="flex flex-col gap-1.5">
                    <p className="font-mono text-xs leading-none text-muted-foreground tabular-nums">
                      {item.period}
                    </p>
                    <p className="text-base leading-snug font-medium text-foreground">
                      {item.role}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        at {item.company}
                      </span>
                    </p>
                    {hasText(item.detail) ? (
                      <ProseText className={proseDetail}>
                        {item.detail}
                      </ProseText>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {showProjects ? (
          <section
            aria-labelledby="about-projects"
            className={cn(sectionBlock, "max-w-prose")}
          >
            <SectionHeading id="about-projects">Selected work</SectionHeading>
            <ul className="divide-y divide-border">
              {projects.map((project) => (
                <li
                  key={project.href}
                  className="flex flex-col gap-1.5 py-5 first:pt-0 last:pb-0"
                >
                  <ExternalLink
                    href={project.href}
                    className="text-base leading-snug font-medium no-underline hover:underline"
                  >
                    {project.title}
                  </ExternalLink>
                  <p className={proseDetail}>{project.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {hasStack ? (
          <section
            aria-labelledby="about-stack"
            className={cn(sectionBlock, "max-w-prose")}
          >
            <SectionHeading id="about-stack">Stack</SectionHeading>
            <StackSection categories={stack} />
          </section>
        ) : null}
      </Container>
    </article>
  )
}
