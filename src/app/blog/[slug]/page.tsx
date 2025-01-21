import BlogModel from "@/Models/BlogModel";
import ServerSide from "@/api/ServerSide";
import BlogCard from "@/components/blogs/BlogCard";
import MetaData from "@/helpers/metadata";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";
import { Viewport } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: BlogModel = (
    await ServerSide.get(`/api/landing/blog/${params.slug}`)
  ).data.data;
  return MetaData({
    title: blog.name,
    description: blog.sub_content,
    keywords: blog.keywords,
  });
}

export const viewport: Viewport = {
  themeColor: "#F9AF94",
};

export default async function Page({ params }: { params: { slug: string } }) {
  const blog: BlogModel = (
    await ServerSide.get(`/api/landing/blog/${params.slug}`)
  ).data.data;
  const blogs: Array<BlogModel> = (await ServerSide.get("/api/landing/blog"))
    .data.data;
  // const categories: Array<BlogCategoryModel> = (
  //   await ServerSide.get("/api/landing/blog-category")
  // ).data.data;

  return (
    <section>
      <Container>
        <div className={`${styles.blogImgContainer} mt-2`}>
          <Image
            src={blog.image}
            alt={blog.name}
            fill
            style={{ objectFit: "cover" }}
            loading="eager"
            priority={true}
          />
        </div>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>

        <div className={`${styles.relatedPost} p-5`}>
          <h3 className="font24 fontWeight600 mb-3">Related Posts</h3>
          <Row>
            {blogs.map((blog, index) => (
              <Col md={4} className="mb-5" key={index}>
                <BlogCard key={index} blog={blog} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
