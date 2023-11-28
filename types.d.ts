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

export interface ProductDetails extends EntrySkeletonType {
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
    productName: string;
    images: Image[];
    price: number;
    shortDescription: string;
    details: RichTextContent;
    hightlights: string[];
    sizes: string[];
    colors: string[];
    
  };
}


interface ImageDetails {
  size: number;
  image: {
    width: number;
    height: number;
  };
}

interface ImageFile {
  url: string;
  details: ImageDetails;
  fileName: string;
  contentType: string;
}

interface ImageFields {
  title: string;
  description: string;
  file: ImageFile;
}

interface Image {
  metadata: ImageMetadata;
  sys: ImageSys;
  fields: ImageFields;
}