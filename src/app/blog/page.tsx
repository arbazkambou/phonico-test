import ServerSide from "@/api/ServerSide";
import BlogPage from "@/components/blogs/BlogPage";
import BlogCategoryModel from "@/Models/BlogCategoryModel";
import BlogModel from "@/Models/BlogModel";
import { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Phonico eSIM Blog for Expert Insights, Tips, and Tech Trends'",
  description:
    "Phonico eSIM blog for expert insights, travel tips, and the latest tech trends in seamless connectivity. Stay informed and make the most of your wireless experience",
};

export default async function Blog({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  let url = "/api/landing/blog";
  if (searchParams.category) {
    url += "?category=" + searchParams.category;
  }
  const blogs: Array<BlogModel> = (await ServerSide.get(url)).data.data;
  const categories: Array<BlogCategoryModel> = (
    await ServerSide.get("/api/landing/blog-category")
  ).data.data;

  return <BlogPage categories={categories} blogs={blogs} />;
}
