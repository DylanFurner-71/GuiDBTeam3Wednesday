import Landing from './components/landing.jsx'
import Login from './components/login'
import RegisterUser from "./components/RegisterUser";
import RegisterDriver from "./components/RegisterDriver";
import RegisterWebManager from "./components/RegisterWebManager";
import RegisterEmployee from "./components/RegisterEmployee";
import WebManagerLanding from "./components/webManagerLanding";
import CustomerLanding from "./components/customerLanding";
import CustomerProfile from "./components/CustomerProfile";
import CustomerOrderHistory from './components/CustomerOrderHistory';
import RestaurantOrderHistory from './components/RestaurantOrderHistory';
import RestaurantView from "./components/RestaurantView";
import RestaurantEmployeeLanding from "./components/RestaurantEmployeeLanding";
import OrderConfirmed from './components/OrderConfirmed';
import ViewCart from './components/ViewCart';
import Checkout from './components/Checkout';
import DriverDashboard from './components/DriverDashboard';
import DriverCurrentOrder from './components/DriverCurrentOrder';
import WebManagerRestaurants from "./components/WebManagerRestaurants";
import WebManagerUsers from "./components/WebManagerUsers";
import MenuView from './components/MenuView.jsx';
import EmployeeOrders from "./components/EmployeeOrders";
import WebManagerReviewList from './components/WebManagerReviewList.jsx';
import CustomerReviewList from './components/CustomerReviewList.jsx';

export const ROUTES = [
    // Employee 
    { path: `/employee/orders/:restaurantId`, component: EmployeeOrders},
    { path: `/employee/menu/:restaurantId/`, component: MenuView},
    
    // Misc.
    { path: `/menu/:restaurantId`, component: RestaurantView },
    { path: `/restaurant/:restaurantId/past-orders`, component: RestaurantOrderHistory },

    // Web Manager
    { path: `/web-manager/restaurants`, component: WebManagerRestaurants },
    { path: `/web-manager/restaurant/:restaurantId`, component: WebManagerReviewList },
    { path: `/web-manager/users`, component: WebManagerUsers },

    // Driver
    { path: `/driver/order/:orderId`, component: DriverCurrentOrder },

    // Order
    { path: `/order/cart`, component: ViewCart },
    { path: `/order/checkout`, component: Checkout },
    { path: `/order/confirmed/:restaurantId/:orderId`, component: OrderConfirmed },

    // Customer Page Routes
    { path: '/customer/profile', component: CustomerProfile },
    { path: '/customer/past-orders', component: CustomerOrderHistory },
    { path: `/customer/restaurant/:restaurantId`, component: CustomerReviewList },

    // Home Page Routes
    { path: '/employee/home', component:  RestaurantEmployeeLanding },
    { path: '/web-manager/home', component: WebManagerLanding },
    { path: '/driver/home', component: DriverDashboard},
    { path: '/customer/home', component: CustomerLanding },
    
    // Register Page Routes
    { path: '/employee/register', component: RegisterEmployee },
    { path: '/web-manager/register', component: RegisterWebManager },
    { path: '/driver/register', component: RegisterDriver },
    { path: '/customer/register', component: RegisterUser },

    // Landing/Login
    { path: '/login', component: Login },
    { path: '/home', component: Landing },
    { path: '/', component: Landing }
]