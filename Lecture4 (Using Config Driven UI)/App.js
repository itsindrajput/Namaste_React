import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Logo from "./public/cover.png";

const AppLayout=()=>{
    return (
    <React.Fragment>
        <Header />
        <Body />
        <Footer />
    </React.Fragment>
    );
};


const Title=()=>(
    < a href='/'>
    <img className="logo" src={Logo} alt="Taste Me Best" />
    </a>
);

const Header=()=>{
    // Earlier Header was HeaderComponent
    // return is optional here, but it's good practice to have one
    return (
        <div id="heading">
        <Title />
        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Cart</li>
        </ul>
        </div>
        </div>
    );
};

// Below is the hard coded data as the name, image, and rating is always going to be the same.
/*
const restaurentList=[{
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines: ["Burgers","American"],
    // cusines: ["Burgers","American"].join(", "),
    rating: "4.5"
},

{
    name: "Pizza Hut",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/db40cb52b0f5a2d3753356c5a88c09ce",
    cusines: ["Pizzas", "Fast Food"],
    rating: "3.8"
},

{
    name: "Biryani Blues",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/so3xjrdjiihywm8hk9ig",
    cusines: ["Biryani", "Hyderabadi"],
    rating: "4.3"
},

{
    name: "Cafe Coffee Day",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yf5jsyj14ngofifztopb",
    cusines: ["Beverages", "Cafe"],
    rating: "3.7"
},

{
    name: "KFC",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
    cusines: ["Burgers", "Biryani"],
    rating: "4.1"
},

{
    name: "Bakingo",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n4xvcdzsvfqanje59xml",
    cusines: ["Bakery", "Desserts"],
    rating: "4.4"
},

{
    name: "Chennai Express",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d23a117cac5393897574d52100a08170",
    cusines: ["North Indian", "Chinese"],
    rating: "3.6"
},

{
    name: "Domino's Pizza",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s9b10f1bfgjtjie3wmwx",
    cusines: ["Pizzas", "Italian"],
    rating: "4.4"
},

{
    name: "The Good Bowl",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0b3356a88b6fc5966c452c4c9b1b5e4a",
    cusines: ["Biryani", "North Indian"],
    rating: "4.2"
},

{
    name: "The LunchBox",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ehuumajovdh0qu396khx",
    cusines: ["Biryani", "North Indian"],
    rating: "4.0"
}
];
**/


// Data given below also are hard coded but it is taken from swiggy api which is in json format
const restaurentList=[
    {
        "info": {
          "id": "238132",
          "name": "The Good Bowl",
          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
          "locality": "Bhagwan Mahaveer Road",
          "areaName": "RK Puram - E",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "238132",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "7918",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-bhagwan-mahaveer-road-rk-puram-e-kota-238132",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "238131",
          "name": "Sweet Truth - Cake and Desserts",
          "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
          "locality": "Bhagwan Mahaveer Road",
          "areaName": "RK Puram - E",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Snacks",
            "Bakery",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "238131",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "4444",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-bhagwan-mahaveer-road-rk-puram-e-kota-238131",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "238130",
          "name": "Firangi Bake",
          "cloudinaryImageId": "h9vwtvashyerjoravdxf",
          "locality": "Bhagwan Mahaveer Road",
          "areaName": "RK Puram - E",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Mexican",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 3.8,
          "feeDetails": {
            "restaurantId": "238130",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "3952",
          "avgRatingString": "3.8",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/firangi-bake-bhagwan-mahaveer-road-rk-puram-e-kota-238130",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "201091",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
          "locality": "Kota\n",
          "areaName": "Talwandi",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.5,
          "veg": true,
          "feeDetails": {
            "restaurantId": "201091",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2300
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2300
          },
          "parentId": "6249",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 13,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "13 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-10-01 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "EVERY ITEM",
            "subHeader": "@ ₹169"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-talwandi-kota-201091",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "238134",
          "name": "LunchBox - Meals and Thalis",
          "cloudinaryImageId": "c1h3finqx9eed39rljog",
          "locality": "Bhagwan Mahaveer Road",
          "areaName": "RK Puram - E",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4,
          "feeDetails": {
            "restaurantId": "238134",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "4925",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-bhagwan-mahaveer-road-rk-puram-e-kota-238134",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "238128",
          "name": "Behrouz Biryani",
          "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
          "locality": "Bhagwan Mahaveer Road",
          "areaName": "RK Puram - E",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "North Indian",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "feeDetails": {
            "restaurantId": "238128",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "1803",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "23 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/behrouz-biryani-bhagwan-mahaveer-road-rk-puram-e-kota-238128",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "104922",
          "name": "Anand Shekhawati Dhaba (Transport Nagar)",
          "cloudinaryImageId": "zalbfjopnwktiv2vvz16",
          "locality": "Jahalawar Road",
          "areaName": "Indraprastha Industrial Area",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "North Indian",
            "Thalis",
            "Chinese"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "104922",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "32821",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 18,
            "lastMileTravel": 1.7,
            "serviceability": "SERVICEABLE",
            "slaString": "18 mins",
            "lastMileTravelString": "1.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/anand-shekhawati-dhaba-transport-nagar-jahalawar-road-indraprastha-industrial-area-kota-104922",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "75444",
          "name": "Ubf - United By Food",
          "cloudinaryImageId": "qisq8kkky1s5ymxx6zia",
          "locality": "Rajeev Gandhi Nagar",
          "areaName": "Rangbari",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Beverages"
          ],
          "avgRating": 4.1,
          "feeDetails": {
            "restaurantId": "75444",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "218858",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/ubf-united-by-food-rajeev-gandhi-nagar-rangbari-kota-75444",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "94196",
          "name": "MRF punjabi food",
          "cloudinaryImageId": "bdubuibz7ist3fchis8v",
          "locality": "Indra Vihar",
          "areaName": "Talwandi",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Punjabi"
          ],
          "avgRating": 3.9,
          "veg": true,
          "feeDetails": {
            "restaurantId": "94196",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "140626",
          "avgRatingString": "3.9",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 22,
            "lastMileTravel": 1,
            "serviceability": "SERVICEABLE",
            "slaString": "22 mins",
            "lastMileTravelString": "1.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-09-30 22:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mrf-punjabi-food-indra-vihar-talwandi-kota-94196",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "76951",
          "name": "Burger Garage Talwandi",
          "cloudinaryImageId": "8d8e8b772b50d94c7648b44e3e3b31a6",
          "locality": "Jawahar Nagar",
          "areaName": "Talwandi",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Pastas",
            "Burgers",
            "Ice Cream"
          ],
          "avgRating": 4.1,
          "veg": true,
          "feeDetails": {
            "restaurantId": "76951",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 2000
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 2000
          },
          "parentId": "261979",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-10-01 03:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-garage-talwandi-jawahar-nagar-talwandi-kota-76951",
          "type": "WEBLINK"
        }
      }
]


// Below RestaurantCard Component can also be written in different style
/*
const RestaurantCard=(props)=>{
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
        props.restraunt.info?.cloudinaryImageId} />
            <h3>{props.restraunt.info?.name}</h3>
            <h4>{props.restraunt.info?.cuisines.join(", ")}</h4>
            <h5>Ratings: {props.restraunt.info?.totalRatingsString}</h5>
        </div>
    );
};
**/


/*
const RestaurantCard=({restraunt})=>{ 
    Here we are destructuring the restraunt so that we dont have to write "props.restraunt.info?.name" also
    and we will write "restraunt.info?.name"  

    we can also destructure this restraunt and we don't have to write "restraunt.info?.name" 
    const {cloudinaryImageId, name, cuisines, totalRatingsString} = restraunt.info;
    
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
            cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>Ratings: {totalRatingsString}</h5>
        </div>
    );
};
**/


/*And if everything we want to pass in the RestaurantCard Component as in one go
and we don't want to  then we will use this "const {cloudinaryImageId, name, cuisines, totalRatingsString} = restraunt.info;""
use spread operator in the Body Component as <RestaurantCard {...restaurentList[0].info} /> 
*/
const RestaurantCard=({cloudinaryImageId, name, cuisines, totalRatingsString})=>{ 
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
            cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{totalRatingsString} Ratings</h5>
        </div>
    );
};

//Suppose if we have build the below Body component for 100 of items than we have to use the loop (for each / for loop) 
//But the better way to do this, is using the map function
/* 
const Body=()=>{
    return (
        <div className="Restaurant-List">
        <RestaurantCard {...restaurentList[0].info} />
        <RestaurantCard {...restaurentList[1].info} />
        <RestaurantCard {...restaurentList[2].info} />
        <RestaurantCard {...restaurentList[3].info} />
        <RestaurantCard {...restaurentList[4].info} />
        <RestaurantCard {...restaurentList[5].info} />
        <RestaurantCard {...restaurentList[6].info} />
        <RestaurantCard {...restaurentList[7].info} />
        <RestaurantCard {...restaurentList[8].info} />
        <RestaurantCard {...restaurentList[9].info} />
        </div>
    );
};
**/


/*
const Body=()=>{
    return (
        <div className="Restaurant-List">
        <RestaurantCard {...restaurentList[0].info} />
        <RestaurantCard {...restaurentList[1].info} />
        <RestaurantCard {...restaurentList[2].info} />
        <RestaurantCard {...restaurentList[3].info} />
        <RestaurantCard {...restaurentList[4].info} />
        <RestaurantCard {...restaurentList[5].info} />
        <RestaurantCard {...restaurentList[6].info} />
        <RestaurantCard {...restaurentList[7].info} />
        <RestaurantCard {...restaurentList[8].info} />
        <RestaurantCard {...restaurentList[9].info} /> 
        </div>
    );
};
*/


// Using the map function:
const Body=()=>{
    return (
        <div className="Restaurant-List">
            {
                restaurentList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
                })
            }
        </div>
    );
};

const Footer=()=>{
    return <h4 className="footer">Footer</h4>;
};



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);