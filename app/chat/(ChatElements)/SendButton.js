"use client";

const send = (sockio, m, sm, user) => {
  if (m && user) {
    fetch(`http://localhost:3000/api/chat/send`, {
      method: "POST",
      body: JSON.stringify({ user, message: m }),
    }).then((res) => {
      if (res.ok) {
        sm("");
        sockio.emit("message");
      } else {
        console.log("Failed to send message");
      }
    });
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
