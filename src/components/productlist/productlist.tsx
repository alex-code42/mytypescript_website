export const products = [
  {
    name: "Luxury Bag",
    id: "680",
    price: 234,
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Woman', href: '#' },
      { id: 2, name: 'Bags', href: '#' },
    ],
    images: [
      {
        src: '/products/bag1.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: '/products/bag1.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: '/products/bag3.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: '/products/bag4.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'Blue', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Brown', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Orange', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      { name: 'DarkRed', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
      
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      
    ],
    description:
      'Luxury bags are high-end fashion accessories that are known for their exceptional craftsmanship, quality, and style. These bags are often made by renowned fashion houses and designers, using premium materials such as fine leather, exotic skins, and high-quality fabrics. Luxury bags are characterized by their exquisite design, attention to detail, and often feature iconic logos or distinctive hardware.',
    highlights: [
      'They come in various styles',
      'Including totes, clutches, shoulder bags,',
      'These bags are not only functional',
      'Status symbols',
    ],
    details:
      ' Luxury bags are a popular choice among those who appreciate the finer things in life and are willing to invest in a timeless accessory',
  },
    {
      name: 'Basic Tee 6-Pack',
      id: 234,
      price: '$192',
      href: '#',
      breadcrumbs: [
        { id: 679, name: 'Men', href: '#' },
        { id: 6791, name: 'Clothing', href: '#' },
      ],
      images: [
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
          alt: 'Model wearing plain black basic tee.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
          alt: 'Model wearing plain gray basic tee.',
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.',
        },
      ],
      colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
      ],
      description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
      highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
      ],
      details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },
    {
      name: 'Nike Sport Shoe',
      id: "673",
      price: 345,
      href: '#',
      breadcrumbs: [
        { id: 673, name: 'Men', href: '#' },
        { id: 6731, name: 'Clothing', href: '#' },
      ],
      images: [
        {
          src: '/products/shoe2.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
          src: '/products/shoe1.jpg',
          alt: 'Model wearing plain black basic tee.',
        },
        {
          src: '/products/shoe3.jpg',
          alt: 'Model wearing plain gray basic tee.',
        },
        {
          src: '/products/shoe4.jpg',
          alt: 'Model wearing plain white basic tee.',
        },
      ],
      colors: [
        { name: 'Red', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      ],
      sizes: [
        { name: '35', inStock: false },
        { name: '36', inStock: true },
        { name: '37', inStock: true },
        { name: '40', inStock: true },
        { name: '41', inStock: false },
        { name: '42', inStock: true },
        { name: '43', inStock: true },
        { name: '44', inStock: true },
      ],
      description:
        'Nike running shoes are high-performance athletic footwear designed for running and sports activities.',
      highlights: [
        'Crafted with cutting-edge technology',
        'Materials to provide superior comfort',
        'Offers a wide range of running shoes',
      ],
      details:
        'These shoes often feature features like responsive cushioning, breathable uppers, and durable outsoles to enhance the runners experience.',
    },
    // More products...
  ]

