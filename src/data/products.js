import liloFront from '../assets/images/lilo-01.webp';
import liloSide from '../assets/images/lilo-02.webp';
import baboFront from '../assets/images/babo-01.webp';
import baboSide from '../assets/images/babo-02.webp';
import leeFront from '../assets/images/lee-01.webp';
import leeSide from '../assets/images/lee-02.webp';
import gimpoFront from '../assets/images/gimpo-01.webp';
import gimpoSide from '../assets/images/gimpo-02.webp';
import daliFront from '../assets/images/dali-01.webp';
import daliSide from '../assets/images/dali-02.webp';
import momoFront from '../assets/images/momo-01.webp';
import momoSide from '../assets/images/momo-02.webp';
import naruFront from '../assets/images/naru-01.webp';
import naruSide from '../assets/images/naru-02.webp';
import tasiFront from '../assets/images/tasi-01.webp';
import tasiSide from '../assets/images/tasi-02.webp';

const products = [
  {
    id: 'lilo-glasses', 
    name: 'Lilo Glasses',
    description: 'Light green acetate frames, modern and stylish.',
    price: 250.00,
    images: {
      main: liloFront,
      hover: liloSide,
    },
    category: 'glasses',
  },
  {
    id: 'babo-sunglasses',
    name: 'Babo Sunglasses',
    description: 'Two-tone round frame with wood temples and gradient lenses.',
    price: 200.00,
    images: {
      main: baboFront,
      hover: baboSide,
    },
    category: 'sunglasses',
  },
  {
    id: 'lee-glasses',
    name: 'Lee Glasses',
    description: 'Bold translucent frames for a sophisticated look.',
    price: 200.00,
    images: {
      main: leeFront,
      hover: leeSide,
    },
    category: 'glasses',
  },
  {
    id: 'gimpo-sunglasses',
    name: 'Gimpo Sunglasses',
    description: 'Timeless black frame and tinted lenses sunglasses.',
    price: 250.00,
    images: {
      main: gimpoFront,
      hover: gimpoSide,
    },
    category: 'sunglasses',
  },
  {
    id: 'dali-glasses',
    name: 'Dali Glasses',
    description: 'Bold black acetate frame with clear round lenses.',
    price: 250.00,
    images: {
      main: daliFront,
      hover: daliSide,
    },
    category: 'glasses',
  },
  {
    id: 'momo-sunglasses',
    name: 'Momo Sunglasses',
    description: 'Translucent green frame with gradient tinted lenses.',
    price: 200.00,
    images: {
      main: momoFront,
      hover: momoSide,
    },
    category: 'sunglasses',
  },
  {
    id: 'naru-glasses',
    name: 'Naru Glasses',
    description: 'Glossy amber frame with rectangular clear lenses.',
    price: 250.00,
    images: {
      main: naruFront,
      hover: naruSide,
    },
    category: 'glasses',
  },
  {
    id: 'tasi-sunglasses',
    name: 'Tasi Sunglasses',
    description: 'Glossy green round frame with dark tinted lenses.',
    price: 250.00,
    images: {
      main: tasiFront,
      hover: tasiSide,
    },
    category: 'sunglasses',
  },
];

export default products;