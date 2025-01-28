import React from "react";
import ReactDOM from "react-dom/client";


//creating header

const Header=()=>{
    return(
        <div className="Header-Container">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswygq3C8mTZUXmyl18k8ojtolrjZqVujmWw&s" alt="brand logo" />
                <div className="brand-name">Name.com</div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li className="Cart">
                        <img src="https://cdn-icons-png.flaticon.com/512/3225/3225209.png" alt="cart" />
                    </li>
                </ul>
            </div>
        </div>
    )
}





resList=[
    {
      "info": {
        "id": "824180",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/91279942-ac7a-4932-b925-2081c918bb97_824180.jpg",
        "locality": "Delhi Cargo Airport",
        "areaName": "Cargo City",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.2,
        "parentId": "721",
        "avgRatingString": "4.2",
        "totalRatingsString": "27",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
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
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/pizza-hut-cargo-airport-cargo-city-rest824180",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "735866",
        "name": "Chai Point",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/22/4db22105-331a-4810-a14d-853eb3f2be6a_735866.jpg",
        "locality": "Aerocity",
        "areaName": "Aerocity",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Chaat",
          "Indian",
          "American"
        ],
        "avgRating": 4.5,
        "parentId": "1607",
        "avgRatingString": "4.5",
        "totalRatingsString": "293",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 22:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
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
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "236"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/chai-point-aerocity-rest735866",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "314427",
        "name": "Natural Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/795540a8-0b79-4006-aa42-ea5822a00c70_314427.JPG",
        "locality": "Masoodpur",
        "areaName": "Vasant Kunj",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "2093",
        "avgRatingString": "4.8",
        "totalRatingsString": "1.4K+",
        "sla": {
          "deliveryTime": 46,
          "lastMileTravel": 8.8,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "8.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
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
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/natural-ice-cream-masoodpur-vasant-kunj-rest314427",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "186203",
        "name": "The Biryani Life",
        "cloudinaryImageId": "thkudwkk7gvvebscug0s",
        "locality": "Masoodpur",
        "areaName": "Vasant Kunj",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "parentId": "8496",
        "avgRatingString": "3.9",
        "totalRatingsString": "1.0K+",
        "sla": {
          "deliveryTime": 51,
          "lastMileTravel": 8.8,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:59:00",
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
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/the-biryani-life-masoodpur-vasant-kunj-rest186203",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "815558",
        "name": "Sugar & Spice",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/26/f6d7bfb1-baf9-479f-996b-5269bfe740dc_815558.jpg",
        "locality": "Mahipalpur",
        "areaName": "Mahipalpur",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "5169",
        "avgRatingString": "4.2",
        "totalRatingsString": "25",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
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
                    "description": "Gourmet",
                    "imageId": "newg.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹84"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/sugar-and-spice-mahipalpur-rest815558",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "760635",
        "name": "Olio - The Wood Fired Pizzeria",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/4c3a3980-535e-4eaf-98fe-5f9cf7f5fef5_760635.jpg",
        "locality": "MASOODPUR",
        "areaName": "Vasanth Kunj",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Fast Food",
          "Snacks",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "11633",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.5K+",
        "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 8,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-29 06:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
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
                    "description": "Gourmet",
                    "imageId": "newg.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/olio-the-wood-fired-pizzeria-masoodpur-vasanth-kunj-rest760635",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "566216",
        "name": "Faasos Signature Wraps & Rolls",
        "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
        "locality": "Masoodpur",
        "areaName": "Vasant Kunj",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "340366",
        "avgRatingString": "4.2",
        "totalRatingsString": "133",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 8.8,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:59:00",
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
          "header": "ITEMS",
          "subHeader": "AT ₹63"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/faasos-signature-wraps-and-rolls-masoodpur-vasant-kunj-rest566216",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "799145",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/df76119a-fe67-4cc2-ac41-30ce4486cea2_799145.JPG",
        "locality": "Delhi Cargo Airport",
        "areaName": "Cargo City",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Rolls & Wraps",
          "Fast Food"
        ],
        "avgRating": 4.5,
        "parentId": "547",
        "avgRatingString": "4.5",
        "totalRatingsString": "194",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
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
          "header": "50% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/kfc-cargo-airport-cargo-city-rest799145",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "823720",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/2a012714-2233-460d-a21c-b7a9a2d99005_823720.JPG",
        "locality": "Gate No.-5",
        "areaName": "Delhi Airport T2",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American",
          "Fast Food"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "165",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
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
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/mcdonalds-gate-no-5-delhi-airport-t2-rest823720",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "43382",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/4649bac4-c729-43da-9f0d-85852c1cfb6c_43382.JPG",
        "locality": "Aerocity",
        "areaName": "Aerocity",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.5,
        "parentId": "2",
        "avgRatingString": "4.5",
        "totalRatingsString": "4.9K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 22:35:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "230"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/subway-aerocity-rest43382",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "122802",
        "name": "Krispy Kreme - Doughnuts & Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/b63e54fb-510f-4361-82af-e86d7b81aed5_122802.JPG",
        "locality": "Mahipalpur",
        "areaName": "Aerocity",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "570",
        "avgRatingString": "4.5",
        "totalRatingsString": "425",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
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
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "61"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/krispy-kreme-doughnuts-and-coffee-mahipalpur-aerocity-rest122802",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "75330",
        "name": "Costa Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/3/5a0bba10-8403-4a03-afed-9d2e883257be_75330.JPG",
        "locality": "Worldmark 3",
        "areaName": "Aerocity",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Bakery",
          "Desserts",
          "Snacks"
        ],
        "avgRating": 4.8,
        "parentId": "8427",
        "avgRatingString": "4.8",
        "totalRatingsString": "52",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-29 01:00:00",
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
          "header": "ITEMS",
          "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/costa-coffee-worldmark-3-aerocity-rest75330",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "43954",
        "name": "Bikanervala",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/a13049ad-7216-4b48-98a8-802fe838a310_43954.jpg",
        "locality": "Aerocity",
        "areaName": "Aerocity",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Desserts",
          "Sweets"
        ],
        "avgRating": 4.3,
        "parentId": "45936",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png",
              "description": "Delivery!"
            },
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chole%20Bhature.png"
                  }
                },
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
          "header": "ITEMS",
          "subHeader": "AT ₹62"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "1.6K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/bikanervala-aerocity-rest43954",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "779575",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/c4577eea-e4c6-4830-b92f-5d3d9874a173_779575.jpg",
        "locality": "Basant Lok",
        "areaName": "Vasant Vihar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "avgRating": 4.6,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.3K+",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 11,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Desserts.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/theobroma-basant-lok-vasant-vihar-rest779575",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "46653",
        "name": "Wow! Momo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/3/d2399b68-7460-4919-a6a2-9522d4338d31_46653.JPG",
        "locality": "Aerocity",
        "areaName": "Aerocity",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "1776",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.2K+",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Chinese.png",
              "description": "Delivery!"
            },
            {
              "imageId": "Rxawards/_CATEGORY-Momos.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Chinese.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Momos.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.6",
            "ratingCount": "229"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/wow-momo-aerocity-rest46653",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "420606",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/d1f6d2c0-dc02-4503-bf9e-885aa7a295b1_420606.JPG",
        "locality": "Vasant vihar",
        "areaName": "Vasant Kunj",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.7",
        "totalRatingsString": "2.1K+",
        "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 8,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "8.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-29 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Waffle.png"
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
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/the-belgian-waffle-co-vasant-vihar-vasant-kunj-rest420606",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "15042",
        "name": "Taco Bell",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/a46fcdd8-f787-4b4c-a9a1-e694fdc034dd_15042.JPG",
        "locality": "Ambience Mall",
        "areaName": "Vasant Kunj",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Mexican",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.4,
        "parentId": "1557",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 8.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
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
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/taco-bell-ambience-mall-vasant-kunj-rest15042",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "60565",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_60565.JPG",
        "locality": "Worldmark 1",
        "areaName": "Aerocity",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Chaat",
          "Snacks",
          "Bakery",
          "Street Food",
          "healthy",
          "Home Food",
          "Maharashtrian",
          "Italian",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "281782",
        "avgRatingString": "4.5",
        "totalRatingsString": "3.3K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹85"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/chaayos-chai-snacks-relax-worldmark-1-aerocity-rest60565",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "15850",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/1c5fd858-635d-493d-9172-9d80bb196506_15850.JPG",
        "locality": "Masoodpur",
        "areaName": "Vasant Kunj",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "21809",
        "avgRatingString": "4.3",
        "totalRatingsString": "16K+",
        "sla": {
          "deliveryTime": 54,
          "lastMileTravel": 8.8,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "8.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Rolls.png",
              "description": "Delivery!"
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
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Rolls.png"
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
          "header": "ITEMS",
          "subHeader": "AT ₹53"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/faasos-wraps-rolls-and-shawarma-masoodpur-vasant-kunj-rest15850",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "795511",
        "name": "Pret A Manger",
        "cloudinaryImageId": "2ad6ae997870b6e8dd2c9a42150df948",
        "locality": "Indira Gandhi International Airport",
        "areaName": "Aerocity",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Cafe",
          "Snacks",
          "Beverages",
          "Salads",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "458911",
        "avgRatingString": "4.4",
        "totalRatingsString": "64",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-01-28 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
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
                    "description": "Gourmet",
                    "imageId": "newg.png"
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
          "header": "50% OFF",
          "subHeader": "UPTO ₹90"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-2d04d180-aad5-4ed8-947d-4cfc6041ff22"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/delhi/pret-a-manger-indira-gandhi-international-airport-aerocity-rest795511",
        "type": "WEBLINK"
      }
    }
  ];


const Search=()=>{
    return(
        <div className="Search">
                <div className="search-box">
                    Search
                </div>
                <div className="search-icon">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBE0Ldc1iw0MxpYyi2ilwv_PATdh2xKusxA&s" alt="search-icon" />
                </div>
        </div>
    );
}


const ResCard=({resData})=>{
    return(
        <div className="resCard">
                <img className="resImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="restaurant Image" />
                <h3>{resData.info.name}</h3>
                <h4>{resData.info.cuisines.join(", ")}</h4>
                <h4>{"Rating : "+resData.info.avgRating}</h4>
                <h4>{"Delivery Time : "+resData.info.sla.deliveryTime+"mins"}</h4>
            </div>
    );
}

const Footer=()=>{
    return(
        <div className="footer">
            <h3 className="name">Name.com</h3>
            <h3>Food Company</h3>
            <h3>Copyright @2025</h3>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body-Container">
            <Search/>
            <div className="ResturantContainer">
                {resList.map((resturant) => (<ResCard key={resturant.info.id} resData={resturant} />))};
            </div>
            <Footer/>
        </div>
    )
}



const AppLayout=()=>{
    return(
        <>
            <Header/>
            <Body/>
            
        </>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);
