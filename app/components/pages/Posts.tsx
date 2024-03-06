import Image from "next/image";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";
import { posts } from "@/app/data/data";
import EmptyState from "../shared/EmptyState";
import { formatDate } from "../../utils/date";


const fallbackImage: string =
  "https://raw.githubusercontent.com/diyorbekrustamjonov/xattab.uz/main/public/images/illustrations/blog.png";

export default function Posts() {
  return (
    <section>
      {posts.length > 0 ? (
        <div className="flex flex-col lg:max-w-[950px] max-w-full lg:gap-y-8 gap-y-12 mb-12">
          {posts.map((post) =>
            post.isPublished !== true ? null : (
              <article key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex lg:flex-row flex-col lg:items-center items-start gap-8 dark:bg-primary-bg bg-secondary-bg p-6 rounded-lg border dark:border-zinc-800 border-zinc-200 group"
                >
                  <div className="relative lg:w-[450px] lg:h-52 w-full h-56 overflow-hidden rounded-md dark:bg-zinc-800 bg-zinc-100 group">
                    <Image
                      src={post.coverImage?.image || fallbackImage}
                      className="object-cover group-hover:scale-125 duration-300"
                      alt={post.coverImage?.alt || post.title}
                      layout="fill"
                    />
                  </div>
                  <div className="max-w-lg">
                    <h2 className="max-w-sm text-2xl font-semibold tracking-tight mb-4">
                      {post.title}
                    </h2>
                    <p className="dark:text-zinc-400 text-zinc-600 text-[15.5px]">
                      {post.description}
                    </p>
                    <div className="flex items-center gap-x-4 mt-3 text-sm">
                      <div className="flex items-center gap-x-2">
                        <BiCalendar />
                        <time
                          dateTime={post.date ? post.date : post.createdAt}
                        >
                          {post.date
                            ? formatDate(post.date)
                            : formatDate(post.createdAt)}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            )
          )}
        </div>
      ) : (
        <EmptyState value="Blog Post" />
      )}
    </section>
  );
}
