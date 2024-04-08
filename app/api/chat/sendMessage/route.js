import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export async function POST(req) {
  const { user, message } = await req.json();
  if (user && message) {
    const data = {
      email: user.user.email,
      name: user.user.name,
      message: message,
      image: user.user.image,
    };
    const record = await pb.collection("messeges").create(data);
    if (record) {
      return NextResponse.redirect(
        `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/chat`
      );
    } else {
      return NextResponse.error("Failed to send message");
    }
  }
}

export async function GET(req) {
  redirect("/404");
}
