import { NextResponse } from "next/server";
import { sanityClient } from "@/protfolio/sanity"; // Ensure this is correctly set up
import { groq } from "next-sanity";

const query = groq`
  *[_type == "skill"] {
    _id,
    title,
    progress,
    image
  }
`;

export async function GET() {
  try {
    const skills = await sanityClient.fetch(query);

    if (!skills || skills.length === 0) {
      return NextResponse.json({ error: "No skills found" }, { status: 404 });
    }

    return NextResponse.json({ skills }, { status: 200 });
  } catch (error) {
    console.error("Sanity API Error:", error);
    return NextResponse.json({ error: "Failed to fetch skills" }, { status: 500 });
  }
}
