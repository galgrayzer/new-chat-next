import { NextResponse } from "next/server";

export const GET = async (req) => {
  const result = await fetch(
    "http://127.0.0.1:8090/api/collections/messeges/records?page=1&perPage=10&sort=-created",
    { cache: "no-store" }
  );
  const body = await result.json();
  if (body.items) {
    return NextResponse.json(body.items.reverse());
  } else {
    return NextResponse.error("Failed to get messages");
  }
};
