import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import { Slide } from "../animation/Slide";

export const metadata: Metadata = {
  title: "Blog | Diyorbek Rustamjonov",
  metadataBase: new URL("https://xattab.uz/blog"),
  description: "Read latest stories from Diyorbek Rustamjonov's Blog",
  openGraph: {
    title: "Blog | Diyorbek Rustamjonov",
    url: "https://xattab.uz/blog",
    description: "Read latest stories from Diyorbek Rustamjonov's Blog",
    images: "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/blog.png",
  },
};

export default function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-[950px] mb-12 pb-12 border-b dark:border-zinc-800 border-zinc-100">
        <div className="max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-6 lg:leading-[3.7rem]">
              Blog
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed mb-8">
              Welcome to my blog domain where I share personal stories about
              things I&apos;ve learned, projects I&apos;m hacking on and just
              general findings.
            </p>
          </Slide>
        </div>
      </section>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
