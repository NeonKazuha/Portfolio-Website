import { NextResponse } from "next/server";
import { sanityClient } from "@/protfolio/sanity"; // Ensure this is correctly set up
import { groq } from "next-sanity";

const query = groq`
  *[_type == "project"] {
    _id,
    title,
    image,
    summary,
    technologies[]->{
      _id,
      title,
      image
    },
    linkToBuild
  }
`;

export async function GET() {
  try {
    const projects = await sanityClient.fetch(query);

    if (!projects || projects.length === 0) {
      return NextResponse.json({ error: "No projects found" }, { status: 404 });
    }

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error("Sanity API Error:", error);
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}
