import React, { Component } from 'react'
import Title from '../Title';
import { ProductConsumer } from '../../context';
import CartColumns from './CartColumns'
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                   {value => {
                       const { cart } = value;
                       if (cart.length > 0) {
                           return (
                           <React.Fragment>
                               <Title name="your" title="cart" />
                               <CartColumns />
                               <CartList value={value} history={this.props.history}/>
                               <CartTotals value={value} history={this.props.history}/>
                           </React.Fragment>
                           );
                       } else {
                           return <EmptyCart />
                       }
                   }}
               </ProductConsumer>
           </section> 
        )
    }
}
