import ChatBox from "./(ChatElements)/ChatBox";
import RedirectAuth from "../(Auth)/RedirectAuth";

export default function Chat() {
  return (
    <>
      <RedirectAuth />
      <ChatBox />
    </>
  );
}
