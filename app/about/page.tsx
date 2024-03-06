import Image from "next/image";
import { Metadata } from "next";
import { BiEnvelope, BiLinkExternal, BiSolidDownload } from "react-icons/bi";
import { Slide } from "../animation/Slide";
import { userProfile } from "../data/data";

export const metadata: Metadata = {
  title: "About | Diyorbek Rustamjonov",
  metadataBase: new URL("https://xattab.uz/about"),
  description: "Learn more about my skills, experience and technical background",
  openGraph: {
    title: "About | Diyorbek Rustamjonov",
    url: "https://xattab.uz/about",
    description: "Learn more about my skills, experience and technical background",
    images: "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/home.png",
  },
};

export default function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div key={userProfile.id}>
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I&apos;m {userProfile.fullName}. I live in {userProfile.location}, where I
                build cool stuff.
              </h1>
              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                Hey there! My name is Diyorbek Rustamjonov. I&apos;m currently working at Borda Technology as a Flutter Developer.
                <br /><br />
                I began my coding journey with C#, developing various desktop applications. This led me to explore the Unity Game Engine later in my journey.
                <br /><br />
                Later, my interest in Python guided me towards web scraping, and I built some useful tools that I use regularly. As I ventured further into the Python ecosystem, I adopted Flask to design backend solutions, providing a robust foundation for my applications.
                <br /><br />
                Wanting to dive into mobile app development, I learned Flutter and have since created a range of apps, including one I&apos;m particularly proud of,&nbsp;
                <a href="/projects/simple-library" className="dark:text-blue-400 text-blue-500">Simple Library</a>.
                <br /><br />
                Now, I&apos;m delving into Go, aiming to work on the backend side of things. My current project is an app named&nbsp;
                <a href="https://movieparadise.app/" target="_blank" className="dark:text-blue-400 text-blue-500">Movie Paradise</a>.
                <br /><br />
                Outside of coding, I&apos;m passionate about Linux and the open-source community. I&apos;m always keen to learn and grow in both programming and Linux. Oh, and I use Arch btw =)
                <br /><br />
                <h1 className="text-2xl font-bold">Hobbies</h1>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Home Lab</li>
                  <li className="mb-1">Reading</li>
                  <li className="mb-1">Calisthenics</li>
                  <li className="mb-1">Computer Games</li>
                </ul>
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                <Image
                  className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                  src={userProfile.profileImage.image}
                  width={400}
                  height={400}
                  quality={100}
                  alt={userProfile.profileImage.alt}
                  priority
                />

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    <a
                      href={`${userProfile.resumeURL}?dl=${userProfile.fullName}-resume`}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      View Résumé <BiLinkExternal className="text-base" />
                    </a>
                    <a
                      href={`${userProfile.resumeURL}?dl=${userProfile.fullName}-resume`}
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                      title="Download Resume"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                    </a>
                  </div>

                  <a
                    href={`mailto:${userProfile.email}`}
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    {userProfile.email}
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>
      </div>
    </main>
  );
}
