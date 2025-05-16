
import React from 'react';
import PizzaSlice from '../../assets/pizza.svg';
import SubmarineSandwich from '../../assets/submarine.svg';
import Chicken from '../../assets/chicken.svg';
import Humburger from '../../assets/hamburger.svg';
import Beef from '../../assets/beef-svgrepo-com.svg';
import Bread from '../../assets/bread-svgrepo-com.svg';
import ChickenRoast from '../../assets/chicken-svgrepo-com.svg';
import userLogo from '../../assets/user-icon.svg'
import brandLogo from '../../assets/logo.svg'

const icons = {

    // Accesiblity Icon
    addIcon: (
        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
            />
        </svg>
    ),
    removeIcon: (
        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
            />
        </svg>
    ),
    filterIcon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-funnel-icon lucide-funnel"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" /></svg>
    ),
    // Nav Bar Icon
    userLogo: <img src={userLogo} alt="User Icon" className="h-10" />,
    brandLogo: <img src={brandLogo} alt="Logo" className="h-8 w-8" />,

    // Product Icon
    humBurgerIcon: <img src={Humburger} alt="Burger" className="w-10 h-10" />,
    submarineSandwichIcon: <img src={SubmarineSandwich} alt="Submarine Sandwich" className="w-10 h-10" />,
    pizzaSliceIcon: <img src={PizzaSlice} alt="Pizza" className="w-10 h-10" />,
    chicken: <img src={Chicken} alt="Chicken" className="w-10 h-10" />,
    beef: <img src={Beef} alt="Beef" className="w-10 h-10" />,
    bread: <img src={Bread} alt="Bread" className="w-10 h-10" />,
    chickenRoast: <img src={ChickenRoast} alt="Chicken Roast" className="w-10 h-10" />,
};

function Icon({ name, className }) {
    const icon = icons[name];
    if (React.isValidElement(icon)) {
        return React.cloneElement(icon, { className: className || icon.props.className });
    }
    return null;
}

export default Icon;
