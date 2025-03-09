import { TbTruckDelivery } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import { FaRegFaceGrinHearts } from "react-icons/fa6";

export const StaticDeliveryCardData = [
    { icon: TbTruckDelivery, title: 'Free Shipping Island wide', subTitle: 'Free delivery to your doorstep' },
    { icon: FaExchangeAlt, title: 'Returns And Exchange', subTitle: 'We do exchanges within 7 days!' },
    { icon: FaRegFaceGrinHearts, title: 'Guaranteed Comfort, Quality', subTitle: 'Wear confidence. Made to fit you' }
];


import p1 from '/images/products/p1.webp'
import p2 from '/images/products/p2.webp'
import p3 from '/images/products/p3.webp'
import p4 from '/images/products/p4.webp'
import p5 from '/images/products/p5.webp'
import p6 from '/images/products/p6.webp'
import p7 from '/images/products/p7.webp'
import p8 from '/images/products/p8.webp'
import p9 from '/images/products/p9.webp'
import p10 from '/images/products/p10.webp'

export const PopularProductsData = [
    { id: 1, image: p1, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 2, image: p2, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 3, image: p3, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 4, image: p4, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 5, image: p5, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 6, image: p6, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 7, image: p7, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 8, image: p8, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 9, image: p9, title: 'Comfort Fit Crew Neck T-shirt' },
    { id: 10, image: p10, title: 'Comfort Fit Crew Neck T-shirt' },
]


import gp1 from '/images/products/gp2.webp'
import gp2 from '/images/products/gp5.webp'
import gp3 from '/images/products/gp1.webp'

export const WomensCollection = {
    genre: "Women's",
    description: "You can't resist em'!",
    coverImage: gp1,
    latestProducts: [
        {
            id: 1,
            name: 'Minimalistic printed tee',
            description: 'Comfortable and versatile, prefect for daily wear',
            image: gp2
        },
        {
            id: 2,
            name: 'Everyday essential tee',
            description: 'Snazzy and Hip! Cool to the Core! Fashionable and Funky!',
            image: gp3
        }
    ]
}

import bp1 from '/images/products/bp1.webp'
import bp2 from '/images/products/bp2.webp'
import bp3 from '/images/products/bp3.webp'

export const MensCollection = {
    genre: "Men's",
    description: "You can't resist em'!",
    coverImage: bp1,
    latestProducts: [
        {
            id: 1,
            name: 'Minimalistic printed tee',
            description: 'Comfortable and versatile, prefect for daily wear',
            image: bp2
        },
        {
            id: 2,
            name: 'Everyday essential tee',
            description: 'Snazzy and Hip! Cool to the Core! Fashionable and Funky!',
            image: bp3
        }
    ]
}