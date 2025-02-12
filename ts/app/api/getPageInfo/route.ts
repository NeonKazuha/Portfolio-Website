import { NextResponse } from "next/server";
import { sanityClient } from "@/protfolio/sanity"; // Ensure this is correctly configured
import { groq } from "next-sanity";

const query = groq`
  *[_type == "pageInfo"][0] {
    name,
    role,
    heroImage,
    backgroundInformation,
    profilePic,
    phoneNumber,
    email,
    address,
    socials[]->{_id, title, url}
  }
`;

export async function GET() {
  try {
    const pageInfo = await sanityClient.fetch(query);

    if (!pageInfo) {
      return NextResponse.json({ error: "No data found" }, { status: 404 });
    }

    return NextResponse.json({ pageInfo }, { status: 200 });
  } catch (error) {
    console.error("Sanity API Error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
