export async function GET() {
  return Response.json({
    name: "Dita Surya Kartika",
    role: "peserta bootcamp",
    favoriteTech: ["Next.js", "React"],
  });
}