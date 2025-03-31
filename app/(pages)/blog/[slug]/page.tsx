import { fullBlog } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { PortableText } from "next-sanity";

export const revalidate = 60;

async function getData(slug: string) {
  const query = `
 *[_type == "blog" && slug.current == $slug]{
  "currentSlug": slug.current,
  title,
  content,
  titleImage
  }[0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data: fullBlog = await getData(slug);

  return (
    <div className="flex flex-col mt-5 gap-5">
      <div>
        <h2 className="text-2xl font-bold line-clamp-2  ">{data.title}</h2>
      </div>
      <div className="flex justify-center">
        <Image
          src={urlFor(data.titleImage).url()}
          alt="image"
          width={500}
          height={500}
          className="rounded-lg h-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-5">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
