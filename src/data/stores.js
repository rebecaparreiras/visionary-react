import storeBA from '../assets/images/store-ba.jpg'
import storePA from '../assets/images/store-pa.jpg'
import storeNY from '../assets/images/store-ny.jpg'
import storeSP from '../assets/images/store-sp.jpg'


const stores = [
  {
    id: 'store-ba', 
    name: 'Buenos Aires',
    openingHours: '10am-10pm',
    image: storeBA,
    category: 'stores',
  },
  {
    id: 'store-pa', 
    name: 'Paris',
    openingHours: '10am-8pm',
    image: storePA,
    category: 'stores',
  },
  {
    id: 'store-ny', 
    name: 'New York',
    openingHours: '8am-10pm',
    image: storeNY,
    category: 'stores',
  },
  {
    id: 'store-sp', 
    name: 'Sao Paulo',
    openingHours: '10am-10pm',
    image: storeSP,
    category: 'stores',
  },
];

export default stores