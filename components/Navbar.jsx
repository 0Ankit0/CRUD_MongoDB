import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-cyan-400 to-blue-400 p-8 flex justify-between rounded-lg">
      <Link className="font-bold text-xl" href={"/"}>
        Home
      </Link>
      <Link
        className="bg-blue-800 py-1 px-4 rounded-md text-white text-opacity-90"
        href={"/addTopic"}
      >
        Add post
      </Link>
    </nav>
  );
}
