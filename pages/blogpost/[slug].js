import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/BlogPost.module.css";
import * as fs from "fs";

const inter = Inter({ subsets: ["latin"] });

//Step 1: find the file corresponding to the slug
//Step 2: Populate them inside the page
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }

  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <h2 className={styles.jj}>{blog && blog.title}</h2>
        <hr />
        {blog && (
          <div
            className={styles.jj}
            dangerouslySetInnerHTML={createMarkup(blog.description)}
          />
        )}
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  let allb = await fs.promises.readdir("blogdata");
  allb = allb.map((item) => {
    return { params: { slug: item.split(".")[0] } };
  });
  return {
    paths: allb,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // console.log(context.query)
  // const router = useRouter();
  const { slug } = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
