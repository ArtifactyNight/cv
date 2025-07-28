import { GitHubContributions } from "@/components/github-contributions";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";
import { LucideGlobe } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { RiMailFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  keywords: [
    "NightKunGz",
    "Kidsanaphon Kaeopha",
    "Developer",
    "Freelancer",
    "Student",
    "Portfolio",
    "CV",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: RESUME_DATA.name,
  description: RESUME_DATA.about,
  image: RESUME_DATA.avatarUrl,
  jobTitle: "Full-stack Developer",
  url: RESUME_DATA.personalWebsiteUrl,
  sameAs: [
    RESUME_DATA.contact.social[0].url, // GitHub
    RESUME_DATA.contact.social[1].url, // Discord
    RESUME_DATA.contact.social[2].url, // Telegram
    RESUME_DATA.contact.social[3].url, // LinkedIn
  ],
  worksFor: RESUME_DATA.work.map((work) => ({
    "@type": "Organization",
    name: work.company,
    url: work.link,
  })),
  email: RESUME_DATA.contact.email,
  telephone: RESUME_DATA.contact.tel,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nakhon Ratchasima",
    addressCountry: "Thailand",
  },
};

export default function Page() {
  // Extract GitHub username from your social links
  const githubUsername =
    RESUME_DATA.contact.social
      .find((social) => social.name === "GitHub")
      ?.url.split("/")
      .pop() || "ArtifactyNight";

  let sectionDelay = 0.1;
  return (
    <main className="relative mx-auto scroll-my-12 p-4 md:p-16 print:p-12">
      {/* Grid background */}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-50",
          "print:hidden",
        )}
      />

      <section className="relative mx-auto w-full max-w-(--breakpoint-md) space-y-8 print:space-y-6">
        <BlurFade delay={sectionDelay}>
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
              <p className="text-muted-foreground max-w-md text-sm text-pretty">
                {RESUME_DATA.about}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-muted-foreground max-w-md items-center text-xs text-pretty">
                  <Link
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href={RESUME_DATA.locationLink}
                    target="_blank"
                  >
                    <LucideGlobe className="size-3" />
                    {RESUME_DATA.location}
                  </Link>
                </p>
                {/* <SpotifyNowPlaying />
              <DiscordStatus /> */}
              </div>
              <div className="text-muted-foreground flex gap-x-1 pt-1 text-sm print:hidden">
                {RESUME_DATA.contact.email ? (
                  <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                      <RiMailFill className="size-4" />
                    </Link>
                  </Button>
                ) : null}
                {RESUME_DATA.contact.social.map((social) => (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <Link href={social.url} target="_blank">
                      <social.icon className="size-4" />
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="text-muted-foreground hidden flex-col gap-x-1 text-sm print:flex">
                {RESUME_DATA.contact.email ? (
                  <Link href={`mailto:${RESUME_DATA.contact.email}`}>
                    <span className="underline">
                      {RESUME_DATA.contact.email}
                    </span>
                  </Link>
                ) : null}
                {RESUME_DATA.contact.tel ? (
                  <Link href={`tel:${RESUME_DATA.contact.tel}`}>
                    <span className="underline">{RESUME_DATA.contact.tel}</span>
                  </Link>
                ) : null}
              </div>
            </div>

            <Avatar className="size-28">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </BlurFade>

        <BlurFade delay={(sectionDelay += 0.05)}>
          <Section>
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-muted-foreground text-sm text-pretty">
              {RESUME_DATA.summary}
            </p>
          </Section>
        </BlurFade>
        <BlurFade delay={(sectionDelay += 0.1)}>
          <Section>
            <h2 className="text-xl font-bold">Work Experience</h2>
            {RESUME_DATA.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="inline-flex items-center justify-center gap-x-1 leading-none font-semibold">
                        <Link
                          className="hover:underline"
                          href={work.link}
                          target="_blank"
                        >
                          {work.company}
                        </Link>

                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-sm text-gray-500 tabular-nums">
                        {work.start} - {work.end}
                      </div>
                    </div>

                    <h4 className="text-sm leading-none">{work.title}</h4>
                  </CardHeader>
                  <CardContent className="mt-2 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
        </BlurFade>
        <BlurFade delay={(sectionDelay += 0.15)}>
          <Section>
            <h2 className="text-xl font-bold">Education</h2>
            {RESUME_DATA.education.map((education) => {
              return (
                <Card key={education.school}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-base">
                      <h3 className="leading-none font-semibold">
                        {education.school}
                      </h3>
                      <div className="text-sm text-gray-500 tabular-nums">
                        {education.start} - {education.end}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-2">{education.degree}</CardContent>
                </Card>
              );
            })}
          </Section>
        </BlurFade>
        <BlurFade delay={(sectionDelay += 0.2)}>
          <Section>
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {RESUME_DATA.skills.map((skill) => {
                return (
                  <Badge variant="outline" key={skill.title}>
                    <Link
                      href={skill.link ?? "#"}
                      key={skill.title}
                      target="_blank"
                      className="inline-flex items-center gap-x-1"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.title}
                          className="mr-1 size-3.5"
                        />
                      ) : null}
                      {skill.title}
                    </Link>
                  </Badge>
                );
              })}
            </div>
          </Section>
        </BlurFade>
        <BlurFade delay={(sectionDelay += 0.25)}>
          <Section className="print-force-new-page scroll-mb-16">
            <h2 className="text-xl font-bold">Works</h2>
            <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
              {RESUME_DATA.projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tags={project.techStack}
                    link={"link" in project ? project.link?.href : undefined}
                  />
                );
              })}
            </div>
          </Section>
        </BlurFade>
        <BlurFade delay={(sectionDelay += 0.3)}>
          <Section className="mt-8">
            <h2 className="text-xl font-bold">GitHub Contributions</h2>
            <GitHubContributions username={githubUsername} />
          </Section>
        </BlurFade>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Webring Icon - fixed bottom right */}
      <Link
        href="https://webring.wonderful.software#nightkungz.dev"
        title="วงแหวนเว็บ"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-50 transition-all duration-300 hover:scale-120 hover:rotate-12 print:hidden"
        style={{ width: 40, height: 40 }}
        aria-label="วงแหวนเว็บ (Webring)"
      >
        <img
          src="https://webring.wonderful.software/webring.black.svg"
          alt="วงแหวนเว็บ"
          width={40}
          height={40}
          style={{ display: "block" }}
        />
      </Link>
    </main>
  );
}
