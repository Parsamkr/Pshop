"use client";
import Posts from "@/components/templates/allPosts/AllPosts";
import { useSearchParams } from "next/navigation";

export default function Page({ params }) {
  const searchParam = useSearchParams();
  var search = searchParam.get("q");

  return <Posts slug={params.slug} search={search} />;
}
