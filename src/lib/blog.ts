import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage: string;
  tags: string[];
};

const postsDirectory = path.join(process.cwd(), "src/lib");

export async function getAllPosts(): Promise<BlogPost[]> {
  const filePath = path.join(postsDirectory, "blog.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const json = JSON.parse(fileContents) as BlogPost[];
  return json;
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
