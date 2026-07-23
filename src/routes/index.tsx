import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { FooterSection } from "@/components/jack/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Aeronyx Tech — Creative Web Development & Automation Studio",
      },
      {
        name: "description",
        content:
          "Aeronyx Tech — Creative web development and automation studio specialized in custom database schedulers and high-speed sites.",
      },
      {
        property: "og:title",
        content:
          "Aeronyx Tech — Creative Web Development & Automation Studio",
      },
      {
        property: "og:description",
        content:
          "Aeronyx Tech — Creative web development and automation studio specialized in custom database schedulers and high-speed sites.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
