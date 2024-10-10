import React from "react";
import { type GetStaticProps, type GetStaticPaths } from "next";

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "~/lib/utils";
import { getAllPosts, getPostBySlug, type BlogPost } from "~/lib/blog";
import toast from "~/lib/toast";

type Props = {
  post: BlogPost;
};

export const BlogPostPage: React.FC<Props> = ({ post }) => {
  return (
    <>
      <main className="mx-auto mt-12 w-full max-w-7xl px-4 pb-32 sm:px-6 lg:px-8">
        <header className="mb-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="h-5 w-5"
            >
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </header>
        <article className="prose prose-lg lg:prose-xl mx-auto">
          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 text-gray-600">{post.excerpt}</p>
          <div className="relative mb-8 h-[200px] overflow-hidden rounded-lg shadow-lg sm:h-[300px] lg:h-[400px]">
            <Image
              src={`/blog/${post.coverImage}`}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1200px"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
              <div className="flex flex-wrap justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm font-medium">Written by</p>
                  <p className="text-lg font-bold">{post.author}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Published on</p>
                  <p className="text-lg font-bold">{formatDate(post.date)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-between">
            <div className="mt-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 sm:text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <button
              className="flex items-center justify-center gap-2 rounded border-2 border-gray-300 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 sm:text-base"
              onClick={() => {
                toast("success", "Copied to clipboard");
                void navigator.clipboard.writeText(window.location.href);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-4 w-4 fill-current sm:h-5 sm:w-5"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
              Copy link
            </button>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string);
  return {
    props: { post },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default BlogPostPage;
