import { NextResponse } from "next/server";
import { sanityClient } from "@/protfolio/sanity"; // Ensure this is correctly set up
import { groq } from "next-sanity";

const query = groq`
  *[_type == "social"] {
    _id,
    title,
    url
  }
`;

export async function GET() {
  try {
    const socialPlatforms = await sanityClient.fetch(query);

    if (!socialPlatforms || socialPlatforms.length === 0) {
      return NextResponse.json({ error: "No social platforms found" }, { status: 404 });
    }

    return NextResponse.json({ socialPlatforms }, { status: 200 });
  } catch (error) {
    console.error("Sanity API Error:", error);
    return NextResponse.json({ error: "Failed to fetch social platforms" }, { status: 500 });
  }
}
