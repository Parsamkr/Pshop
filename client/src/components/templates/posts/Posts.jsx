"use client";
import LogOutApi from "@/api/credentils/LogOutApi";
import whoAmI from "@/api/credentils/whoAmI";
import React from "react";
export default function Posts() {
  return (
    <div>
      Posts
      <div
        onClick={() => whoAmI()}
        style={{ padding: "20px", background: "red" }}
      >
        {" "}
        whoami{" "}
      </div>
      <div
        onClick={() => LogOutApi()}
        style={{ padding: "20px", background: "red" }}
      >
        {" "}
        logout{" "}
      </div>
    </div>
  );
}
