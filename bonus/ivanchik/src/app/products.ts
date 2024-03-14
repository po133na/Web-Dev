export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Ice Latte',
      price: 5000,
      description: 
      'Good for Cool Days',
      imageUrl: 'https://www.pumpkinnspice.com/wp-content/uploads/2022/07/IMG_1386.jpg',
      category: 1
    },
    {
      id: 2,
      name: 'Cappuchino',
      price: 4900,
      description: 
      'Best Choice for Cold Days',
      imageUrl: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino',
      category: 1
    },
    {
      id: 3,
      name: 'Americano',
      price: 10329,
      description: 
      'Only for Perverts',
      imageUrl: 'https://www.foodandwine.com/thmb/9JyfZPcxlV9ubEeuSznhO-M4q0w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Americano-FT-BLOG0523-b8e18cc340574cc9bed536cceeec7082.jpg',
      category: 1
    },
    {
      id: 4,
      name: 'Cinnabon',
      price: 500,
      description: 
      'Smacky',
      imageUrl: 'https://cinnabon.uk/cdn/shop/products/ClassicCinnabon2000x2000pxs_1445x.jpg?v=1675674021',
      category: 2
    },
    {
      id: 5,
      name: 'Croissant',
      price: 5030,
      description: 
      'It is better when warmed',
      imageUrl: 'https://bakefromscratch.com/wp-content/uploads/2016/01/Croissant701SWSweb_2web.jpg',
      category: 2
    },
    {
      id: 6,
      name: 'Macaron',
      price: 50000,
      description: 
      'The Best',
      imageUrl: 'https://sugarspunrun.com/wp-content/uploads/2023/01/French-Macaron-Recipe-5-of-6.jpg',
      category: 2
    },
    {
      id: 7,
      name: 'Caesar Salad',
      price: 3000,
      description: 
      'If you are hungry',
      imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2016/05/Caesar-Salad_7-SQ.jpg',
      category: 2
    },
    {
      id: 8,
      name: 'Jelly',
      price: 7027,
      description: 
      'Tastes Like Jelly',
      imageUrl: 'https://www.comptoir-irlandais.com/26063/chivers-strawberry-jelly.jpg',
      category: 2
    },
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */