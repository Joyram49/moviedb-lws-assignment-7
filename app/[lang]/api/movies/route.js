import movieList from "@/app/data/data";

export async function GET() {
  return Response.json(movieList.results);
}
