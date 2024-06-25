import Post from "@/components/templates/post/Post";

export default function Page({ params }) {
  return <Post id={params.id} />;
}
