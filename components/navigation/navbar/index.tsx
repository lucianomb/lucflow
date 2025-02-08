import React from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "@/components/navigation/navbar/Theme";

const NavBar = () => {
  return (
    <nav className="flex-between background-light900_dark200 sm:px fixed z-50 w-full gap-5 p-6 px-12 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src={"/images/site-logo.svg"}
          alt="LucFlow Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold dark:text-light font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Luc<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <div className="flex-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};
export default NavBar;
