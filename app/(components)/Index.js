"use client";

import IsAuth from "../(Auth)/IsAuth";

export default function Home() {
  let user = IsAuth();
  return (
    <>
      {!user ? (
        <h1 className="text-5xl center font-bold">Please Login</h1>
      ) : (
        <>
          <h1 className="text-5xl absolute left-1/2 top-1/4 -translate-x-1/2 font-bold">{user.user.name}</h1>
          <img
            src={user.user.image}
            alt="user image"
            width={200}
            height={200}
            className="rounded-full absolute left-1/2 top-1/3 -translate-x-1/2"
          />
        </>
      )}
    </>
  );
}
