import React from "react";
import Link from "next/link";
import Image from "next/image";
import { tw } from "~/lib/utils";

const socialClasses =
  "fill-slate-500 hover:fill-primary-500 transition-colors duration-150 ease-in-out";

const linkClasses =
  "hover:text-primary-500 transition-colors duration-150 ease-in-out";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-t-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between space-y-6 sm:flex-row sm:space-y-0">
          <div className="flex w-full items-center justify-center sm:justify-start">
            <Link href="/" className="flex flex-shrink-0 items-center gap-1">
              <Image src="/site/logo.png" alt="Logo" width={35} height={35} />
              <div className="ml-2 font-header text-xl font-bold">My Site</div>
            </Link>
          </div>

          <nav className="w-full">
            <div className="flex flex-wrap justify-center gap-8 sm:justify-end">
              <div className="flex min-w-[140px] flex-col gap-3">
                <p className="font-header font-semibold">Pages</p>
                <Link href="/privacy" className={tw(linkClasses)}>
                  Privacy
                </Link>
                <Link href="/blog" className={tw(linkClasses)}>
                  Blog
                </Link>
              </div>
              <div className="flex min-w-[140px] flex-col gap-3">
                <p className="font-header font-semibold">Other Sites</p>
                <a
                  href="https://intellisay.xyz"
                  target="_blank"
                  className={tw(linkClasses)}
                >
                  Intellisay
                </a>
                <a
                  href="https://logogeneratorai.xyz"
                  target="_blank"
                  className={tw(linkClasses)}
                >
                  LogoGeneratorAI
                </a>
                <a
                  href="https://craux.studio"
                  target="_blank"
                  className={tw(linkClasses)}
                >
                  craux.studio
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-100 pt-8 text-center sm:flex-row">
          <div className="mb-4 flex items-center gap-5 sm:mb-0">
            <a href="https://x.com/nickcraux" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 509.64"
                className={tw(socialClasses, "h-5 w-5")}
              >
                <rect width="512" height="509.64" rx="115.61" ry="115.61" />
                <path
                  fill="#fff"
                  fill-rule="nonzero"
                  d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                />
              </svg>
            </a>
            <a href="https://www.youtube.com/@nickcraux" target="_blank">
              <svg
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
                className={tw(socialClasses, "h-6 w-6")}
              >
                <g>
                  <path
                    d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
                      c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
                      C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.60268.239-0.847-7.239-4.568V168.607
                      c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                  />
                </g>
              </svg>
            </a>
            <a href="https://discord.com/invite/VPyxUuZzeF" target="_blank">
              <svg
                viewBox="0 -28.5 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                className={tw(socialClasses, "h-6 w-6")}
              >
                <g>
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Nick Craux. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
