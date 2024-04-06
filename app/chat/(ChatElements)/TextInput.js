export default function TextInput({ sm, m }) {
  return (
    <input
      type="text"
      value={m}
      onChange={(e) => sm(e.target.value)}
      className="bg-white text-black h-[5vh] w-[70vw] rounded-lg"
    />
  );
}
