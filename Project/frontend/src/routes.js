import RegisterUser from "./components/RegisterUser";
import RegisterDriver from "./components/RegisterDriver";
import RegisterWebManager from "./components/RegisterWebManager";
import RegisterEmployee from "./components/RegisterEmployee";
import {userTypes} from "./types/userTypes";
import WebManagerLanding from "./components/webManagerLanding";
import CustomerLanding from "./components/customerLanding";
import RestaurantEmployeeLanding from "./components/RestaurantEmployeeLanding";
export const ROUTES = [
    { path: `/${userTypes.Customer}/register`, component: RegisterUser},
    { path: `/${userTypes.Delivery}/register`, component: RegisterDriver},
    { path:`/${userTypes.WebManager}/register`, component: RegisterWebManager},
    { path:`/${userTypes.RestaurantEmployee}/register`, component: RegisterEmployee},
    { path:`/${userTypes.Customer}/home`, component: CustomerLanding},
    { path:`/${userTypes.WebManager}/home`, component: WebManagerLanding},
    { path:`/${userTypes.RestaurantEmployee}/home`, component: RestaurantEmployeeLanding},
]