import RegisterUser from "./components/RegisterUser";
import RegisterDriver from "./components/RegisterDriver";
import RegisterWebManager from "./components/RegisterWebManager";
import RegisterEmployee from "./components/RegisterEmployee";
import {userTypes} from "./types/userTypes";
import WebManagerLanding from "./components/webManagerLanding";
import CustomerLanding from "./components/customerLanding";
import RestaurantEmployeeLanding from "./components/RestaurantEmployeeLanding";
export const ROUTES = [
    { path: `/register/${userTypes.Customer}`, component: RegisterUser},
    { path: `/register/${userTypes.Delivery}`, component: RegisterDriver},
    { path:`/register/${userTypes.WebManager}`, component: RegisterWebManager},
    { path:`/register/${userTypes.RestaurantEmployee}`, component: RegisterEmployee},
    { path:`/${userTypes.Customer}/home`, component: CustomerLanding},
    { path:`/${userTypes.WebManager}/home`, component: WebManagerLanding},
    { path:`/${userTypes.RestaurantEmployee}/home`, component: RestaurantEmployeeLanding},
]