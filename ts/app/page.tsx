import Image from "next/image";
import type { NextPage } from 'next'
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[#ffffff] text-darkBlack h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        <Head>
          <title>Tanmay Deshmukh</title>
        </Head>

        <Header />

        {/* Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* About */}

        {/* Experiences */}

        {/* Skills */}

        {/* Contact ME */}
    </div>
  );
}