export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    link: string;
    imageUrl: string;
    likes: number;
    category: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro',
      price: 568990,
      description: 
      'A phone that girls need to take the best photos ever',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=preview-large',
      category: 2
    },
    {
      id: 2,
      name: 'Dyson HS05 Airwrap Complete Long Styler 1300 W',
      price: 268000,
      description: 'The baddest Hair Essential.',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/dyson-hs05-airwrap-complete-long-stailer-1300-w-104498649/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hd9/82802441289758.jpg?format=preview-large',
      category: 3
    },
    {
      id: 3,
      name: 'Charlotte Tilbury Blush And Glow Collection',
      price: 32180,
      description: 'Shine bright like a Diamond! (especially on the one of those parties)',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/charlotte-tilbury-blush-and-glow-nabor-dekorativnoi-kosmetiki-dlja-zhenschin-113390208/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h01/h5b/83865709412382.jpg?format=preview-large',
      category: 4
    },
    {
      id: 4,
      name: 'Maison Francis Kurkdjian Baccarat Rouge 540 EDP 70 ml., unisex',
      price: 134000,
      description: 'No words. Just hear it.',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-parfjumernaja-voda-edp-70-ml-uniseks-17302860/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/ha9/85209578176542.png?format=preview-large',
      category: 1
    },
    {
      id: 5,
      name: 'Luni The Styler',
      price: 7000,
      description: 'This is a pink girly styler for those who cant afford buying a Dyson. Nevertheless, this Luni thing will handle your gorgeous hair as well as its big sister!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/luni-dlja-lokonov-ploika-115715372/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h1e/84887153573918.jpg?format=preview-large',
      category: 3
    },
    {
      id: 6,
      name: 'MONTALE Chocolate Greedy EDP 100 ml., unisex',
      price: 55000,
      description: 'Do you want people around you to think that you were born in the chocolate & cookies factory? Order Chocolate Greedy, spill it on yourself and check!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/montale-chocolate-greedy-parfjumernaja-voda-edp-100-ml-uniseks-17300734/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hca/ha8/63777205911582.jpg?format=preview-large',
      category: 1
    },
    {
      id: 7,
      name: 'Rhode Peptide Lip Treatment salted caramel Balm | 10 ml.',
      price: 14700,
      description: 'The baddest balm ever! Keeps your lips very soft and VERY hydrated! Also, it tastes like latte with salted caramel syrup <3',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/rhode-bal-zam-peptide-lip-treatment-salted-caramel-10-ml-112519613/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h54/82798277820446.jpg?format=preview-large',
      category: 4
    },
    {
      id: 8,
      name: 'Apple AirPods Max | Green',
      price: 276000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-zelenyi-101161547/?c=750000000',
      imageUrl: 'https://i5.walmartimages.com/asr/a6a218f6-3032-4f1a-8726-c50e9235a244.74514ebb89b2860eb81f396989e9b367.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      category: 2
    },
    {
      id: 9,
      name: 'Dior Lip Glow Oil Pink Lip Balm 007',
      price: 20890,
      description: 'Nowadays, Lip Glow Oil is a MUST in lip care.',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/dior-addict-lip-glow-oil-blesk-dlja-gub-rozovyi-prozrachnyi-015-106894426/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h45/ha4/83345807704094.jpg?format=preview-large',
      category: 4
    },
    {
      id: 10,
      name: 'Hempz Original body & hand cream | 500 ml.',
      price: 14990,
      description: 'Being made with using a cannabis seed, Hempz body cream keeps the position of the most moisturising cream ever!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/hempz-original-krem-dlja-tela-500-ml-101346239/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hea/hc1/64110916141086.jpg?format=preview-large',
      category: 3
    },
    {
      id: 11,
      name: 'Apple iPhone 15 Pro 256Gb ',
      price: 568990,
      description: 
      'A phone that girls need to take the best photos ever',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h88/hde/83559835697182.jpg?format=preview-large',
      category: 2
    },
    {
      id: 12,
      name: 'Apple AirPods Max | Black',
      price: 276000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=preview-large',
      category: 2
    },
    {
      id: 12,
      name: 'Apple Watch | Black',
      price: 220000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=preview-large',
      category: 2
    },
    {
      id: 13,
      name: 'Tom Ford | Lost Cherry',
      price: 215000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/tom-ford-lost-cherry-parfjumernaja-voda-edp-50-ml-uniseks-17302405/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h92/hf6/85209575030814.png?format=preview-large',
      category: 1
    },
    {
      id: 14,
      name: 'Zielinski & Rozen | Blend Vanilla',
      price: 215000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/zielinski-rozen-vanilla-blend-gel-300-ml-107082089/?c=750000000',
      imageUrl: 'https://fimgs.net/mdimg/perfume/375x500.65069.jpg',
      category: 1
    },
    {
      id: 15,
      name: 'Dior | jAdore',
      price: 215000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/dior-j-adore-parfjumernaja-voda-edp-50-ml-dlja-zhenschin-17301904/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h29/63815323385886.jpg?format=preview-large',
      category: 1
    },
    {
      id: 16,
      name: 'Fenty Beauty | Gloss Bomb',
      price: 14600,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/fenty-beauty-gloss-bomb-universal-lip-luminizer-blesk-dlja-gub-bezhevyi-sweet-mouth-101405472/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h9c/64033735475230.jpg?format=preview-large',
      category: 4
    },
    {
      id: 17,
      name: 'Dior | Pink Blush',
      price: 22800,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/dior-backstage-rosy-glow-rumjana-001-pink-112217688/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/h8a/82383084584990.jpg?format=preview-large',
      category: 4
    },
    {
      id: 18,
      name: 'Marc Jacobs | The Tote Bag',
      price: 238000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/sumka-tout-marc-jacobs-the-mini-tote-bag-natural-naja-kozha-chernyi-105508440/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h7d/64536763465758.jpg?format=preview-large',
      category: 3
    },
    {
      id: 19,
      name: 'Massage Chair | MX5',
      price: 482000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kaspi.kz/shop/p/massazhnoe-kreslo-x5-tehnoplanet-korichnevyi-4d-do-130-kg-8-programm-109703617/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h7a/79677660332062.jpg?format=preview-large',
      category: 3
    },
    {
      id: 20,
      name: 'Zeekr | X',
      price: 15000000,
      description: 'Wanna listen all the basses from your favourite song? AirPods on the Way rn! Moreover, the pods are GREEN so it is the trendy color!',
      likes: 0,
      link: 'https://kolesa.kz/cars/new/zeekr-x-1-pokolenie-crossover/',
      imageUrl: 'https://alakcell-photos-kl.kcdn.kz/kolesa-newautomodels/658a95d263f816788d549682/1/full.webp',
      category: 3
    },
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */