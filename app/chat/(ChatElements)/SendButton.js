"use client";

const send = (sockio, m, sm, user) => {
  if (m && user) {
    const url = `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/chat/sendMessage`;
    console.log(url);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ user, message: m }),
    });
    sm("");
    sockio.emit("message");
  }
};

export default function SendButton({ sockio, id, m, sm, user }) {
  return (
    <button
      id={id}
      onClick={(e) => {
        send(sockio, m, sm, user);
      }}
      className="bg-green-700 hover:bg-green-800 w-[6vw] text-white h-[5vh] rounded-lg"
    >
      Send
    </button>
  );
}
