import React from 'react';
import '../App.css';
import Card from '../components/card'
import Header from '../components/header'
import CartContextProvider from '../context/CartContext';
import ProductContextProvider from '../context/ProductContext';


class ProductCard extends React.Component {
    
    render() {
        return (
            <div>
                <Header/>
                <Card/>   
            </div>      
        )
    }
}


export default ProductCard;