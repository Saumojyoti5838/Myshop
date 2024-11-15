import React from 'react';
import './New Arrival.css'; // Assuming you have a CSS file for styling

import im1 from './images/100.jpg';
import im2 from './images/102.webp';
import im3 from './images/103.jpg';
import im4 from './images/104.jpg';
import im5 from './images/lr5.webp';
import im6 from './images/lr4.jpg';
import im7 from './images/c1.jpg';
import im8 from './images/c2.jpg';
import im9 from './images/c3.jpg';
import im10 from './images/lr4.jpg';
import im11 from './images/c1.jpg';
import im12 from './images/c2.jpg';
import im13 from './images/c3.jpg';
import im14 from './images/s1.avif';
import im15 from './images/s2.jpg';
import im16 from './images/s3.webp';

const images = [
  { src: im1, alt: 'arrival1', title444: 'Iphone 15 Pro Max', description444: 'About this item FORGED IN TITANIUM — iPhone 15 Pro Max has a Plus, with Always-On display, your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know.GAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.POWERFUL PRO CAMERA SYSTEM — Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more color and detail using the 48MP Main camera. And take sharper close-ups from farther away with the 5x Telephoto camera on iPhone 15 Pro Max. CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to your favorite feature. Just set the one you want, like Silent mode, Camera, Voice Memo, Shortcut, and more. Then press and hold to launch the action.', price445: '$19.99' },
  { src: im2, alt: 'arrival2', title444: 'Samsung Galazy S23', description444: 'Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm (6.8") flat display.  an absolute marvel of design.The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display. With the most megapixels on a smartphone and AI processing, Galaxy S24 Ultra sets the industry standard for image quality every time you hit the shutter.  more, the new ProVisual engine recognizes objects — improving colour tone, reducing noise and bringing out detail.A new way to search is here with Circle to Search. While scrolling your fav social network, use your S Pen or finger to circle something and get Google Search results.',  price445: '$229.99' },
  { src: im3, alt: 'arrival3', title444: 'Casio Watch',description444: 'Dial Color: Grey, Case Shape: Rectangular, Dial Glass material: MineralBand Color: Silver, Band Material: Stainless Steel Watch Movement Type: Quartz, Watch Display Type: Digital and Stainless Steel Bezel Case Material: Stainless Steel, Case Diameter: 32 millimeters , Size of case : 36.8×33.2×8.2mmFold Over ClaspWarranty type: Manufacturer; 2 Years Domestic Warranty',  price445: '$329.99' },
  { src: im4, alt: 'arrival4', title444: 'Fastrack Fs1', description444: '1.96" Super AMOLED Arched Display with Always On Display and is ready to style your wrist with bright pixel resolution for a sharper experience and brand new amazing coloursSingleSync BT Calling with Favourite Contacts storage (Android - 100, iOS - 50) and Quick Replies (Android)NitroFast Charging with 10 min charge to fuel up 1 day of battery',  price445: '$429.99' },
  { src: im5, alt: 'c17', title444: 'Samsung Galaxy Z Fold4 5G', description444: 'Stands out. Stands up. Unfolds. The Galaxy Z Fold4 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means theremore screen and no black dot getting between you and the breathtaking Infinity Flex Display.Do more than more with Multi View. Whetke full r in your pocket transforms apps optimized with One UI to give you menus and more in a glanceNew Taskbar for PC-like multitasking. Wipe out tasks in fewer taps. Adouncing between windows when youre in the groove.4 And with App Pair, one tap launches up to three apps, all sharing one super-productive screenOur toughest Samsung Galaxy foldables ever. From the inside out, Galaxy Z Fold4 is made with materials that are not only stunning, but stand up to lifes bumps and fumbles. The front and rear panels, made with exclusive Corning Gorilla Glass Victus+, are ready to resist sneaky scrapes and scratches. With our toughest aluminum frame made with Armor Aluminum, this is one durable smartphone.',  price445: '$1009.99' },
  { src: im6, alt: 'c18', title444: ' Solimo Neptune Engineered Wood Queen Wenge Finish Bed with Storage (Brown)', description444: 'Dimensions: 160x206x89 cmIdeal mattress size: 60x75 inches Humidity-resistant design to ensure strength throughout changing seasonsOver 20 tests conducted to ensure quality and safetyUnderwent dynamic loading tests for 21,000 cycles and edge durability tests for 10,000 cyclesLoad bearing capacity of 360kgs to provide proper supportFree from burrs & sharp edges for enhanced safetyMade free from toxins or harmful chemicals to promise safe usageIncludes a 3-year warranty on manufacturing defectsDo not move or push without dismantling. Avoid using wet cloth to wipe furniture for better care .', price445: '$1004.99' },
  { src: im7, alt: 'c19', title444: 'Canon M50 Mark II 15-45mm f3.5-6.3 is STM Digital Zoom Camera (Black)',description444: 'In-camera YouTube live streaming for real-time video engagementFilm vertical videos in 4K for social media; Wireless connectivity with smartphone and cloud storageVertical Vlogging Made Easy; Stay Steady and in ControlRecord in Stunning 4K Resolution; Stay in Focus All the Time; Ready, Touch, Action!', price445: '$204.99' },
  { src: im8, alt: 'c20', title444: 'Panasonic 4K Ultra HD Video Camera Camcorder HC-VX981K, 20X Optical Zoom,',description444: 'Ultra-sharp 4K Ultra HD recording, plus in-camera editing for 1080p displaysLEICA Decoma Lens optical 20x zoom, 5-axis Hybrid Optical Image Stabilization and focal length is 4.08 – 81.6 mm, standard illumination is 1400 lx4K in-camera post cropping, panning, zooming and subject tracking stabilization features eliminate the need for complex editing software',  price445: '$304.99' },
  { src: im9, alt: 'c21', title444: 'Canon M51', description444: 'Ultra-sharp 4K Ultra HD recording, plus in-camera editing for 1080p displaysLEICA Decoma Lens optical 20x zoom, 5-axis Hybrid Optical Image Stabilization and focal length is 4.08 – 81.6 mm, standard illumination is 1400 lx4K in-camera post cropping, panning, zooming and subject tracking stabilization features eliminate the need for complex editing software',  price445: '$404.99' },
  { src: im10, alt: 'c22',title444: ' SaturnEngineered Wood', description444: 'Dimensions: 160x206x89 cmIdeal mattress size: 60x75 inches Humidity-resistant design to ensure strength throughout changing seasonsOver 20 tests conducted to ensure quality and safetyUnderwent dynamic loading tests for 21,000 cycles and edge durability tests for 10,000 cyclesLoad bearing capacity of 360kgs to provide proper supportFree from burrs & sharp edges for enhanced safetyMade free from toxins or harmful chemicals to promise safe usageIncludes a 3-year warranty on manufacturing defectsDo not move or push without dismantling. Avoid using wet cloth to wipe furniture for better care .', price445: '$504.99' },
  { src: im11, alt: 'c23', title444: 'Canon EOS 200D',description444: 'Color: BlackCutting-edge technologyBest-in class PerformanceCompatible Mountings: Canon Ef-S; Photo Sensor Technology: Size:[Unit:Frames Per Second, Value:Aps-C ], Technology:[Value:Cmos ]; Hardware Interface: Secure DigitalCompatible Mountings: Canon Ef-S; Photo Sensor Technology: Cmos; Hardware Interface: Secure Digital', price445: '$604.99' },
  { src: im12, alt: 'c24', title444: 'Canon G51', description444: 'In-camera YouTube live streaming for real-time video engagementFilm vertical videos in 4K for social media; Wireless connectivity with smartphone and cloud storageVertical Vlogging Made Easy; Stay Steady and in ControlRecord in Stunning 4K Resolution; Stay in Focus All the Time; Ready, Touch, Action!Photo Sensor Technology: Cmos; Compatible Mountings: Canon Ef-M; Hardware Interface: 802 11 Bgn; Wireless Communication Technology: Wi-Fi',  price445: '$704.99' },
  { src: im13, alt: 'c25',title444: 'Canon F20', description444: 'Ultra-sharp 4K Ultra HD recording, plus in-camera editing for 1080p displaysLEICA Decoma Lens optical 20x zoom, 5-axis Hybrid Optical Image Stabilization and focal length is 4.08 – 81.6 mm, standard illumination is 1400 lx 4K in-camera post cropping, panning, zooming and subject tracking stabilization features eliminate the need for complex editing softwareWi-Fi connected mobile device Twin Camera feature adds multi-camera scene picture in picture recording4K PHOTO captures high-quality photos from 4K video frames. Image Sensor 1/2.3-inch BSI MOS Sensor', price509: '$804.99' },
  { src: im14, alt: 'c26', title444: 'Nike Mens Jordan 1 Retro HighSneaker  ',description444: 'Outer Material : LeatherAll nike products are meant to deliver high performance, durability and great comfortWarranty details: Contact seller for warranty',  price445: '$904.99' },
  { src: im15, alt: 'c27', title444: 'Nike Boys Jordan 11 Retro Little Flex PsSneaker', description444: 'Product detailsClosure typeLace-UpHeel typeFlatWateresistance levelWater ResistantSole materialRubberStyleModernOuter materialFaux FurCountry of OriginVietnam',  price445: '$104.99' },
  { src: im16, alt: 'c28', title444: 'Puma Unisex-Adult Rider Fv BaseSneaker', description444: 'Style Name:-SneakerModel Name:-Rider FV BaseBrand Color:-Warm White-Olive DrabMaterial:-TextileCare Instructions:-Wipe with a clean dry cloth',  price445: '$114.99' },

];

const NewArrival = () => {
  const rows = [];
  for (let i = 0; i < images.length; i += 4) {
    const rowImages = images.slice(i, i + 4);
    rows.push(
      <div className="row" key={i}>
        {rowImages.map((image, index) => (
          <div className="col" key={index}>
            <img src={image.src} alt={image.alt} style={{ height: '200px', width: '300px' }} />
            <h3>{image.title444}</h3>
            <p>{image.description444}</p>
            <h3>{image.price445}</h3>

          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="containerE">
      {rows}
    </div>
  );
};
export default NewArrival;