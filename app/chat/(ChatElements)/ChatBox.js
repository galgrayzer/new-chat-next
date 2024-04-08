"use client";

import TextInput from "./TextInput";
import SendButton from "./SendButton";
import Message from "./Message";
import IsAuth from "../../(Auth)/IsAuth";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ChatBox() {
  const user = IsAuth();
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [socket, setSocket] = useState(
    io(`${process.env.NEXT_PUBLIC_SOCKETIO}`)
  );
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/chat/get`
        );
        const data = await response.json();
        setMessagesList(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData();

    socket.on("message", (msg) => {
      fetchData();
    });

    socket.on("delete", () => {
      fetchData();
    });

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      socket.off("message");
    };
  }, [socket]);

  return (
    <div className="bg-gray-800 text-white h-[80vh] w-[80vw] center rounded-lg">
      {messagesList.map((m) => (
        <Message
          session={session}
          sockio={socket}
          key={m.id}
          message={m}
          user={{ name: m.name, image: m.image, email: m.email }}
        />
      ))}
      <div className="absolute left-[40%] -translate-x-[40%] top-[90%] flex space-x-5">
        <TextInput sm={setMessage} m={message} />
        <SendButton
          id="sendButton"
          sockio={socket}
          sm={setMessage}
          m={message}
          user={user}
        />
      </div>
    </div>
  );
}

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    document.getElementById("sendButton").click();
  }
};
