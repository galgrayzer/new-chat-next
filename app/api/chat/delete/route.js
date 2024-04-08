import { NextResponse } from "next/server";

export async function DELETE(req) {
  const { id } = await req.json();
  if (id) {
    fetch(`http://127.0.0.1:8090/api/collections/messeges/records/${id}`, {
      method: "DELETE",
    }).then(async (res) => {
      if (res) {
        return NextResponse.json({ message: "Message deleted" });
      }
    });
  }
  return NextResponse.json({ message: "Failed to delete message" });
}
