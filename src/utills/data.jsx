import FastfoodIcon from '@mui/icons-material/Fastfood';
import InventoryIcon from '@mui/icons-material/Inventory';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PaymentsIcon from '@mui/icons-material/Payments';
import SmsIcon from '@mui/icons-material/Sms';
import SettingsIcon from '@mui/icons-material/Settings';
export const Categories = [
  {
    id: 1,
    name: "Chickens",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Burgers",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Sandwich",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Children",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Desserts",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Beverage",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option8",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option9",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option1",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option2",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option3",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option4",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option5",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option6",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
  {
    id: 2,
    name: "Option7",
    image:
      "https://img.freepik.com/free-photo/top-close-up-view-chicken-with-herbs-chicken-legs-with-herbs-lemon-brown-plate-center-table_140725-110684.jpg?size=626&ext=jpg&ga=GA1.1.1642642488.1699428383&semt=ais",
  },
];

export const Manages = [
  {
    id: 1,
    name: "foods",
    icon:<FastfoodIcon/>,
    items: [
      {
        name: "Add new item",
        route: "/manage/food/add-new-item",
      },
      {
        name: "All items",
        route: "/manage/food/all-items",
      },
      {
        name: "Groups",
        route: "/manage/food/groups",
      },
      {
        name: "Properties",
        route: "/manage/food/properties",
      },
      {
        name: "Variations",
        route: "/manage/food/variations",
      },
      {
        name: "Receipe Builder",
        route: "/manage/food/receipe-builder",
      },
      {
        name: "All Receipes",
        route: "/manage/food/all-receipes",
      },
    ],
  },

  {
    id: 2,
    name: "manage stock",
    icon:<InventoryIcon/>,
    items: [
      {
        name: "Incredient Item",
        route: "/manage/stock/ingredient-item",
      },
      {
        name: "Incredient Purchase",
        route: "/manage/stock/ingredient-purchase",
      },
      {
        name: "Purchase History",
        route: "/manage/stock/purchase-history-ingredient",
      },
      {
        name: "Manage Supplier",
        route: "/manage/stock/manage-supplier",
      },
      {
        name: "Supplier History",
        route: "/manage/stock/supplier-history",
      },
    ],
  },
  {
    id: 3,
    name: "user management",
    icon:<ManageAccountsIcon/>,
    items: [
      {
        name: "Admin/Staff",
        route: "/manage/user/admin-staff",
      },
      {
        name: "Customers",
        route: "/manage/user/customers",
      },
      {
        name: "Waiters",
        route: "/manage/user/waiters",
      },
      {
        name: "Role Groups",
        route: "/manage/user/roles-and-permissions",
      },
      {
        name: "Delivery User",
        route: "/manage/user/delivery-men",
      },
      {
        name: "New Delivery User",
        route: "/manage/user/delivery-request",
      },
    ],
  },
  {
    id: 4,
    name: "restaurant",
    icon:<RestaurantIcon/>,
    items: [
      {
        name: "Branches",
        route: "/manage/restaurant/branches",
      },
      {
        name: "Dept tags",
        route: "/manage/restaurant/dept-tags",
      },
      {
        name: "Tables",
        route: "/manage/restaurant/tables",
      },
      {
        name: "Tips",
        route: "/manage/restaurant/tips",
      },
      {
        name: "Payment Types",
        route: "/manage/restaurant/payment-type",
      },
    ],
  },
  {
    id: 5,
    name: "payment",
    icon:<PaymentsIcon/>,
    items: [
      {
        name: "Stripe",
      },
      {
        name: "Flutterwave",
      },
    ],
  },
  {
    id: 6,
    name: "sms settings",
    icon:<SmsIcon/>,
    items: [
      {
        name: "twillio",
      },
    ],
  },
  {
    id: 7,
    name: "settings",
    icon:<SettingsIcon/>,
    items: [
      {
        name: "Currencies",
      },
      {
        name: "Websites",
      },
      {
        name: "Languages",
      },
      {
        name: "Email/smtp",
      },
      {
        name: "General Settings",
      },
      {
        name: "Show Deliverymen",
      },
      {
        name: "Show Manage Stock",
      },
      {
        name: "Google ReCAPTCHA",
      },
    ],
  },
];


export const FoodItemList = [
  {
      "id": 1,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 1",
      "group": "Pizza",
      "price": "88.81",
      "location": "Madurai",
      "variations": null
  },
  {
      "id": 2,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 2",
      "group": "Pizza",
      "price": "2.45",
      "location": "Madurai",
      "variations": null
  },
  {
      "id": 3,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 3",
      "group": "Pizza",
      "price": "56.40",
      "location": "Madurai",
      "variations": null
  },
  {
      "id": 4,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 4",
      "group": "Pizza",
      "price": "36.90",
      "location": "Madurai",
      "variations": [
          {
              "id": 1,
              "name": "Variation 1",
              "price": "2.64"
          },
          {
              "id": 2,
              "name": "Variation 2",
              "price": "9.23"
          },
          {
              "id": 3,
              "name": "Variation 3",
              "price": "6.37"
          },
          {
              "id": 4,
              "name": "Variation 4",
              "price": "4.50"
          },
          {
              "id": 5,
              "name": "Variation 5",
              "price": "7.13"
          }
      ]
  },
  {
      "id": 5,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 5",
      "group": "Pizza",
      "price": "72.99",
      "location": "Madurai",
      "variations": [
          {
              "id": 1,
              "name": "Variation 1",
              "price": "8.42"
          },
          {
              "id": 2,
              "name": "Variation 2",
              "price": "0.58"
          },
          {
              "id": 3,
              "name": "Variation 3",
              "price": "6.40"
          },
          {
              "id": 4,
              "name": "Variation 4",
              "price": "5.17"
          },
          {
              "id": 5,
              "name": "Variation 5",
              "price": "3.27"
          }
      ]
  },
  {
      "id": 6,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 6",
      "group": "Pizza",
      "price": "95.40",
      "location": "Madurai",
      "variations": null
  },
  {
      "id": 7,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 7",
      "group": "Pizza",
      "price": "18.68",
      "location": "Madurai",
      "variations": [
          {
              "id": 1,
              "name": "Variation 1",
              "price": "2.01"
          }
      ]
  },
  {
      "id": 8,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 8",
      "group": "Pizza",
      "price": "10.75",
      "location": "Madurai",
      "variations": null
  },
  {
      "id": 9,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 9",
      "group": "Pizza",
      "price": "42.13",
      "location": "Madurai",
      "variations": null
  },
  {
      "id": 10,
      "image": "https://khadyo.softtechdemo.com/api/public//images/food_item/1705318098-piz6png.png",
      "name": "Food Item 10",
      "group": "Pizza",
      "price": "17.65",
      "location": "Madurai",
      "variations": [
          {
              "id": 1,
              "name": "Variation 1",
              "price": "2.15"
          },
          {
              "id": 2,
              "name": "Variation 2",
              "price": "3.29"
          },
          {
              "id": 3,
              "name": "Variation 3",
              "price": "7.41"
          }
      ]
  }
]


export const FoodGroups = [
  {
      "id": 3,
      "name": "Pizza",
      "slug": "OMb-1701361190-pizza",
      "created_at": "2023-12-01T04:19:50.000000Z",
      "updated_at": "2023-12-01T04:19:50.000000Z"
  },
  {
      "id": 4,
      "name": "Burgers",
      "slug": "WFn-1705316211-burgers",
      "created_at": "2023-12-01T04:19:59.000000Z",
      "updated_at": "2024-01-15T10:56:51.000000Z"
  },
  {
      "id": 8,
      "name": "Sandwich",
      "slug": "6wT-1705380593-sandwich",
      "created_at": "2023-12-13T02:07:46.000000Z",
      "updated_at": "2024-01-16T04:49:53.000000Z"
  },
  {
      "id": 9,
      "name": "Fried Chicken",
      "slug": "dPE-1705316322-fried-chicken",
      "created_at": "2024-01-15T10:41:27.000000Z",
      "updated_at": "2024-01-15T10:58:42.000000Z"
  },
  {
      "id": 10,
      "name": "Soups",
      "slug": "srx-1705316280-soups",
      "created_at": "2024-01-15T10:58:00.000000Z",
      "updated_at": "2024-01-15T10:58:00.000000Z"
  },
  {
      "id": 11,
      "name": "Shawarma",
      "slug": "t5M-1705316289-shawarma",
      "created_at": "2024-01-15T10:58:09.000000Z",
      "updated_at": "2024-01-15T10:58:09.000000Z"
  },
  {
      "id": 12,
      "name": "Bangladeshi",
      "slug": "FII-1705316300-bangladeshi",
      "created_at": "2024-01-15T10:58:20.000000Z",
      "updated_at": "2024-01-15T10:58:20.000000Z"
  },
  {
      "id": 14,
      "name": "Biryani",
      "slug": "F8I-1705316463-biryani",
      "created_at": "2024-01-15T11:01:03.000000Z",
      "updated_at": "2024-01-15T11:01:03.000000Z"
  }
]

export const PropertiesGroups =  [
  {
      "id": 1,
      "name": "Spice Level",
      "slug": "jLm-1698839724-spice-level",
      "created_at": "2023-11-01T23:55:24.000000Z",
      "updated_at": "2023-11-01T23:55:24.000000Z"
  },
  {
      "id": 2,
      "name": "Salads",
      "slug": "hke-1698839997-salads",
      "created_at": "2023-11-01T23:59:57.000000Z",
      "updated_at": "2023-11-01T23:59:57.000000Z"
  },
  {
      "id": 3,
      "name": "Extras",
      "slug": "vN4-1698840089-extras",
      "created_at": "2023-11-02T00:01:29.000000Z",
      "updated_at": "2023-11-02T00:01:29.000000Z"
  },
  {
      "id": 6,
      "name": "Add Ons",
      "slug": "VJu-1705380733-add-ons",
      "created_at": "2024-01-16T04:52:13.000000Z",
      "updated_at": "2024-01-16T04:52:13.000000Z"
  }
]