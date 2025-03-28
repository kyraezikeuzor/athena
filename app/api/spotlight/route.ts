import { AirtableSpotlightManager } from "@/lib/airtable";

export const revalidate = 60;

export async function GET() {
  const post = await new AirtableSpotlightManager().getLatestRecord();
  console.log(post.fields);
  return new Response(JSON.stringify(post.fields));
}