export interface Item {
  id: string;
  image: string;
  color: color;
  sizes: string[];
  size: string;
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
  // Add any other missing properties
  imageAlt: string;
  href: string;
  
    
  };
    
  
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

export interface ProductDetails extends EntrySkeletonType, Item {
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

interface Colors {
  name: string;
  inStock: boolean;
  selectedClass: string;
  class: string;

}


interface Sizes {
  name: string;
  inStock: boolean;

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