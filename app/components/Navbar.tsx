import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center py-4 px-5">
      <div className="flex items-center justify-between w-2xl">
        <Link href="/" className="font-bold text-3xl">
          Your<span className="text-primary">Blog</span>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
