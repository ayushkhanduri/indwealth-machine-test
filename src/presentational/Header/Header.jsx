import React,{Component} from 'react';

const HeaderUI=({numOfFunds=0}) => (
    <div style={{color:"#000"}}>
        <h1>Explore Funds </h1>
        <p> Showing {numOfFunds} funds</p>
    </div>
);

export default HeaderUI;