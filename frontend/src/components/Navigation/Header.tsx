import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const clash = localFont({
  src: "../../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash",
  display: "swap",
});

function Header() {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b backdrop-blur-lg transition-all">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="md:px-10 px-2.5">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex z-40 font-semibold items-center gap-2"
            >
              <div className={cn(clash.className, "text-xl space-x-1")}>
                <span>QuizQuest</span>
                <span className="text-primary">.</span>
              </div>
            </Link>
            <div className="hidden items-center space-x-4 sm:flex"></div>
            <div className="flex justify-center items-center flex-row space-x-4">
              <div className="hidden sm:block">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
