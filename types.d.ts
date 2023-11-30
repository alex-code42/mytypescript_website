export interface Item {
  id: string;
  image: string;
  color: color;
  sizes: string[];
  chosenSize: string;
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
    specialStory: string
    secondStory: string
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


export interface Sizes {
  size: string;
  // inStock: boolean;

}

export interface chosenSize {
size: string;
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

interface Params {
  [key: string]: string;
  slug: string;
}