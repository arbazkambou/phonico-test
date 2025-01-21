"use client";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./BlogPage.module.css";
import Link from "next/link";
import BlogCard from "./BlogCard";
import BlogModel from "@/Models/BlogModel";
import BlogCategoryModel from "@/Models/BlogCategoryModel";
import { useState } from "react";
function BlogPage({
  blogs,
  categories,
}: {
  blogs: BlogModel[];
  categories: BlogCategoryModel[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.name.toLowerCase().includes(searchQuery.trim()) ||
      blog.sub_content.toLowerCase().includes(searchQuery.trim())
  );
  return (
    <section>
      <Container>
        <div
          className={`${styles.headSection} d-flex flex-column justify-content-center align-items-center gap-3`}
        >
          <div>
            <span
              className="p-2 rounded-4 font14 fontWeight500"
              style={{ background: "rgba(238, 94, 127, 0.13)" }}
            >
              Our Blogs
            </span>
          </div>

          <h1 className="font50 fontWeight600">
            Phonico <span className="textAccent">Blogs</span>
          </h1>
          <p className="font20 text-center">
            The latest industry news, interviews, technologies, and resources.
          </p>
          <div
            className="d-flex justify-content-center align-items-center position-relative mt-2 w-100"
            style={{ maxWidth: "450px" }}
          >
            <input
              className="px-3 myInput myInputWhite w-100"
              placeholder="Search blogs"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="myButton myButtonColored textWhite"
              style={{ position: "absolute", right: "0px" }}
            >
              Search
            </button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center gap-3 my-5">
          <h2 className="font24 fontWeight600">Categories to Explore</h2>
          <div
            className={`d-flex justify-content-center align-items-center flex-wrap p-4 gap-4 ${styles.blogsCategory}`}
          >
            {categories.map((item, index) => (
              <Link
                href={`/blog/?category_id=${item.id}`}
                key={index}
                className="fontWeight600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        {filteredBlogs.length > 0 ? (
          <div>
            <h2 className="font24 fontWeight600 mb-3">All Blogs</h2>
            <Row className="d-flex align-items-stretch">
              {filteredBlogs.map((blog, index) => (
                <Col md={6} lg={4} className="mb-4" key={index}>
                  <BlogCard blog={blog} />
                </Col>
              ))}
            </Row>
          </div>
        ) : (
          <div>
            <h2 className="font24 fontWeight600 mb-3 text-center my-5">
              No blog found 🙂
            </h2>
          </div>
        )}
      </Container>
    </section>
  );
}

export default BlogPage;
