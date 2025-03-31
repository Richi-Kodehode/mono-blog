import { SanityAsset } from "@sanity/image-url/lib/types/types";

export interface simpleBlogCard {
  title: string;
  slug: string;
  currentSlug: string;
  smallDescription: string;
  titleImage: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: SanityAsset;
  titleImage: any;
}
