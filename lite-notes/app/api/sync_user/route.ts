import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { appwriteId, email, name } = await req.json();

    if (!appwriteId || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    let user = await User.findOne({ appwriteId });

    if (!user) {
      user = await User.create({
        appwriteId,
        email,
        name,
      });
    }

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to sync user" },
      { status: 500 }
    );
  }
}
