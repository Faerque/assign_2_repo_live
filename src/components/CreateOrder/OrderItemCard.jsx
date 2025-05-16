import React from 'react';
import Icon from '../shared/Icon';

function OrderItemCard({ title, price, iconName, action, bgWrap = '', onAction }) {
    return (
        <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
            <div className="flex items-center">
                <div className={`w-12 h-12 ${bgWrap} rounded-md flex items-center justify-center mr-3`}>
                    <Icon name={iconName} />
                </div>
                <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-xs text-gray-400">{price}</p>
                </div>
            </div>
            <button
                onClick={onAction}
                className="w-8 h-8 cursor-pointer bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
            >
                <Icon name={action} />
            </button>
        </div>
    );
}

export default OrderItemCard;
