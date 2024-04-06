export default function Message({ message, user, session }) {
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
          <p className="ml-2">{message}</p>
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
          className="flex flex-col bg-green-900 rounded-md w-[8vw]"
          dir="ltr"
        >
          <p className="ml-2 text-sky-600">{user.name}</p>
          <p className="ml-2">{message}</p>
        </div>
      </div>
    </>
  );
  return (
    <div>{session.user.email === user.email ? userMessage : ElseMessage}</div>
  );
}
