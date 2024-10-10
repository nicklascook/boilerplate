import React from "react";
import { type GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { type BlogPost, getAllPosts } from "~/lib/blog";
import { formatDate } from "~/lib/utils";

type Props = {
  posts: BlogPost[];
};

export const BlogIndex: React.FC<Props> = ({ posts }) => {
  return (
    <main className="m-auto mt-12 min-h-[80vh] w-full max-w-7xl px-4">
      <h1 className="mb-8 text-3xl font-bold">Recent blog posts</h1>
      {posts.length === 0 && (
        <div className="text-center text-xl">
          No blog posts yet. Stay tuned!
        </div>
      )}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
            <div className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64 w-full">
                <Image
                  src={`/blog/${post.coverImage}`}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold group-hover:underline">
                  {post.title}
                </h2>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs text-white group-hover:bg-primary-600">
                    {post.author[0]}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {post.author} • {formatDate(post.date)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};

export default BlogIndex;
