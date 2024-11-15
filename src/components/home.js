import React, { useEffect, useState } from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
import one from './images/OnePlus-7-Pro-Wallpapers.webp';
import two from './images/iphone.jpg';
import three from './images/Samsung_Galaxy_Z.jpg';
import four from './images/l3.webp';
import five from './images/i2.webp';
import six from './images/l1.webp';
import seven from './images/l4.jpg';
import eight from './images/l5.jpg';
import nine from './images/l6.avif';
import ten from './images/l7.jpg';

import mobilesImg from './images/mob.jpg';
import earphonesImg from './images/ear.jpg';
import watchesImg from './images/watch.jpg';
import accessoriesImg from './images/access.png';

import i2 from './images/14.webp';
import i3 from './images/i3.jpg';
import w1 from './images/ear1.jpg';
import w2 from './images/wat2.webp';
import p3 from './images/wat3.avif';
import e1 from './images/ear2.webp';
import e2 from './images/ear3.avif';
import e3 from './images/wat1.avif';
import s1 from './images/s1.avif';
import s2 from './images/s2.jpg';
import s3 from './images/s3.webp';
import s4 from './images/s4.avif';
import s5 from './images/s5.avif';
import s6 from './images/s6.jpg';
import lr1 from './images/i1.webp';
import lr2 from './images/lr3.jpg';

import lr3 from './images/lr5.webp';
import lr11 from './images/lr5.webp';
import lr4 from './images/lr4.jpg';
import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';

import c4 from './images/c4.jpg';
import c5 from './images/c5.jpg';
import c6 from './images/c6.avif';
import c7 from './images/c8.jpg';

import c10 from './images/c3.jpg';

import c11 from './images/c4.jpg';
import c12 from './images/c5.jpg';
import c13 from './images/c5.jpg';
import c14 from './images/c8.jpg';

import SolarSystem from './solarsystem';
import c15 from './images/c5.jpg';
import c16 from './images/c4.jpg';
import c17 from './images/l8.webp';
import c18 from './images/l9.webp';
import Chatbot from './chatbot';
import axios from 'axios';



const DiscountAnimationleft = () => (
  <div className="discount-animationleft">
    <div className="discount-content1">
    <h3>50% Off</h3>
    <p className='dis'>Iphones</p>
    </div>
  </div>
);
const DiscountAnimationleft1 = () => (
  <div className="discount-animationleft1">
    <div className="discount-content3">
    <h3>50% Off</h3>
    <p className='dis'>Samsung_Galaxy_Z</p>
    </div>
  </div>
);
const DiscountAnimationRight = () => (
  <div className="discount-animationright">
    <div className="discount-content2">
    <h3>50% Off</h3>
    <p className='dis'>Nikon Camera</p>
    </div>
  </div>
);
const DiscountAnimationRight1 = () => (
  <div className="discount-animationright1">
    <div className="discount-content4">
    <h3>50% Off</h3>
    <p className='dis'>Bed</p>
    </div>
  </div>
);

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div key={id} className="apicard">
         <Link to={`/cart/${id}`}></Link>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <p className="card-category">{category}</p>
        <div className="card-rating">
          <span className="rating">{rating.rate}</span>
          <span className="count">({rating.count})</span>
        </div>
      </div>
    </div>
  );
};


const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("error message", error);
      }
    };

    fetchData();
  }, []);
  const handleImageClick = async (imageId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/add-to-cart/', { imageId });
      console.log(response.data); // Handle the response to update the cart in your frontend
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  return (
    <div>
      <Container>
        <div>
          <Carousel className='B'  interval={1000}>
            <Carousel.Item className='A'>
              <img src={one} alt="plus" width="1200px" height="800" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={two} alt="to" width="1200px" height="800" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={three} alt="iphone" width="1200px" height="800"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={four} alt="lap1" width="1200px" height="800"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={five} alt="lap2" width="1200px" height="800"/>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="mt-4">
          <Link to="/mobiles">
            <Button variant="secondary" className="mr-2">
              <img src={mobilesImg} alt="Mobiles" width="50px" height="50px" />
              <h5>Mobiles</h5>
            </Button>
          </Link>
          <Link to="/earphones"> 
            <Button variant="danger" className="mr-3" >
              <img src={earphonesImg} alt="Earphones" width="50px" height="50px" />
              <h5>Earphones</h5>
            </Button>
          </Link>
          <Link to="/watches"> 
            <Button variant="warning" className="mr-5" >
              <img src={watchesImg} alt="Watches" width="50px" height="50px" />
              <h5>Watches</h5>
            </Button>
          </Link>
          <Link to="/accessories"> 
            <Button variant="success" className="mr-6">
              <img src={accessoriesImg} alt="Accessories" width="50px" height="50px" />
              <h5>Accessories</h5>
            </Button>
          </Link>
          <Chatbot />
        </div>
        <h2 className="mt-5">Best Collection</h2>
        {/* Add images for featured products */}
        <div className="featured-products">
       
<div className="product-frame">


<div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
</div>
<div className="api-images-loaded">
<div className="frame0">
  <div className="card0">
    <img src={i2} alt="ip2" className='card-img-top0' />
    <div className="card-body0">
      <h5 className="card-title0">Iphone 15 Pro Max</h5>
      <p className="card-text0">Stunning Display: Enjoy crystal-clear visuals on the [Size] Super Retina XDR display, offering vibrant colors and true blacks for an immersive viewing experience.

Powerful Performance: Equipped with the latest A-series chip, the iPhone [Model Name] delivers lightning-fast performance for seamless multitasking, gaming, and app usage.

Advanced Camera System: Capture stunning photos and videos with the [Number of Cameras] cameras, including an ultra-wide, wide, and telephoto lens. The Night mode feature ensures great shots even in low-light conditions.

All-Day Battery Life: With a long-lasting battery, the iPhone [Model Name] keeps up with your busy day, ensuring you stay connected without interruptions.

iOS [Version]: Experience the power of iOS [Version], offering intuitive navigation, advanced security features, and seamless integration with other Apple devices.

Design: The iPhone [Model Name] features a sleek, durable design crafted from premium materials, making it both stylish and sturdy.</p>
      <p className="card-text10">$400.00</p>
    </div>
  </div>

  <div className="card1">
    <img src={i3} alt="ip3" className='card-img-top1' />
    <div className="card-body1">
      <h5 className="card-title1">Iphone 15</h5>
      <p className="card-text1">Display: Enjoy a vibrant [Size] display that brings your content to life.

Performance: With the latest A-series chip, the iPhone [Model Name] offers fast and responsive performance for all your needs.

Camera: Capture your favorite moments with the [Number of Cameras] camera setup, including an ultra-wide lens for stunning photos.

Battery: The iPhone [Model Name] provides all-day battery life, so you can stay connected without worrying about running out of power.

iOS [Version]: Experience the user-friendly iOS [Version], which offers a smooth and intuitive interface.</p>
      <p className="card-text11">$300.00</p>
    </div>
  </div>
  <div className="card2">
    <img src={e3} alt="ip3" className='card-img-top2' />
    <div className="card-body2">
      <h5 className="card-title2">Samsung Watch</h5>
      <p className="card-text2">itness Tracking: Smart watches can track your daily activities, such as steps taken, calories burned, and even your heart rate, helping you stay active and healthy.

Notifications: Stay connected without constantly checking your phone. Smart watches can display notifications for calls, messages, emails, and other apps right on your wrist.

Customization: Personalize your smart watch with various watch faces and apps to suit your style and needs.

Voice Assistance: Access voice assistants like Siri, Google Assistant, or Alexa directly from your wrist, making it easy to get answers and control smart home devices.

Health Monitoring: Some smart watches offer advanced health monitoring features, such as ECG tracking, sleep tracking, and stress monitoring, providing valuable insights into your health and well-being.</p>
      <p className="card-text12">$30.00</p>
    </div>
  </div>
</div>
        <h2>Smart Gadgets</h2>
        <div className="frame1">
          <div className="card3">
            <img src={w1} alt="w1" className="card-img-top3" onClick={() => handleImageClick(1)}/>
            <div className="card-body3">
              <h5 className="card-title3">Oneplus Neckband</h5>
              <p className="card-text13">Price: $10.99</p>
            </div>
          </div>
          <div className="card4">
            <img src={w2} alt="w2" className="card-img-top4" />
            <div className="card-body4">
              <h5 className="card-title4">Fastrack Lime</h5>
              <p className="card-text14">Price: $19.99</p>
            </div>
          </div>
          <div className="card5">
            <img src={p3} alt="p3" className="card-img-top5" />
            <div className="card-body5">
              <h5 className="card-title5">Samsung Galaxy A20s</h5>
              <p className="card-text15">Price: $100.99</p>
            </div>
          </div>
        </div>
        <div className="frame2">
          <div className="card6">
            <img src={e1} alt="e1" className="card-img-top6" />
            <div className="card-body6">
              <h5 className="card-title6">Redmi Buds</h5>
              <p className="card-text16">Price: $20.99</p>
            </div>
          </div>
          <div className="card7">
            <img src={e2} alt="e2" className="card-img-top7" />
            <div className="card-body7">
              <h5 className="card-title7">Oneplus Powerbank</h5>
              <p className="card-text17">Price: $19.99</p>
            </div>
          </div>
          <div className="card8">
            <img src={lr11} alt="lrr11" className="card-img-top8" />
            <div className="card-body8">
              <h5 className="card-title8">Samsung_Galaxy_Z</h5>
              <p className="card-text18">Price: $200.99</p>
            </div>
          </div>
         
        </div>
      </div>
</div>
        <div>
          <Carousel className='D'  interval={1000}>
            <Carousel.Item className='C'>
              <img src={six} alt="l1"  width="1600px" height="800"/>
            </Carousel.Item>
            <Carousel.Item className='K'>
              <img src={seven} alt="l2" width="1600px" height="800" />
            </Carousel.Item>
            <Carousel.Item className='E'>
              <img src={eight} alt="l3" width="1600px" height="800"/>
            </Carousel.Item>
            <Carousel.Item className='F'>
              <img src={nine} alt="l4" width="1600px" height="800"/>
            </Carousel.Item>
            <Carousel.Item className='G'>
              <img src={ten} alt="l5" width="1500px" height="800"/>
            </Carousel.Item>
            
          </Carousel>
        </div>
        <div className="frame50" style={{ whiteSpace: 'nowrap', overflowX: 'auto', marginTop: '10px', width: '100%', maxWidth: '1500px' }}>
    <div className="card" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
        <img src={s1} alt="sho1" className="card-img-top50" />
        <h5 className="card-title50">Air Jordan</h5>
        <p className="card-text50">Price: $69.99</p>
    </div>

    <div className="card" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
        <img src={s2} alt="sho2" className="card-img-top51" />
        <h5 className="card-title51">Puma 210</h5>
        <p className="card-text51">Price: $79.99</p>
    </div>

    <div className="card" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
        <img src={s3} alt="sho3" className="card-img-top52" />
        <h5 className="card-title52">Nike </h5>
        <p className="card-text52">Price: $89.99</p>
    </div>

    <div className="card" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
        <img src={s4} alt="sho4" className="card-img-top53" />
        <h5 className="card-title53">Timex</h5>
        <p className="card-text53">Price: $99.99</p>
    </div>

    <div className="card" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
        <img src={s5} alt="sho5" className="card-img-top54" />
        <h5 className="card-title54">Royal Enfield</h5>
        <p className="card-text54">Price: $109.99</p>
    </div>

    <div className="card" style={{ display: 'inline-block', width: '300px', marginRight: '10px' }}>
        <img src={s6} alt="sho6" className="card-img-top55" />
        <h5 className="card-title55">Hayabusa</h5>
        <p className="card-text55">Price: $119.99</p>
    </div>
</div>



      <div className="image-container">
        <Carousel className='AA' interval={1000}>
          <Carousel.Item className='BB'>
            <img src={lr1} alt="lat1" className="lrp1" />
            <div className="price-tag">$99.99</div>
          </Carousel.Item>
          <Carousel.Item className='CC'>
            <img src={seven} alt="l2" />
            <div className="price-tag">$129.99</div>
          </Carousel.Item>
          <Carousel.Item className='DD'>
            <img src={ten} alt="l5" />
            <div className="price-tag">$149.99</div>
          </Carousel.Item>
        </Carousel>
        <DiscountAnimationleft />
        <div className="right-image">
          <Carousel className='LL1' interval={1000}>
            <Carousel.Item className='LL2'>
              <img src={lr2} alt="lat2" />
              <div className="price-tag">$179.99</div>
            </Carousel.Item>
            <Carousel.Item className='LL3'>
              <img src={c1} alt="lap" />
              <div className="price-tag">$199.99</div>
            </Carousel.Item>
            <Carousel.Item className='LL4'>
              <img src={c2} alt="lap" />
              <div className="price-tag">$219.99</div>
            </Carousel.Item>
          </Carousel>
          <DiscountAnimationRight />
        </div>
      </div>

      <div className="image-container1">
        <div className="left-image2">
          <Carousel className='LL5' interval={1000}>
            <Carousel.Item className='LL6'>
              <img src={lr3} alt="lat3" className="lrp3" height="500px" width="700px" />
              <div className="price-tag">$249.99</div>
            </Carousel.Item>
            <Carousel.Item className='LL7'>
              <img src={c1} alt="lap" />
              <div className="price-tag">$269.99</div>
            </Carousel.Item>
            <Carousel.Item className='LL8'>
              <img src={c2} alt="lap" />
              <div className="price-tag">$289.99</div>
            </Carousel.Item>
          </Carousel>
          <DiscountAnimationleft1 />
        </div>
        <div className="right-image2">
          <Carousel className='RR1' interval={1000}>
            <Carousel.Item className='RR2'>
              <img src={lr4} alt="lat4" />
              <div className="price-tag">$309.99</div>
            </Carousel.Item>
            <Carousel.Item className='RR3'>
              <img src={c1} alt="lap" />
              <div className="price-tag">$329.99</div>
            </Carousel.Item>
            <Carousel.Item className='RR4'>
              <img src={c2} alt="lap" />
              <div className="price-tag">$349.99</div>
            </Carousel.Item>
          </Carousel>
          <DiscountAnimationRight1 />
        </div>
      </div>

<div className="leftright">
  <div className="container1">
    <img src={c3} alt="cat3" />
    <img src={c4} alt="cat4" />
  </div>
  <div className="container2">
    <img src={c5} alt="cat5" />
    <img src={c6} alt="cat6" />
  </div>
  <div className="container3">
  <img src={c7} alt="cat7" />
  </div>
</div>
<div className="solar-system">
  <h1 className='Great'>Great Offer</h1>
  <div className="line-break"></div>
  <SolarSystem/>
</div>

<div className="After animation">
  
  <div className="card70">
 
    <img src={c10} alt="cat10" className="card-img-top70" />
    <div className="card-body70">
      <h5 className="card-title70">Canon Camera</h5>
      <p className="card-text70">$200.00</p>
    </div>
  </div>
  <div className="card71">
    <img src={c11} alt="cat11" className="card-img-top71" />
    <div className="card-body71">
      <h5 className="card-title71">Voltas Ac</h5>
      <p className="card-text71">$250.00</p>
    </div>
  </div>
  <div className="card72">
    <img src={c12} alt="cat72" className="card-img-top72" />
    <div className="card-body72">
      <h5 className="card-title72">Dell Projector</h5>
      <p className="card-text72">$300.00</p>
    </div>
  </div>
  <div className="card73">
    <img src={c13} alt="cat13" className="card-img-top73" />
    <div className="card-body73">
      <h5 className="card-title73">Dell Projector</h5>
      <p className="card-text73">$350.00</p>
    </div>
  </div>
  <div className="card74">
    <img src={c14} alt="cat74" className="card-img-top74" />
    <div className="card-body74">
      <h5 className="card-title74">Samsung_Galaxy_Z Folded</h5>
      <p className="card-text74">$400.00</p>
    </div>
  </div>
  <div className="card75">
    <img src={c17} alt="cat75" className="card-img-top75" />
    <div className="card-body75">
      <h5 className="card-title75">Samsung_Galaxy_Z Folded</h5>
      <p className="card-text75">$400.00</p>
    </div>
  </div>
  <div className="card76">
    <img src={c18} alt="cat76" className="card-img-top76" />
    <div className="card-body76">
      <h5 className="card-title76">Samsung_Galaxy_Z Folded</h5>
      <p className="card-text76">$400.00</p>
    </div>
  </div>
</div>


<div className='twoimages'>

<img src={c15} alt="cat15" height='450px' width='200px'/>

<img src={c16} alt="cat16" height='350px' width='500px' />
 
</div>


         
         
      </Container>
    </div>
  )
};
export default HomePage;