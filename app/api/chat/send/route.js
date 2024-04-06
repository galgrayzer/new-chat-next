import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const POST = async (req) => {
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
      return NextResponse.redirect("http:localhost:3000/chat");
    } else {
      return NextResponse.error("Failed to send message");
    }
  }
};

export const GET = async (req, res) => {
  redirect("/404");
};
