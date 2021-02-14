import { ADD_TO_CART, CLEAR, REMOVE_ITEM } from "./actions";
var _ = require('lodash');

const _defaultState = {
  items: [
     {
      id: 1,
      inventory: 87,
      images: ["https://verb-assignment.s3.us-east-2.amazonaws.com/5_0bee67bb-7615-42df-9881-d22385455d77_1024x1024.JPG"],
      name: "BMW N54 STAGE 3 GEN 2 TURBO KIT",
      description: "",
      sku: "",
      price: "$2650.00",
      onSale: 0
    },
     {
      id: 2,
      inventory: 14,
      images: ["https://verb-assignment.s3.us-east-2.amazonaws.com/BMS-MI40-BMW-M3-E92_2000x.jpg"],
      name: "Ohlins Road & Track for BMW E92/E90 ",
      description: "The Ohlins Road & Track kit is designed to offer a very high level of performance for both street driven vehicles, as well as offer the adjustability needed for track cars. These shocks are manually adjustable monotubes, with up to 20 individual settings to adjust rebound from comfort to competition. The threaded body allows accurate adjustability of the front and rear progressive springs to achieve the vehicle ride height center of gravity and level of performance handling desired. Ohlins Road & Track's can also be revalved, rebuilt, and can be supplied with various spring rates to meet your demands!  Ohlins puts every one of their products through vast corrosion test according to ISO 9227.  The end result is a 2-Year limited warranty on all of their products - worldwide. ",
      sku: "",
      price: "$2590.00",
      onSale: 25
    },
     {
      id: 3,
      inventory: 22,
      images: ["https://verb-assignment.s3.us-east-2.amazonaws.com/N54-LSD-Bolted.png"],
      name: "Helical LSD for BMW E90 E92 E82 135i and 335i",
      description: "Gain a prominent advantage over the competition with the MFactory Helical Limited Slip Differential. Through the smooth and constant distribution of power to the wheels, the MFactory Helical LSD puts the power-to-the-ground and maximizes your vehicle's traction!",
      sku: "",
      price: "$999.95",
      onSale: 0
    },
     {
      id: 4,
      inventory: "",
      images: ["https://verb-assignment.s3.us-east-2.amazonaws.com/VRSF-10902010.jpg"],
      name: "3″ Stainless Steel Race Downpipes N54 07-11 BMW 335i",
      description: "We are proud to introduce our VRSF 3″ race downpipes for your 2007 to 2011 N54 E90 & E92 335xi. These 3″ downpipes are THE best bang for the buck mod available, with gains ranging from 25-30hp when tuned. By eliminating the restrictive catalytic converters in the factory downpipes, back pressure is reduced significantly which results in faster spool, an increase in power & a more aggressive exhaust note.",
      sku: "",
      price: "$299.99",
      onSale: 15
    },
     {
      id: 5,
      inventory: "",
      images: ["https://verb-assignment.s3.us-east-2.amazonaws.com/VRSF-10903070-wpp1600377609923.jpg"],
      name: "Intercooler FMIC Upgrade Kit 07 – 12 135i, 335i, X1 N54 & N55 E82 E84 E90 E92",
      description: "Replace your overheated factory intercooler with the VRSF 5″ Performance HD & 7.5″ Competition HD Intercooler to get the most out of your N54 or N55. These intercoolers were designed to be one of the best performing, direct bolt on intercoolers available for your BMW with special attention to quality and performance while maintaining a reasonable price. These intercoolers allow for higher HP gains, mainly due to their ability to keep intake temps down while preventing heat soak which is a common problem with the factory intercooler. This results in a more power and increased reliability with reduced chances of pre-detonation & knock.",
      sku: "",
      price: "$379.99",
      onSale: 10
    },
    {
      id: 6,
      inventory: "",
      images: ["https://verb-assignment.s3.us-east-2.amazonaws.com/vrsf-n54-catback-wpp1600380163636.jpg"],
      name: "3.5″ N54 & N55 Catback Exhaust E90 & E92 07-13 BMW 335i/335is",
      description: "Without a doubt, the VRSF 3.5″ Catback Exhaust for your N54 & N55 335i is THE best option for your 335. Our exhaust is made from the highest quality 304 grade, mandrel bent stainless steel and we include super-flex, stainless steel band clamps to ensure quick and easy installation. By eliminating the restrictive catalytic converter in the factory catback, back pressure is reduced significantly which results in faster spool, and MORE POWER.",
      sku: "",
      price: "$779.99",
      onSale: 0
    }
  ],
  carts: {
    id: 1,
    customerId: 1
  },
  cartItems: [],
  users: {

  }
}

function removeItemOnce(cart, product) {
  
  var index = cart.findIndex(function(item){
    return item.id == product.id
  });
  if (index > -1) {
    cart.splice(index, 1);
  }
  return cart;
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      oldState.cartItems = [...oldState.cartItems, action.item]
      return oldState;
    case REMOVE_ITEM:
      oldState.cartItems = removeItemOnce(oldState.cartItems, action.item);
      return oldState;
    case CLEAR:
      return _defaultState;
    default:
      return oldState;
  }
}

export default reducer;
