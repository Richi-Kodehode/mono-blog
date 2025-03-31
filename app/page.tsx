import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function getData() {
  const query = `
 *[_type == 'blog'] | order(_createdAt desc){
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
}`;
  return await client.fetch(query);
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-lg h-[200px] object-cover"
          />
          <CardContent>
            <h2 className="text-2xl font-bold line-clamp-2  ">{post.title}</h2>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
