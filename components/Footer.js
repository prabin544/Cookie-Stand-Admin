import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-4 bg-green-500 mt-10">
      <nav className="flex items-center justify-left space-x-10">
        <Link href="/careers">
          <a className="text-xl" href="careers">
            2021
          </a>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
