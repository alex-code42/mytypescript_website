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
  