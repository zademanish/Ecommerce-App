// product.js:

const products = [
  {
    name: "Classic Oxford Button-Down Shirt",
    description:
      "This classic Oxford shirt is tailored for a polished yet casual look. Crafted from high-quality cotton, it features a button-down collar and a comfortable, slightly relaxed fit. Perfect for both formal and casual occasions, it comes with long sleeves, a button placket, and a yoke at the back. The shirt is finished with a gently rounded hem and adjustable button cuffs.",
    price: 39.99,
    discountPrice: 34.99,
    countInStock: 20,
    sku: "OX-SH-001",
    category: "Top Wear",
    brand: "Urban Threads",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Yellow"],
    collections: "Business Casual",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/k/b/h/44-asaeosh1464-arrow-sport-original-imah4svtzgnekzyg.jpeg",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/e/r/m/44-asaeosh1464-arrow-sport-original-imah4svtyvczgtfe.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
      {
        url:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/a/4/h/44-asaeosh1464-arrow-sport-original-imah4svt4wvzzmf2.jpeg",
        altText:"Classic Oxford Button-Down Shirt Front View"
      },
      {
        url:"https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/2/v/44-asaeosh1464-arrow-sport-original-imah4svt48fg35yw.jpeg",
        altText:"Classic Oxford Button-Down Shirt Front View"
      }
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Slim-Fit Stretch Shirt",
    description:
      "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 35,
    sku: "SLIM-SH-002",
    category: "Top Wear",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy Blue", "Burgundy"],
    collections: "Formal Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/v/3/q/l-ue-2201-apuesto-original-imah7m6y7qmgqver.jpeg",
        altText: "Slim-Fit Stretch Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/b/d/l-ue-2201-apuesto-original-imah7m6ywjcx5aty.jpeg",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/v/h/y/l-ue-2201-apuesto-original-imah7m6y6fdcqtsc.jpeg",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/5/g/l/l-ue-2201-apuesto-original-imah7m6ypg797udp.jpeg",
        altText: "Slim-Fit Stretch Shirt Back View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Casual Denim Shirt",
    description:
      "This casual denim shirt is made from lightweight cotton denim. It features a regular fit, snap buttons, and a straight hem. With Western-inspired details, this shirt is perfect for layering or wearing solo.",
    price: 49.99,
    discountPrice: 44.99,
    countInStock: 15,
    sku: "CAS-DEN-003",
    category: "Top Wear",
    brand: "Street Style",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Light Blue", "Dark Wash"],
    collections: "Casual Wear",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/1/p/xl-d-denim-greenflair-original-imagr2h5bgfgtmry.jpeg?q=70&crop=false",
        altText: "Classic Oxford Button-Down Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/p/w/k/xl-d-denim-greenflair-original-imagr2h5jpasdxpj.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/y/e/m/xl-d-denim-greenflair-original-imagr2h563jz4zbz.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/f/u/o/xl-d-denim-greenflair-original-imagr2h5cyfm3tgd.jpeg",
        altText: "Classic Oxford Button-Down Shirt Back View",
      },
    ],
    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Printed Resort Shirt",
    description:
      "Designed for summer, this printed resort shirt is perfect for vacation or weekend getaways. It features a relaxed fit, short sleeves, and a camp collar. The all-over tropical print adds a playful vibe.",
    price: 29.99,
    discountPrice: 22.99,
    countInStock: 25,
    sku: "PRNT-RES-004",
    category: "Top Wear",
    brand: "Beach Breeze",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Tropical Print", "Navy Palms"],
    collections: "Vacation Wear",
    material: "Viscose",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/1/f/t/m-men-slim-fit-printed-spread-collar-casual-shirt-sys-bella-original-imah9fyjexqmymkx.jpeg",
        altText: "Printed Resort Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/9/d/u/m-men-slim-fit-printed-spread-collar-casual-shirt-sys-bella-original-imah9fyjnz6sfj9x.jpeg",
        altText: "Printed Resort Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/q/9/p/m-men-slim-fit-printed-spread-collar-casual-shirt-sys-bella-original-imah9fyjs2qbuuzp.jpeg",
        altText: "Printed Resort Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/k/r/n/m-men-slim-fit-printed-spread-collar-casual-shirt-sys-bella-original-imah9fyjw4zffnfh.jpeg",
        altText: "Printed Resort Shirt Back View",
      },
    ],
    rating: 4.4,
    numReviews: 10,
  },
  {
    name: "Slim-Fit Easy-Iron Shirt",
    description:
      "A slim-fit, easy-iron shirt in woven cotton fabric with a fitted silhouette. Features a turn-down collar, classic button placket, and a yoke at the back. Long sleeves and adjustable button cuffs with a rounded hem.",
    price: 34.99,
    discountPrice: 29.99,
    countInStock: 30,
    sku: "SLIM-EIR-005",
    category: "Top Wear",
    brand: "Urban Chic",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Gray"],
    collections: "Business Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kjym9ow0/shirt/z/m/i/40-12001-brown-english-navy-original-imafzenrhm4a4wwj.jpeg",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kjym9ow0/shirt/h/1/m/40-12001-brown-english-navy-original-imafzenrper9cgyj.jpeg",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kjym9ow0/shirt/h/k/r/42-12001-brown-english-navy-original-imafzenrp6hytkbq.jpeg",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kjym9ow0/shirt/9/q/l/42-12001-brown-english-navy-original-imafzenrhhqkazxy.jpeg?",
        altText: "Slim-Fit Easy-Iron Shirt Front View",
      },
    ],
    rating: 5,
    numReviews: 14,
  },
  {
    name: "Polo T-Shirt with Ribbed Collar",
    description:
      "A wardrobe classic, this polo t-shirt features a ribbed collar and cuffs. Made from 100% cotton, it offers breathability and comfort throughout the day. Tailored in a slim fit with a button placket at the neckline.",
    price: 24.99,
    discountPrice: 19.99,
    countInStock: 50,
    sku: "POLO-TSH-006",
    category: "Top Wear",
    brand: "Polo Classics",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black","White", "Navy", "Red"],
    collections: "Casual Wear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/h/w/l-151-polopocket-black-l-wewok-original-imah75mtyvgnhhke.jpeg",
        altText: "Polo T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/h/w/l-151-polopocket-black-l-wewok-original-imah75mtyvgnhhke.jpeg",
        altText: "Polo T-Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/4/y/w/s-t74-bl-d1-patois-original-imah84nptgk5zhdq.jpeg",
        altText: "Polo T-Shirt Back View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/x/7/l-mzpoloblk-mzkhan-original-imah42f2dfktpgxe.jpeg",
        altText: "Polo T-Shirt Back View",
      },
    ],
    rating: 4.3,
    numReviews: 22,
  },
  {
    name: "Oversized Graphic T-Shirt",
    description:
      "An oversized graphic t-shirt that combines comfort with street style. Featuring bold prints across the chest, this relaxed fit tee offers a modern vibe, perfect for pairing with jeans or joggers.",
    price: 19.99,
    discountPrice: 15.99,
    countInStock: 40,
    sku: "OVS-GRF-007",
    category: "Top Wear",
    brand: "Street Vibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue","Black", "Gray"],
    collections: "Streetwear",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/l/s/x/m-airforce-hand-half-funkari-original-imah9guzajjetzhx.jpeg",
        altText: "Oversized Graphic T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/q/c/3/m-airforce-hand-half-funkari-original-imah9guz2qseayzt.jpeg",
        altText: "Oversized Graphic T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/8/1/c/m-airforce-hand-half-funkari-original-imah9guzscq8vzrj.jpeg",
        altText: "Oversized Graphic T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/t/d/i/l-sky-hand-ruggstar-original-imah38bhteszwhqn.jpeg",
        altText: "Oversized Graphic T-Shirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Regular-Fit Henley Shirt",
    description:
      "A modern take on the classic Henley shirt, this regular-fit style features a buttoned placket and ribbed cuffs. Made from a soft cotton blend with a touch of elastane for stretch.",
    price: 22.99,
    discountPrice: 18.99,
    countInStock: 35,
    sku: "REG-HEN-008",
    category: "Top Wear",
    brand: "Heritage Wear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black","Red","Blue"],
    collections: "Casual Wear",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/d/l/p/m-10-button-black-m-psdesign-original-imagteze2ysec6qc.jpeg",
        altText: "Regular-Fit Henley Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/1/e/e/m-10-button-blue-m-vescor-original-imagtmthugyrfg7a.jpeg",
        altText: "Regular-Fit Henley Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/v/q/s/s-10button-maroon-s-psdesign-original-imagtgyznsfkyzfy.jpeg",
        altText: "Regular-Fit Henley Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/o/q/h/s-10button-maroon-s-psdesign-original-imagtgyzu6phbfsw.jpeg",
        altText: "Regular-Fit Henley Shirt Front View",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Long-Sleeve Thermal Tee",
    description:
      "Stay warm with this long-sleeve thermal tee, made from soft cotton with a waffle-knit texture. Ideal for layering in cooler months, the slim-fit design ensures a snug yet comfortable fit.",
    price: 27.99,
    discountPrice: 22.99,
    countInStock: 20,
    sku: "LST-THR-009",
    category: "Top Wear",
    brand: "Winter Basics",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Dark Green", "Navy"],
    collections: "Winter Essentials",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kj36ky80-0/thermal/7/m/e/90-amltrnst-alfa-original-imae9zvhzgqckhdu.jpeg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kj61gnk0-0/thermal/8/u/m/90-amltrnst-alfa-original-imae9zvhys2jhfkn.jpeg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kj7gwi80-0/thermal/h/f/w/100-amlavarnsetbrwn-alfa-original-imafytk3hpqqcuh2.jpeg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kj7gwi80-0/thermal/v/0/p/80-amlavarnsetnavy-alfa-original-imafytk2wj6ksfzv.jpeg",
        altText: "Long-Sleeve Thermal Tee Front View",
      },
    ],
    rating: 4.4,
    numReviews: 18,
  },
  {
    name: "V-Neck Classic T-Shirt",
    description:
      "A classic V-neck t-shirt for everyday wear. This regular-fit tee is made from breathable cotton and features a clean, simple design with a flattering V-neckline. Lightweight fabric and soft texture make it perfect for casual looks.",
    price: 14.99,
    discountPrice: 11.99,
    countInStock: 60,
    sku: "VNECK-CLS-010",
    category: "Top Wear",
    brand: "Everyday Comfort",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    collections: "Basics",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/s/p/c/m-t-shirt-hs-y-m-thenixon-original-imahfnjgqv2u4ccp.jpeg",
        altText: "V-Neck Classic T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/6/s/s/m-t-shirt-hs-y-m-thenixon-original-imahfnjgeqvgwzga.jpeg",
        altText: "V-Neck Classic T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/1/7/t/l-t-shirt-hs-y-m-thenixon-original-imahfnjgmg6eggyu.jpeg",
        altText: "V-Neck Classic T-Shirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/j/t/l-t-shirt-hs-y-m-thenixon-original-imahfnjg8egjrprs.jpeg",
        altText: "V-Neck Classic T-Shirt Front View",
      },
    ],
    rating: 4.7,
    numReviews: 28,
  },
  {
    name: "Slim Fit Joggers",
    description:
      "Slim-fit joggers with an elasticated drawstring waist. Features ribbed hems and side pockets. Ideal for casual outings or workouts.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-001",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Casual Collection",
    material: "Cotton Blend",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/t/t/n/32-lrtfcjgpy70323-louis-philippe-jeans-original-imaggmv44ffhgtmq.jpeg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/e/p/w/32-lrtfcjgpy70323-louis-philippe-jeans-original-imaggmv4e87vyhcn.jpeg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/416/416/xif0q/trouser/v/c/4/34-26705852-here-now-original-imah5yzaxaybbknp.jpeg",
        altText: "Slim Fit Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/6/z/a/34-26705852-here-now-original-imah5yza7nk873pm.jpeg",
        altText: "Slim Fit Joggers Front View",
      },
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Cargo Joggers",
    description:
      "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
    price: 45,
    discountPrice: 40,
    countInStock: 15,
    sku: "BW-002",
    category: "Bottom Wear",
    brand: "UrbanStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/i/v/u/36-new-jogger-10-pockets-dark-green-motrex-original-imagzzhvjufbjzxm.jpeg",
        altText: "Cargo Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/f/5/f/36-new-jogger-10-pockets-dark-green-motrex-original-imagzzhvnt39dqc4.jpeg",
        altText: "Cargo Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/q/y/t/34-jogger-10-pockets-black-plus91-original-imagzrzz9gjczps6.jpeg",
        altText: "Cargo Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/r/b/w/34-jogger-10-pockets-black-plus91-original-imagzrzzcjwxmfrg.jpeg",
        altText: "Cargo Joggers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Tapered Sweatpants",
    description:
      "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
    price: 35,
    discountPrice: 30,
    countInStock: 25,
    sku: "BW-003",
    category: "Bottom Wear",
    brand: "ChillZone",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Charcoal", "Blue"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/g/5/u/l-new-track-pants-12-ficka-original-imah7y3cbehfyhrg.jpeg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/u/y/k/l-new-track-pants-12-ficka-original-imah7y3cyczjd6fj.jpeg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/k/c/z/xxl-new-track-pants-12-ficka-original-imah7y3cergtpadm.jpeg",
        altText: "Tapered Sweatpants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/i/f/x/xxl-new-track-pants-12-ficka-original-imah7y3cdhanzrwe.jpeg",
        altText: "Tapered Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 18,
  },
  {
    name: "Denim Jeans",
    description:
      "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
    price: 60,
    discountPrice: 50,
    countInStock: 30,
    sku: "BW-004",
    category: "Bottom Wear",
    brand: "DenimCo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Blue", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/0/r/q/34-panjean22-122-mrnblue-urbano-fashion-original-imagkrgm4uxqp3ky.jpeg",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/s/q/m/34-panjean22-122-mrnblue-urbano-fashion-original-imagkrgmfchtztb3.jpeg",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/f/h/1/34-panjean22-122-mrnblue-urbano-fashion-original-imagkrgmyjywec3t.jpeg",
        altText: "Denim Jeans Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/l/l/e/34-panjean22-122-mrnblue-urbano-fashion-original-imagkrgmh8saeywg.jpeg",
        altText: "Denim Jeans Front View",
      },
    ],
    rating: 4.6,
    numReviews: 22,
  },
  {
    name: "Chino Pants",
    description:
      "Slim-fit chino pants made from stretch cotton twill. Features a button closure and front and back pockets. Ideal for both casual and semi-formal wear.",
    price: 55,
    discountPrice: 48,
    countInStock: 40,
    sku: "BW-005",
    category: "Bottom Wear",
    brand: "CasualLook",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Navy", "Black"],
    collections: "Smart Casual Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/e/v/y/32-trs-mellow-gry-mf-ly-classic-polo-original-imah48z6tkwqn8p5.jpeg?q=70&crop=false",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/f/p/r/32-trs-mellow-gry-mf-ly-classic-polo-original-imah48z6hjgqfy3f.jpeg",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/e/v/y/32-trs-mellow-gry-mf-ly-classic-polo-original-imah48z6tkwqn8p5.jpeg?q=70&crop=false",
        altText: "Chino Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/e/v/y/32-trs-mellow-gry-mf-ly-classic-polo-original-imah48z6tkwqn8p5.jpeg?q=70&crop=false",
        altText: "Chino Pants Front View",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Track Pants",
    description:
      "Comfortable track pants with an elasticated waistband and tapered leg. Features side stripes for a sporty look. Ideal for athletic and casual wear.",
    price: 40,
    discountPrice: 35,
    countInStock: 20,
    sku: "BW-006",
    category: "Bottom Wear",
    brand: "SportX",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Red", "Blue"],
    collections: "Activewear Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/c/h/g/s-solid-gym-wear-track-pant-yazole-original-imah48xcnupdnpyz.jpeg",
        altText: "Track Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/z/f/p/s-solid-gym-wear-track-pant-yazole-original-imah48xcpx5hzzdp.jpeg",
        altText: "Track Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/w/w/d/m-solid-gym-wear-track-pant-yazole-original-imagzhqtzqgky4ax.jpeg",
        altText: "Track Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/5/c/q/s-solid-gym-wear-track-pant-yazole-original-imah48xcqcrkezsh.jpeg",
        altText: "Track Pants Front View",
      },
    ],
    rating: 4.2,
    numReviews: 17,
  },
  {
    name: "Slim Fit Trousers",
    description:
      "Tailored slim-fit trousers with belt loops and a hook-and-eye closure. Suitable for formal occasions or smart-casual wear.",
    price: 65,
    discountPrice: 55,
    countInStock: 15,
    sku: "BW-007",
    category: "Bottom Wear",
    brand: "ExecutiveStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Gray", "Black"],
    collections: "Office Wear",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/p/l/v/34-mendoublenew-tenit-original-imahynwzuqcjqkth.jpeg",
        altText: "Slim Fit Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/b/v/l/34-mendoublenew-tenit-original-imahynwzthpuuyng.jpeg",
        altText: "Slim Fit Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/m/u/s/32-mendoublenew-tenit-original-imahywphxvxahypq.jpeg",
        altText: "Slim Fit Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/f/f/3/32-mendoublenew-tenit-original-imahywphu6s35k84.jpeg",
        altText: "Slim Fit Trousers Front View",
      },
    ],
    rating: 4.7,
    numReviews: 10,
  },
  {
    name: "Cargo Pants",
    description:
      "Loose-fit cargo pants with multiple utility pockets. Features adjustable ankle cuffs and a drawstring waist for versatility and comfort.",
    price: 50,
    discountPrice: 45,
    countInStock: 25,
    sku: "BW-008",
    category: "Bottom Wear",
    brand: "StreetWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Brown", "Black"],
    collections: "Street Style Collection",
    material: "Cotton",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/e/0/z/s-bbgcargo-dp-p21-blive-original-imah3katyhsf85ax.jpeg",
        altText: "Cargo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/s/s/k/s-bbgcargo-dp-p21-blive-original-imah3katgwcvmekf.jpeg",
        altText: "Cargo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/7/i/w/30-01-jaar-jean-loose-blk-jaar-fashion-original-imahfay8xgpuykyr.jpeg",
        altText: "Cargo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/cargo/t/n/n/s-01-cargo-loose-black-nayak-fashion-original-imah543xg3rnrgvp.jpeg",
        altText: "Cargo Pants Front View",
      },
    ],
    rating: 4.5,
    numReviews: 13,
  },
  {
    name: "Relaxed Fit Sweatpants",
    description:
      "Relaxed-fit sweatpants made from soft fleece fabric. Features an elastic waist and adjustable drawstring for a custom fit.",
    price: 35,
    discountPrice: 30,
    countInStock: 35,
    sku: "BW-009",
    category: "Bottom Wear",
    brand: "LoungeWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy"],
    collections: "Lounge Collection",
    material: "Fleece",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/r/y/z/xxl-trackpant-01-green-uzarus-original-imah6ck7avfndzhz.jpeg",
        altText: "Relaxed Fit Sweatpants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/x/f/0/xxl-trackpant-01-green-uzarus-original-imah6ck7pzczhhkn.jpeg",
        altText: "Relaxed Fit Sweatpants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/o/u/4/xxl-trackpant-01-green-uzarus-original-imah6ck7rhk8b8qc.jpeg",
        altText: "Relaxed Fit Sweatpants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/o/l/f/xl-trackpant-01-bk-uzarus-original-imah6ck7cgbdkptr.jpeg",
        altText: "Relaxed Fit Sweatpants Front View",
      },
    ],
    rating: 4.3,
    numReviews: 14,
  },
  {
    name: "Formal Dress Pants",
    description:
      "Classic formal dress pants with a slim fit. Made from lightweight, wrinkle-resistant fabric for a polished look at the office or formal events.",
    price: 70,
    discountPrice: 60,
    countInStock: 20,
    sku: "BW-010",
    category: "Bottom Wear",
    brand: "ElegantStyle",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Men",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/z/2/8/30-aa-formal-pants-peter-richard-original-imaggrnjshqx5eqc.jpeg",
        altText: "Formal Dress Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/u/z/s/30-aa-formal-pants-peter-richard-original-imaggrnj7fwpsufn.jpeg",
         altText: "Formal Dress Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/z/k/a/30-aa-formal-pants-peter-richard-original-imaggrnjkhvdhhch.jpeg",
         altText: "Formal Dress Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/k/h/7/30-aa-formal-pants-peter-richard-original-imaggrnjethtd9ue.jpeg?q=70&crop=false",
         altText: "Formal Dress Pants Front View",
      },
     
    ],
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "High-Waist Skinny Jeans",
    description:
      "High-waist skinny jeans in stretch denim with a button and zip fly. Features a flattering fit that hugs your curves and enhances your silhouette.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-001",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark Blue", "Black", "Light Blue"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/y/p/c/28-mcaw23den98-30-389-miss-chase-original-imah757wfkpdqtp4.jpeg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/m/r/v/28-mcaw23den98-30-389-miss-chase-original-imah757wpfeghbgj.jpeg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/g/e/7/28-mcaw23den98-30-389-miss-chase-original-imah757wfczgdwde.jpeg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/f/e/1/30-a411-akacy-original-imah8pf3rjxggjpd.jpeg",
        altText: "High-Waist Skinny Jeans",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/g/z/d/30-a411-akacy-original-imah8pf3n7twp4jr.jpeg",
        altText: "High-Waist Skinny Jeans",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Wide-Leg Trousers",
    description:
      "Flowy, wide-leg trousers with a high waist and side pockets. Perfect for an elegant look that combines comfort and style.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "BW-W-002",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black", "White"],
    collections: "Formal Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/8/i/7/32-kttwomenspant471-kotty-original-imagx7j9uypfxxwp.jpeg",
        altText: "Wide-Leg Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/1/x/t/32-kttwomenspant471-kotty-original-imagx7j9cas4mhgc.jpeg",
        altText: "Cargo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/o/r/t/30-kttwomenspant474-kotty-original-imagx7j9s6hpdsr3.jpeg",
        altText: "Cargo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/a/o/n/30-kttwomenspant474-kotty-original-imagx7j9vzhhznmm.jpeg",
        altText: "Cargo Pants Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Stretch Leggings",
    description:
      "Soft, stretch leggings in a high-rise style. Perfect for lounging, working out, or casual wear, with a smooth fit that flatters your body.",
    price: 25,
    discountPrice: 20,
    countInStock: 40,
    sku: "BW-W-003",
    category: "Bottom Wear",
    brand: "ComfyFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy"],
    collections: "Activewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/legging/u/t/t/xl-1504-white-plus-twin-birds-original-imah936qr3vtjwcr.jpeg",
        altText: "Stretch Leggings Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/legging/t/n/v/xl-1504-white-plus-twin-birds-original-imah936qrqeur4hg.jpeg",
        altText: "Stretch Leggings Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/legging/x/e/i/s-1504-steel-grey-twin-birds-original-imah936qgufgs7az.jpeg",
        altText: "Stretch Leggings Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/legging/o/b/r/s-1504-steel-grey-twin-birds-original-imah936qpbgkhwya.jpeg",
        altText: "Stretch Leggings Front View",
      },
    ],
    rating: 4.5,
    numReviews: 30,
  },
  {
    name: "Pleated Midi Skirt",
    description:
      "Elegant pleated midi skirt with a high waistband and soft fabric that drapes beautifully. Ideal for both formal and casual occasions.",
    price: 55,
    discountPrice: 50,
    countInStock: 20,
    sku: "BW-W-004",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L"],
    colors: ["Pink", "Navy", "Black"],
    collections: "Spring Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/l4a7pu80/skirt/b/w/g/free-1-midi-plat-zwerlon-original-imagf7pjwnf4zjza.jpeg",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/l4a7pu80/skirt/3/4/i/free-1-midi-plat-zwerlon-original-imagf7pjszx5jpsz.jpeg",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/skirt/w/x/1/free-1-skrt-1003-zwerlon-original-imaggtn9mgaheasu.jpeg",
        altText: "Pleated Midi Skirt Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/skirt/m/s/l/free-1-skrt-1003-zwerlon-original-imaggtn9ygfcnhvf.jpeg",
        altText: "Pleated Midi Skirt Front View",
      },
    ],
    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Flared Palazzo Pants",
    description:
      "High-waist palazzo pants with a loose, flowing fit. Comfortable and stylish, making them perfect for casual outings or beach days.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "BW-W-005",
    category: "Bottom Wear",
    brand: "BreezyVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Beige", "Light Blue"],
    collections: "Summer Collection",
    material: "Linen Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/e/c/k/free-emz01952-emeros-original-imagnfk7vqk5vzmf.jpeg",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/6/j/c/free-emz01952-emeros-original-imagnfk7q57n5ftg.jpeg",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/x/a/y/free-emz01952-emeros-original-imagnfk7qhqacrd5.jpeg",
        altText: "Flared Palazzo Pants Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/t/h/c/free-emz01952-emeros-original-imagnfk7rz6cptu3.jpeg",
        altText: "Flared Palazzo Pants Front View",
      },
    ],
    rating: 4.4,
    numReviews: 22,
  },
  {
    name: "High-Rise Joggers",
    description:
      "Comfortable high-rise joggers with an elastic waistband and drawstring for a perfect fit. Great for lounging or working out.",
    price: 40,
    discountPrice: 35,
    countInStock: 30,
    sku: "BW-W-006",
    category: "Bottom Wear",
    brand: "ActiveWear",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Gray", "Pink"],
    collections: "Loungewear Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/j/7/w/32-kttladiesjeans2474-kotty-original-imahftyxggegehyp.jpeg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/l/3/p/32-kttladiesjeans2474-kotty-original-imahftyxmqm9ydzc.jpeg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/m/r/d/32-kttladiesjeans2474-kotty-original-imahftyxg8an9zhs.jpeg",
        altText: "High-Rise Joggers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/jean/m/c/r/32-kttladiesjeans2474-kotty-original-imahftyxwgfpwveg.jpeg",
        altText: "High-Rise Joggers Front View",
      },
    ],
    rating: 4.3,
    numReviews: 25,
  },
  {
    name: "Paperbag Waist Shorts",
    description:
      "Stylish paperbag waist shorts with a belted waist and wide legs. Perfect for summer outings and keeping cool in style.",
    price: 35,
    discountPrice: 30,
    countInStock: 20,
    sku: "BW-W-007",
    category: "Bottom Wear",
    brand: "SunnyStyle",
    sizes: ["S", "M", "L"],
    colors: ["White", "Khaki", "Blue"],
    collections: "Summer Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/416/416/xif0q/short/w/6/m/s-6273-darzi-original-imagnx36zvaqdgjf.jpeg",
        altText: "Paperbag Waist Shorts Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/short/d/9/x/s-6273-darzi-original-imagnx36vmf2g8by.jpeg",
        altText: "Paperbag Waist Shorts Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kqpj4i80/short/q/n/d/34-cl-wm-l0748-addyvero-original-imag4ntppagkczeg.jpeg",
        altText: "Paperbag Waist Shorts Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kqpj4i80/short/i/e/j/34-cl-wm-l0748-addyvero-original-imag4ntphghvqgwa.jpeg",
        altText: "Paperbag Waist Shorts Front View",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Stretch Denim Shorts",
    description:
      "Comfortable stretch denim shorts with a high-waisted fit and raw hem. Perfect for pairing with your favorite tops during warmer months.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "BW-W-008",
    category: "Bottom Wear",
    brand: "DenimStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "White"],
    collections: "Denim Collection",
    material: "Denim",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/short/m/k/i/28-mcss24den94-20-54-miss-chase-original-imah6y7tght97hse.jpeg",
        altText: "Stretch Denim Shorts Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/416/416/xif0q/short/e/x/6/32-mcss24den94-20-62-miss-chase-original-imah6y7tcjpxgfgb.jpeg",
        altText: "Stretch Denim Shorts Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/short/g/f/m/32-mcss24den94-20-62-miss-chase-original-imah6y7txjwzzdwg.jpeg",
        altText: "Stretch Denim Shorts Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/short/l/v/i/32-mcss24den94-20-62-miss-chase-original-imah6y7t7wqghh4y.jpeg",
        altText: "Stretch Denim Shorts Front View",
      },
    ],
    rating: 4.7,
    numReviews: 15,
  },
  {
    name: "Culottes",
    description:
      "Wide-leg culottes with a flattering high waist and cropped length. The perfect blend of comfort and style for any casual occasion.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "BW-W-009",
    category: "Bottom Wear",
    brand: "ChicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Olive"],
    collections: "Casual Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/juh9ksw0/trouser/y/2/r/xl-solidflame-laya-original-imafev4te65tsgy3.jpeg",
        altText: "Culottes Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/juh9ksw0/trouser/y/2/r/xl-solidflame-laya-original-imafev4te65tsgy3.jpeg",
        altText: "Culottes Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/jz5vjbk0/trouser/m/j/z/xl-reta-solid-black-laya-original-imafj83c5mdke2xw.jpeg",
        altText: "Culottes Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/jz5vjbk0/trouser/m/j/z/xl-reta-solid-black-laya-original-imafj83chd9t65gq.jpeg",
        altText: "Culottes Front View",
      },
    ],
    rating: 4.6,
    numReviews: 23,
  },
  {
    name: "Classic Pleated Trousers",
    description:
      "Timeless pleated trousers with a tailored fit. A wardrobe essential for workwear or formal occasions.",
    price: 70,
    discountPrice: 65,
    countInStock: 25,
    sku: "BW-W-010",
    category: "Bottom Wear",
    brand: "ElegantWear",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Pink", "Gray"],
    collections: "Formal Collection",
    material: "Wool Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/0/c/z/34-kttwomenspant472-kotty-original-imagx7j9ebhghe5u.jpeg",
        altText: "Classic Pleated Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/u/r/j/34-kttwomenspant472-kotty-original-imagx7j9cbtz4xww.jpeg",
        altText: "Classic Pleated Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/9/s/p/28-kttwomenspant475-kotty-original-imagx7j9rfugagqw.jpeg",
        altText: "Classic Pleated Trousers Front View",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/5/a/b/28-kttwomenspant475-kotty-original-imagx7j9hfmqz8zk.jpeg",
        altText: "Classic Pleated Trousers Front View",
      },
    ],
    rating: 4.8,
    numReviews: 20,
  },
  {
    name: "Knitted Cropped Top",
    description:
      "A stylish knitted cropped top with a flattering fitted silhouette. Perfect for pairing with high-waisted jeans or skirts for a casual look.",
    price: 40,
    discountPrice: 35,
    countInStock: 25,
    sku: "TW-W-001",
    category: "Top Wear",
    brand: "ChicKnit",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "White"],
    collections: "Knits Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/p/s/n/s-dg-hynk-crop-sando-ddaspration-original-imaghrgwynwxzczk.jpeg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/a/x/z/s-dg-hynk-crop-sando-ddaspration-original-imaghrgw3xfavfng.jpeg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kyg5zm80/top/e/1/i/s-173-black-aahwan-original-imagaz8eytjsefax.jpeg",
        altText: "Knitted Cropped Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/kyg5zm80/top/a/f/7/s-173-black-aahwan-original-imagaz8eykeqkmvc.jpeg",
        altText: "Knitted Cropped Top",
      },
    ],
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Boho Floral Blouse",
    description:
      "Flowy boho blouse with floral patterns, featuring a relaxed fit and balloon sleeves. Ideal for casual summer days.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-002",
    category: "Top Wear",
    brand: "BohoVibes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Pink"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/l/w/m/m-rbbl164-oomph-original-imah7uqhrfu3nzza.jpeg",
        altText: "Boho Floral Blouse",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/o/w/v/m-rbbl164-oomph-original-imah7uqhgn4ccj9m.jpeg",
        altText: "Boho Floral Blouse",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/2/r/1/m-rbbl164-oomph-original-imah7uqhemqyndbc.jpeg",
        altText: "Boho Floral Blouse",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/l/2/s/m-rbbl164-oomph-original-imah7uqhmvm3dxbs.jpeg",
        altText: "Boho Floral Blouse",
      },
    ],
    rating: 4.7,
    numReviews: 20,
  },
  {
    name: "Casual T-Shirt",
    description:
      "A soft, breathable casual t-shirt with a classic fit. Features a round neckline and short sleeves, perfect for everyday wear.",
    price: 25,
    discountPrice: 20,
    countInStock: 50,
    sku: "TW-W-003",
    category: "Top Wear",
    brand: "ComfyTees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    collections: "Essentials",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/b/p/l-31005357-here-now-original-imah8y57nfdaxbeg.jpeg",
        altText: "Casual T-Shirt",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/s/h/l-31005357-here-now-original-imah8y57rxh5cdnx.jpeg",
        altText: "Casual T-Shirt",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/h/b/r/l-31005357-here-now-original-imah8y57fa59ksxj.jpeg",
        altText: "Casual T-Shirt",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/o/4/u/l-31005357-here-now-original-imah8y57rp3nevpg.jpeg",
        altText: "Casual T-Shirt",
      },
    ],
    rating: 4.5,
    numReviews: 25,
  },
  {
    name: "Off-Shoulder Top",
    description:
      "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 35,
    sku: "TW-W-004",
    category: "Top Wear",
    brand: "Elegance",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Blue"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/f/o/m/s-1-flower-pattern-floral-top-dragon-sky-original-imah8kvbtqvzvbqf.jpeg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/8/j/s-1-flower-pattern-floral-top-dragon-sky-original-imah8kvbnsfkffve.jpeg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/x/v/s-1-flower-pattern-floral-top-dragon-sky-original-imah8kvbhgmdxcgz.jpeg",
        altText: "Off-Shoulder Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/i/j/s-1-flower-pattern-floral-top-dragon-sky-original-imah8kvbwftbcegc.jpeg",
        altText: "Off-Shoulder Top",
      },
    ],
    rating: 4.7,
    numReviews: 18,
  },
  {
    name: "Lace-Trimmed Cami Top",
    description:
      "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
    price: 35,
    discountPrice: 30,
    countInStock: 40,
    sku: "TW-W-005",
    category: "Top Wear",
    brand: "DelicateWear",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White"],
    collections: "Lingerie-Inspired",
    material: "Silk Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/b/k/9/xl-woolenn-top-blue-m-y-company-original-imagv7kpbchbxrps.jpeg",
        altText: "Lace-Trimmed Cami Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/y/c/a/xl-woolenn-top-blue-m-y-company-original-imagv7kppd8b9erg.jpeg",
        altText: "Lace-Trimmed Cami Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/b/n/k/m-woolenn-top-blue-m-y-company-original-imagv7kpas9wsnsx.jpeg",
        altText: "Lace-Trimmed Cami Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/o/t/m/m-woolenn-top-blue-m-y-company-original-imagv7kpdz37neta.jpeg",
        altText: "Lace-Trimmed Cami Top",
      },
    ],
    rating: 4.8,
    numReviews: 22,
  },
  {
    name: "Graphic Print Tee",
    description:
      "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
    price: 30,
    discountPrice: 25,
    countInStock: 45,
    sku: "TW-W-006",
    category: "Top Wear",
    brand: "StreetStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black"],
    collections: "Urban Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/g/8/l-chai-premi-pd-clori-original-imah96gkhjmwzfy2.jpeg",
        altText: "Graphic Print Tee",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/t/u/p/s-chai-premi-pd-clori-original-imah95k2j8mh7gzb.jpeg",
        altText: "Graphic Print Tee",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/6/u/u/l-chai-premi-pd-clori-original-imah9aysrrnxwzgz.jpeg",
        altText: "Graphic Print Tee",
      },
      {
        url: "https://picsum.photos/500/500?random=https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/w/v/l/l-chai-premi-pd-clori-original-imah9aysqggffd58.jpeg",
        altText: "Graphic Print Tee",
      },
    ],
    rating: 4.6,
    numReviews: 30,
  },
  {
    name: "Ribbed Long-Sleeve Top",
    description:
      "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
    price: 55,
    discountPrice: 50,
    countInStock: 30,
    sku: "TW-W-007",
    category: "Top Wear",
    brand: "ComfortFit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray", "Pink", "Brown"],
    collections: "Fall Collection",
    material: "Cotton Blend",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/ki214sw0-0/top/7/l/w/m-black-rib-square-new-sightbomb-original-imafxwv568qx8fcw.jpeg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/ki214sw0-0/top/q/v/8/m-black-rib-square-new-sightbomb-original-imafxwv5g8jhhsb3.jpeg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/f/w/n/m-1-red-deep-neck-sightbomb-original-imahf2ggezkjnckz.jpeg",
        altText: "Ribbed Long-Sleeve Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/b/m/p/m-1-red-deep-neck-sightbomb-original-imahf2ggkam83xgz.jpeg",
        altText: "Ribbed Long-Sleeve Top",
      },
    ],
    rating: 4.7,
    numReviews: 26,
  },
  {
    name: "Ruffle-Sleeve Blouse",
    description:
      "A lightweight ruffle-sleeve blouse with a flattering fit. Perfect for a feminine touch to any outfit.",
    price: 45,
    discountPrice: 40,
    countInStock: 20,
    sku: "TW-W-008",
    category: "Top Wear",
    brand: "FeminineWear",
    sizes: ["S", "M", "L"],
    colors: ["White", "Navy", "Lavender"],
    collections: "Summer Collection",
    material: "Viscose",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/y/t/f/l-a-63-n-black-vamas-the-designer-blouses-original-imagwh5c2zrbxg4t.jpeg",
        altText: "Ruffle-Sleeve Blouse",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/g/4/j/l-a-63-n-black-vamas-the-designer-blouses-original-imagwh5csnvnpjuu.jpeg",
        altText: "Ruffle-Sleeve Blouse",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/m/s/5/l-a-63-n-red-vamas-the-designer-blouses-original-imagwh5curypctd8.jpeg",
        altText: "Ruffle-Sleeve Blouse",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/blouse/z/r/o/l-a-63-n-red-vamas-the-designer-blouses-original-imagwh5crgusbbsh.jpeg",
        altText: "Ruffle-Sleeve Blouse",
      },
    ],
    rating: 4.5,
    numReviews: 19,
  },
  {
    name: "Classic Button-Up Shirt",
    description:
      "A versatile button-up shirt that can be dressed up or down. Made from soft fabric with a tailored fit, it's perfect for both casual and formal occasions.",
    price: 60,
    discountPrice: 55,
    countInStock: 25,
    sku: "TW-W-009",
    category: "Top Wear",
    brand: "ClassicStyle",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Black"],
    collections: "Office Collection",
    material: "Cotton",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/w/d/k/s-1-110146292open-air-annabelle-by-pantaloons-original-imagyzs6tuphpemk.jpeg",
        altText: "Classic Button-Up Shirt",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/r/w/c/s-1-110146292open-air-annabelle-by-pantaloons-original-imagyzs6wczzdz6z.jpeg",
        altText: "Classic Button-Up Shirt",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/n/d/j/s-1-110146292open-air-annabelle-by-pantaloons-original-imagyzs6cdgxpwbg.jpeg",
        altText: "Classic Button-Up Shirt",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/l/w/d/s-1-110146292open-air-annabelle-by-pantaloons-original-imagyzs6fwfhkshr.jpeg",
        altText: "Classic Button-Up Shirt",
      },
    ],
    rating: 4.8,
    numReviews: 25,
  },
  {
    name: "V-Neck Wrap Top",
    description:
      "A chic v-neck wrap top with a tie waist. Its elegant style makes it perfect for both casual and semi-formal occasions.",
    price: 50,
    discountPrice: 45,
    countInStock: 30,
    sku: "TW-W-010",
    category: "Top Wear",
    brand: "ChicWrap",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Black", "White"],
    collections: "Evening Collection",
    material: "Polyester",
    gender: "Women",
    images: [
      {
        url: "https://rukminim2.flixcart.com/image/832/832/l44hyfk0/top/n/i/s/m-ltp5251-goldennugget-pluss-original-imagf3bewxtuvbxp.jpeg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/l44hyfk0/top/t/e/s/m-ltp5251-goldennugget-pluss-original-imagf3be2jtzybrg.jpeg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/l44hyfk0/top/y/e/t/m-ltp5251-goldennugget-pluss-original-imagf3beysfuahwv.jpeg",
        altText: "V-Neck Wrap Top",
      },
      {
        url: "https://rukminim2.flixcart.com/image/832/832/l44hyfk0/top/y/c/3/m-ltp5251-goldennugget-pluss-original-imagf3bernbrgazt.jpeg",
        altText: "V-Neck Wrap Top",
      },
    ],
    rating: 4.7,
    numReviews: 22,
  },
];

module.exports = products;
