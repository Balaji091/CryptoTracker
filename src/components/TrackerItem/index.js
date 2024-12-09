import React from 'react';
import './index.css';

function  TrackerItem(props)  {
    const{itemDetails}=props;
    const{currency_name,usd_value,euro_value,id,currency_logo}=itemDetails;
    return (
        <div className="crypto-card">
            <img
                src={currency_logo} // Example Bitcoin logo
                alt="Bitcoin Logo"
                className="crypto-logo"
            />
            <span className="crypto-name">{currency_name}</span>
            <span className="crypto-price">{usd_value}</span>
            <span className="crypto-price">{euro_value}</span>
        </div>
    );
};

export default TrackerItem;
