import { NextResponse } from "next/server";
import { sanityClient } from "@/protfolio/sanity"; // Ensure this is correctly set up
import { groq } from "next-sanity";

const query = groq`
  *[_type == "experience"] {
    _id,
    jobTitle,
    company,
    companyImage,
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
    technologies[]->{
      _id,
      title,
      image
    },
    points
  }
`;

export async function GET() {
  try {
    const experiences = await sanityClient.fetch(query);

    if (!experiences || experiences.length === 0) {
      return NextResponse.json({ error: "No experiences found" }, { status: 404 });
    }

    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error) {
    console.error("Sanity API Error:", error);
    return NextResponse.json({ error: "Failed to fetch experiences" }, { status: 500 });
  }
}
