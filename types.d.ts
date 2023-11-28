export interface Item {
    id: string;
    productName: string;
    price: number;
    image: string;
    color: { name: string };
    size: { name: string };
    imageAlt: string;
    href: string; // Add the href property
  }
  
  interface EntrySkeletonType {
    contentTypeId: string;
}



export interface ContentfulText {
  data: {};
  content: ParagraphNode[];
  nodeType: "document";
  sys: {
    id: string;
  }
}


export interface BlogPost extends EntrySkeletonType {
  metadata: {
    tags: [];
  };
  sys: AssetSys;
  fields: {
    title: string;
    subtitle: string;
    slug: string;
    titleImage: Asset;
    description: RichTextContent;
    conclusion: RichTextContent;
    comments: string;
    moreImages: Asset[];
  };
}
export interface SmallBlogPost{
  metadata: {
    tags: [];
  };
  sys: AssetSys;
  fields: {
    title: string;
    subtitle: string;
    slug: string;
    titleImage: Asset;

  };
  
}