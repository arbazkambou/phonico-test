import BlogCategoryModel from "./BlogCategoryModel";

type BlogModel = {
    id: string
    slug: string,
    name:string,
    content:string,
    sub_content:string,
    image:string,
    keywords:string,
    created_at_diff_for_humans:string,
    created_at:string,
    blog_category:BlogCategoryModel
}

export default BlogModel;