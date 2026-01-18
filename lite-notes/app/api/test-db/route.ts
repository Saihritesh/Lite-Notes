import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  await connectDB();

  const count = await User.countDocuments();

  return Response.json({
    message: "DB connected successfully",
    users: count,
  });
}
