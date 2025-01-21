import Link from "next/link";
import styles from "./BlogCard.module.css";
import BlogModel from "@/Models/BlogModel";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function BlogCard({ blog }: { blog: BlogModel }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div
        className={`${styles.blog} rounded d-flex flex-column justify-content-between gap-4 h-100`}
      >
        <div className={`${styles.blogImage}`}>
          <Image src={blog.image} alt={blog.name} fill className="rounded" />
        </div>
        <div className="d-flex flex-column gap-2">
          <p className="font14 fontWeight600 textAccent">
            {blog.blog_category.name}
          </p>
          <h3 className="font24 fontWeight600 d-flex justify-content-between align-blogs-center">
            <span>{blog.name}</span>{" "}
            <span>
              <ArrowUpRight />
            </span>
          </h3>
          <p className="textMuted">{blog.sub_content}</p>
        </div>
        <p className="font14 textSecondary">
          {blog.created_at_diff_for_humans}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
