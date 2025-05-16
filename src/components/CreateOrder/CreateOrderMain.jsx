import React, { useState } from 'react';
import OrderItemCard from './OrderItemCard';
import ProductList from '../ProductList.json';

function CreateOrderMain({ placedOrder, setPlacedOrder }) {
    const [customerName, setCustomerName] = useState('');
    const [nameError, setNameError] = useState('');
    const [cartItem, setCartItem] = useState([]);

    const handleToggleItem = (item) => {
        const exists = cartItem.find((order) => order.name === item.name);
        if (exists) {
            setCartItem(cartItem.filter((order) => order.name !== item.name));
        } else {
            setCartItem([...cartItem, item]);
        }
    };

    const isItemInCart = (name) =>
        Array.isArray(cartItem) && cartItem.some((order) => order.name === name);

    const validateName = (name) => {
        if (!name.trim()) return 'Name is required!';
        if (!/^[A-Za-z\s]+$/.test(name)) return 'Please use alphabet for Customer name.';
        const characterCount = name.replace(/\s+/g, '');
        if (characterCount.length < 3) return 'Customer name must be at least 3 characters.';
        return '';
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setCustomerName(value);
        setNameError(validateName(value));
    };

    const capitalizeName = (name) =>
        name
            .trim()
            .split(/\s+/)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');


    const handlePlaceOrder = () => {
        const error = validateName(customerName.trim());
        setNameError(error);

        if (!error && cartItem.length > 0) {
            const newOrder = {
                id: placedOrder.length + 1,
                customer: capitalizeName(customerName),
                items: cartItem,
                status: 'PENDING',
                createdAt: new Date().toISOString(),
            };

            setPlacedOrder([...placedOrder, newOrder]);
            setCustomerName('');
            setCartItem([]);
        }
    };

    const isPlaceOrderDisabled = nameError !== '' || cartItem.length === 0;

    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">
                Accurately fulfill customer orders based on a precise understanding of their requirements.
            </p>

            {/* Customer Name */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={handleNameChange}
                    className={`w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 ${nameError ? 'focus:ring-red-500' : 'focus:ring-primary'
                        } transition-all duration-300`}
                />
                {nameError && <span className="text-red-500 text-xs">{nameError}</span>}
            </div>

            {/* Item List */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Choose Items</label>
                <div className="items-container space-y-3">
                    {ProductList.map((item, index) => {
                        const isAdded = isItemInCart(item.name);
                        return (
                            <OrderItemCard
                                key={index}
                                title={item.name}
                                price={`BDT ${item.price}`}
                                iconName={item.iconName}
                                action={isAdded ? 'removeIcon' : 'addIcon'}
                                bgWrap={item.bgWrap}
                                onAction={() => handleToggleItem(item)}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Place Order */}
            <button
                onClick={handlePlaceOrder}
                disabled={isPlaceOrderDisabled}
                title={isPlaceOrderDisabled ? 'Please enter valid customer name and select items' : ''}
                className={`w-full text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
        ${isPlaceOrderDisabled
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-primary hover:bg-opacity-90 cursor-pointer'
                    }`}
            >
                Place Order ({`BDT ${cartItem.reduce((sum, item) => sum + item.price, 0)}`})
            </button>
        </div>
    );
}

export default CreateOrderMain;
