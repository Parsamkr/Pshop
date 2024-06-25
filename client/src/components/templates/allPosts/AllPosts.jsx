"use client";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import React, { useEffect, useState } from "react";
import PostList from "./Parts/PostList";

export default function AllPosts({ slug, search }) {
  console.log(slug);
  console.log(search);

  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    const initialLoad = async () => {
      await fetchEventSource(
        "http://localhost:3000/post/?" +
          (slug ? `category=${slug}` : "") +
          (slug && search ? "&" : "") +
          (search ? `search=${search}` : ""),
        {
          method: "GET",
          headers: {
            Accept: "text/event-stream",
          },
          onopen(res) {
            if (res.status == 200) {
              // console.log("connected succsesfully ");
            } else if (
              res.status >= 400 &&
              res.status < 500 &&
              res.status !== 429
            ) {
              // console.log("Client side error ", res);
            }
          },
          onmessage(event) {
            // console.log("here we are");
            const parsedData = JSON.parse(event.data);
            setPosts((data) => [...data, parsedData]);
          },
          onclose() {
            // console.log("Connection closed by the server");
          },
        }
      );
    };
    if (Posts.length == 0) {
      initialLoad();
    }
  }, []);

  return <PostList Posts={Posts} />;
}
