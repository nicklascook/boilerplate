import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  // Add your props here if needed
};

export const Footer: React.FC<Props> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center">
            <Link href="/" className="flex flex-shrink-0 items-center gap-1">
              <Image src="/site/logo.png" alt="Logo" width={35} height={35} />
              <div className="font-header ml-2 text-xl font-bold">My Site</div>
            </Link>
          </div>

          <nav className="mt-4 flex space-x-4 md:mt-0">
            <Link href="/privacy" className="text-gray-700 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Nick Craux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
