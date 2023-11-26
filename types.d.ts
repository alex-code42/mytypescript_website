export interface Item {
    id: string;
    name: string;
    price: number;
    images: { src: string; alt: string }[];
    color: { name: string };
    size: { name: string };
    imageAlt: string;
    href: string; // Add the href property
  }

  // Interfaces for the Contentful JSON
interface ContentfulSys {
  space: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  publishedVersion: number;
  publishedAt: string;
  firstPublishedAt: string;
  createdBy: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  updatedBy: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  publishedCounter: number;
  version: number;
  publishedBy: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
}

interface ContentfulProductField {
  id: string;
  name: string;
  type: string;
  localized: boolean;
  required: boolean;
  validations: any[]; 
  disabled: boolean;
  omitted: boolean;
  items?: {
    type: string;
    validations: any[]; 
    linkType: string;
  };
}

export interface ContentfulProduct {
  name: string;
  description: string;
  displayField: string;
  fields: ContentfulProductField[];
  sys: ContentfulSys;
}


interface Field {
  productName: string;
  price: number;
  slug: string;
  images: Array<any>;
  colors: Array<string>;
  sizes: Array<string>;
  shortDescription: string;
  highlights: Array<string>;
  details: string;
  }

// Usage example
const product: ContentfulProduct = {
  name: "Product",
  description: "Product for Typescript Onlineshop",
  displayField: "productName",
  fields: [
    {
      id: "productName",
      name: "Product Name",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
  sys: {
  },
};

