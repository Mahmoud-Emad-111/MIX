import smart_watch_3 from '../assets/SMART_WATCH/smart_watch_3.png';
import nike_blue_1 from '../assets/NIKE/nike-adapt-bb.png';
import iphone_14_pro_max from '../assets/PHONE/iphone_14.png'
import HP_gold from '../assets/HEAD_PHONE/hedphone_goldde.png';
import ps5 from '../assets/PS/ps5_red.png';
import smart_watch_balck from '../assets/SMART_WATCH/smart_watch_black.png';
import globe from '../assets/SECTION/globe-free-img.png';
import quality from '../assets/SECTION/quality-free-img.png';
import secure from '../assets/SECTION/lock-free-img.png';
import offers from '../assets/SECTION/tag-free-img.png';
import airbods1 from '../assets/HEAD_PHONE/Airbods1.png';
import laptop1 from '../assets/LAPTOP/Laptop1.png';
import laptop2 from '../assets/LAPTOP/laptop2.png';
import laptop3 from '../assets/LAPTOP/laptop_3.png';
import mouse_1 from '../assets/MOUSE/mouse_1.png';
import nike_hero from '../assets/NIKE/hero.png';
import xbox360 from '../assets/PS/xbox360.png';
import ps5_controller from '../assets/PS/ps5_controller_blue.png';
import var_ from '../assets/PS/var.png';
import head_phone_green from '../assets/HEAD_PHONE/headphone_green.png';
import iphone_13_1 from '../assets/PHONE/iphon13.png'
import smart_watch_mackup from '../assets/SMART_WATCH/smart_watch_iphone.png'
import nike_red from '../assets/NIKE/nike-air-red.png';
import nike_hiligt from '../assets/NIKE/hightlightimg.png';
import nike_white from '../assets/NIKE/product11.png';
import nike_snekrs from '../assets/NIKE/sneaker.png';
import classic_pace from '../assets/clothes/offer_banner_31.png';
import Leoie_Mens from '../assets/clothes/offer_banner_41.png';
import guess_watch from '../assets/SMART_WATCH/offer_banner_21.png';
const main_data={
    main_center:[
        {
            id: "0m0x4",
            title:'PlayStation 5 Console',
            img:ps5,
            background:' linear-gradient(161deg, rgba(32,32,32,1) 0%, rgba(0,0,0,1) 96%)',
            color_text:'white',
        },        
        {
            id: "0m0x2",
            title:'Smartwatch Fitness Tracker for iOS',
            img:smart_watch_balck,
            background:'black',
            color_text:'white',
            
        },
        {
            id: "0m0x1",
            img:smart_watch_3,
            title:'Smart Watches VRPEFIT',
            background:'linear-gradient(135deg, rgb(16, 16, 16) 22%, #ffbc00 99%)',
            color_text:'white',
            // linear-gradient(313deg, #cafac8 22%, #ffffff 99%);

        },  
        {
            id: "0m0x3",
            title:'Headphones ANC Stereo Headset',
            img:HP_gold,
            background:'linear-gradient(108deg, rgba(195,89,89,1) 0%, rgba(72,26,26,1) 59%, rgba(62,22,22,1) 100%)',
            color_text:'black',
        },
    ],
    main_right:[
        {
            id:'0m0r1',
            img:nike_blue_1,
            title:'Nike Addapt 2.0',
            price:'$200',
            rate:'4.5',
            background:'linear-gradient(180deg,#005dea 18.8%,#3b82f6e0 85.5%)',
            shadow:'rgb(59 130 246) 0px 10px 15px -3px',
        },
        {
            id:'0m0r2',
            img:iphone_14_pro_max,
            title:'iphone 14 pro max',
            price:'$1200',
            rate:'4.9',
            background:'black',
            shadow:'rgb(0 0 0) 0px 10px 15px -3px',

        }
    ]
};
const section_data=[
    {
        id:'0s0d1',
        img:globe,
        title:'Worldwide Shipping',
        text:'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        id:'0s0d2',
        img:quality,
        title:'Best Quality',
        text:'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        id:'0s0d3',
        img:offers,
        title:'Best Offers',
        text:'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
        id:'0s0d4',
        img:secure ,
        title:'Best Secure',
        text:'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    
];
const popular_items_data=[
    {
        id:'0p0i1',
        img:airbods1,
        text:'Wireless Earbuds,Ture Wireless',
        price:'30$',
        rate:'4.9',
    },
    {
        id:'0p0i2',
        img:laptop2,
        text:'ASUS TUF F15 Gaming Laptop',
        price:'614$',
        rate:'4.6',

    },
    {
        id:'0p0i3',
        img:laptop3,
        text:'ASUS ZenBook Duo 14 UX482',
        price:'1,189$',
        rate:'4.8',
    
    },
    {
        id:'0p0i4',
        img:mouse_1,
        text:'ASUS ROG X Gaming Mouse',
        price:'129$',
        rate:'5+',

    },

    {
        id:'0p0i5',
        img:nike_hero,
        text:'Nike Air MEN Running Shoes',
        price:'150$',
        rate:'3.7',
        
    },
    {
        id:'0p0i6',
        img:xbox360,
        text:'Xbox Series 360 X 1TB Black',
        price:'600$',
        rate:'4.8',
        
    },
    {
        id:'0p0i7',
        img:ps5_controller,
        text:'PlayStation Wireless Controller',
        price:'100$',
        rate:'4.9',
        
    },
    {
        id:'0p0i8',
        img:var_,
        text:'Meta Quest Virtual Reality ' ,
        price:'250$',
        rate:'5+',
        
    },
];
const Top_rate_data=[
    {
        id:'0t0r1',
        img:head_phone_green,
        title:'Turtle Beach Amplified Gaming Headset',
        rate:'4.3',
        price:'100$',
    },

    {
        id:'0t0r2',
        img:laptop1,
        title:'ASUS VivoBook Business Laptop',
        rate:'4.1',
        price:'436$',
    },
    {
        id:'0t0r3',
        img:nike_hero,
        title:'Nike Air MEN Running Shoes',
        price:'150$',
        rate:'3.7',
    },
    {
        id:'0t0r4',
        img:smart_watch_mackup,
        title:'Smart Watch with Phone Function, Make/Answer',
        rate:'4.5',
        price:'49$',
    },
    {
        id:'0t0r5',
        img:nike_red,
        title:'Nike Addapt BB Rose',
        rate:'4.6',
        price:'149$',
    },    
    {
        id:'0t0r6',
        img:nike_hiligt,
        title:'Nike Adapt BB Pro',
        rate:'4.8',
        price:'151$',
    },
    {
        id:'0t0r7',
        img:nike_white,
        title:'Nike Air Black Max',
        rate:'5+',
        price:'150$',
    },
    {
        id:'0t0r8',
        img:nike_snekrs,
        title:'NIKE SNEAKERS AIR LANCING',
        rate:'5+',
        price:'165$',
    },
];

const popular_sales_data=[
    {
        id:'0p0s1',
        img:classic_pace,
        title:'CLASSIC PACE LONGSLEEVE',
        sale:'40%',

    },
    {
        id:'0p0s2',
        img:Leoie_Mens,
        title:'Leoie Mens Casual Long Sleeve',
        sale:'50%',
    },
    {
        id:'0p0s3',
        img:guess_watch,
        title:'GUESS Womens Quartz Stainless',
        sale:'20%',
    },

];
const deal_screen_data=[
    {
        id:'0d0s1',
        img:iphone_14_pro_max,
        title:'iphone 14 pro max',
        price:'$1200',
        discound:'$1300',
    },
    {
        id:'0d0s2',
        img:nike_white,
        title:'Nike Air Black Max',
        price:'$200',
        discound:'$210',
    }
];



export {main_data,section_data,popular_items_data,Top_rate_data,popular_sales_data,deal_screen_data};