import React from 'react';

import acc1 from './images/c11.jpg';
import acc2 from './images/c12.jpg';
import acc3 from './images/c8.jpg';
import acc4 from './images/c9.webp';
import acc5 from './images/103.jpg';
import acc6 from './images/14.webp';
import './earphones.css';
const Earphones = () => (
  <div>
 <div>
  <div className="earphone1">
    <img src={acc1} alt="Earphone 1" className='eara' />
    <p className="title40">Earphone 1</p>
    <p className="description41">A digital single-lens reflex camera (digital SLR or DSLR) is a digital camera that combines the optics and the mechanisms of a single-lens reflex camera with a solid-state image sensor and digitally records the images from the sensor.</p>
    <p className="price42">$200.00</p>
  </div>
  <div className="earphone2">
    <img src={acc2} alt="Earphone 2" className='earb' />
    <p className="title40">Earphone 2</p>
    <p className="description41">Voltas Limited is an Indian multinational home appliances company headquartered in Mumbai. It designs, develops, manufactures and sells products including air conditioners, air coolers, refrigerators, washing machines, dishwashers, microwaves, air purifiers, water dispensers. Voltas is India's largest air conditioning company by market share</p>
    <p className="price42">$250.00</p>
  </div>
  <div className="earphone3">
    <img src={acc3} alt="Earphone 3" className='earc' />
    <p className="title40">Earphone 3</p>
    <p className="description41">Dell Technologies Inc. is an American multinational technology company headquartered in Round Rock, Texas. It was formed as a result of the September 2016 merger of Dell and EMC Corporation (which later became Dell EMC)..</p>
    <p className="price42">$300.00</p>
  </div>
  <div className="earphone4">
    <img src={acc4} alt="Earphone 4" className='eard' />
    <p className="title40">Earphone 4</p>
    <p className="description41">The Samsung Galaxy S series is a line of flagship Android smartphone and tablet computer produced by Samsung Electronics. In conjunction with the foldable Galaxy Z series, the lineup serves as Samsung's flagship smartphone lineup..</p>
    <p className="price42">$350.00</p>
  </div>
  <div className="earphone5">
    <img src={acc5} alt="Earphone 5" className='eare' />
    <p className="title40">Earphone 5</p>
    <p className="description41">Casio was established as Kashio Seisakujo in April 1946 by Tadao Kashio [ja] (1917–1993), an engineer specializing in fabrication technology.[1] Kashio's first major product was the yubiwa pipe, a finger ring that would hold a cigarette, allowing the wearer to smoke the cigarette down to its nub while also leaving the wearer's hands free</p>
    <p className="price42">$40.00</p>
  </div>
  <div className="earphone6">
    <img src={acc6} alt="Earphone 6" className='earf' />
    <p className="title40">Earphone 6</p>
    <p className="description41">The Samsung Galaxy S21 is a series of high-end Android-based smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series. They collectively serve as the successor to the Samsung Galaxy S20 series</p>
    <p className="price42">$45.00</p>
  </div>
</div>

  </div>
);

export default Earphones;
