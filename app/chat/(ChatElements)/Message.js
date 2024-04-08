const deleteMessage = (id, sockio) => {
  fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/chat/delete`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
  }).then(async (res) => {
    if (res) {
      sockio.emit("delete");
    }
  });
};

export default function Message({ message, user, session, sockio }) {
  const ElseMessage = (
    <>
      <div className="flex mt-4 space-x-5">
        <img
          src={user.image}
          alt="profile"
          className="ml-2 w-10 h-10 rounded-full"
        />
        <div className="flex flex-col bg-gray-600 rounded-md w-[8vw]">
          <p className="ml-2 text-sky-600	">{user.name}</p>
          <p className="ml-2">{message.message}</p>
        </div>
      </div>
    </>
  );

  const userMessage = (
    <>
      <div className="flex mt-4 space-x-5" dir="rtl">
        <img
          src={user.image}
          alt="profile"
          className="mr-2 ml-2 w-10 h-10 rounded-full"
        />
        <div
          className="flex flex-col bg-[#28a745] rounded-md w-[8vw]"
          dir="ltr"
        >
          <p className="ml-2 text-sky-700 font-bold">{user.name}</p>
          <p className="ml-2 text-black">{message.message}</p>
          <button
            dir="rtl"
            className="mr-1 mb-1"
            style={{ color: "#dc3545" }}
            onClick={(e) => {
              deleteMessage(message.id, sockio);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
  return (
    <div>{session.user.email === user.email ? userMessage : ElseMessage}</div>
  );
}
