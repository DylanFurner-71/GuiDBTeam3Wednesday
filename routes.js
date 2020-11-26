import Landing from './components/landing.jsx'
import Login from './components/login'
import RegisterUser from "./components/RegisterUser";
import RegisterDriver from "./components/RegisterDriver";
import RegisterWebManager from "./components/RegisterWebManager";
import RegisterEmployee from "./components/RegisterEmployee";
import WebManagerLanding from "./components/webManagerLanding";
import CustomerLanding from "./components/CustomerLanding";
import CustomerProfile from "./components/CustomerProfile";
import CustomerOrderHistory from './components/CustomerOrderHistory';
import RestaurantView from "./components/RestaurantView";
import RestaurantEmployeeLanding from "./components/RestaurantEmployeeLanding";
import OrderConfirmed from './components/OrderConfirmed';
import ViewCart from './components/ViewCart';
import Checkout from './components/Checkout';
import DriverDashboard from './components/DriverDashboard.jsx';

export const ROUTES = [
    // Misc.
    { path: `/menu/:restaurantId`, component: RestaurantView },

    // Order
    { path: `/order/cart`, component: ViewCart },
    { path: `/order/checkout`, component: Checkout },
    { path: `/order/confirmed/:customerId`, component: OrderConfirmed },

    // Customer Page Routes
    { path: '/customer/profile', component: CustomerProfile }, // TEMP
    { path: '/customer/:customerId/profile', component: CustomerProfile },
    { path: '/customer/past-orders', component: CustomerOrderHistory }, // TEMP
    { path: '/customer/:customerId/past-orders', component: CustomerOrderHistory },

    // Home Page Routes
    { path: '/employee/home', component:  RestaurantEmployeeLanding },
    { path: '/web-manager/home', component: WebManagerLanding },

    // Driver Dashboard route
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