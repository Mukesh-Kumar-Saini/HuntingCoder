import React, { useEffect } from "react";
import styles from "@/styles/Blog.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const inter = Inter({ subsets: ["latin"] });

//Step 1: Collect all the files from blogdata directory
//Step 2: Iterate throuh them and display them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };

  return (
    <div>
      <main className={`${styles.main} ${inter.className}`}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <h2>Popular Blogs</h2>
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug}>
                <h3 className={`blogItem ${styles.jj}`}>{blogItem.title}</h3>
                <p className={`blogItem ${styles.jjp}`}>
                  {blogItem.metadesc.substr(0, 200)}
                </p>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <button type="submit" className={styles.btn}>
                    Read More
                  </button>
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myfile));
  }
  return {
    props: { allBlogs, allCount },
  };
}

export default Blog;
