import Image from "next/image";
import vercellogo from "@/public/icons/vercel.svg";
import nextjslogo from "@/public/icons/nextjs.svg";

export default function Footer() {
  return (
    <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44 lg:min-h-[150px] min-h-full relative">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16">
        <div className="flex md:flex-row flex-col items-center gap-x-2">
          <h3 className="font-inter">Built with:</h3>
          <ul className="flex items-center gap-x-2 text-sm dark:text-zinc-600 text-zinc-400 md:mt-0 mt-3">
            <li>
              <a
                href="https://nextjs.org"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
              >
                <Image
                  src={nextjslogo}
                  width={20}
                  height={20}
                  alt="nextjs logo"
                />{" "}
                Next.js
              </a>
            </li>
            <li>
              <a
                href="https://vercel.com"
                rel="noreferrer noopener"
                target="_blank"
                className="flex items-center gap-x-2 dark:text-white text-zinc-600 hover:underline"
              >
                <Image
                  src={vercellogo}
                  width={20}
                  height={20}
                  alt="vercel logo"
                />{" "}
                Vercel
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
          {/* <a
              className="flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 px-4 text-center mb-3 font-bold tracking-tight"
              href="https://github.com/diyorbekrustamjonov/xattab.uz"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BiLogoGithub />
              Stars <em className="text-primary-color not-italic">3,329</em>
            </a> */}

          <small className="text-zinc-500">
            Copyright &copy; Diyorbek Rustamjonov {new Date().getFullYear()} All rights
            Reserved
          </small>
        </div>
      </div>
    </footer>
  );
}
