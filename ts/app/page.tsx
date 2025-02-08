import Image from "next/image";
import type { NextPage } from 'next'
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About"

export default function Home() {
  return (
    <div className="bg-[#F8F9FA] text-darkblack h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        <Head>
          <title>Tanmay Deshmukh</title>
        </Head>

        <Header />

        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Experiences */}

        {/* Skills */}

        {/* Contact ME */}
    </div>
  );
}