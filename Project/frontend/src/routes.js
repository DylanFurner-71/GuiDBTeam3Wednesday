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
import RestaurantView from "./components/RestaurantView";
import RestaurantEmployeeLanding from "./components/RestaurantEmployeeLanding";
import OrderConfirmed from './components/OrderConfirmed';

export const ROUTES = [
    // Misc.
    { path: `/menu/:restName`, component: RestaurantView },
    { path: `/order/:restName`, component: RestaurantView },

    // Customer Page Routes
    { path: '/customer/profile', component: CustomerProfile }, // TEMP
    { path: '/customer/:customerId/profile', component: CustomerProfile },
    { path: '/customer/past-orders', component: CustomerOrderHistory }, // TEMP
    { path: '/customer/:customerId/past-orders', component: CustomerOrderHistory },
    { path: '/customer/order-confirmed/:orderId', component: OrderConfirmed }, // TEMP
    { path: '/customer/:customerId/order-confirmed/:orderId', component: OrderConfirmed },
    // Home Page Routes
    { path: '/employee/home', component:  RestaurantEmployeeLanding },
    { path: '/web-manager/home', component: WebManagerLanding },
    // TODO: Driver Home Page { path: '/driver/home', component:  },
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