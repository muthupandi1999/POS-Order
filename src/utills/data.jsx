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
