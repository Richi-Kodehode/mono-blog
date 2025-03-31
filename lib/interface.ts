export interface simpleBlogCard {
  title: string;
  slug: string;
  currentSlug: string;
  smallDescription: string;
  titleImage: any;
}

export interface blogCard extends simpleBlogCard {
  content: string;
  currentSlug: string;
}
