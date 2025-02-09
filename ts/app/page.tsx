import Image from "next/image";
import type { NextPage } from 'next'
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience"
import Skills from "@/components/Skills"
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import ContactMe from "@/components/ContactMe";
import Script from "next/script";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Projects from "../components/Projects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

async function getData() {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  };
}

export default async function Home() {
  const { pageInfo, experiences, projects, skills, socials } = await getData();
  
  return (
    <div className="bg-[#F8F9FA] text-darkblack h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        <Head>
          <title>Tanmay Deshmukh</title>
        </Head>

        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LV1LN9VBT0"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-LV1LN9VBT0')`}
        ;
      </Script>

        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo}/>
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>

        {/* Experiences */}
        <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-center">
        <Skills skills={skills} />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>

        {/* Contact ME */}
        <section id="skills" className="snap-center">
          <ContactMe />
        </section>

        <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
}