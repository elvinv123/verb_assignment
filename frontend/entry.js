import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../App.scss';
import {HashRouter, Route} from 'react-router-dom';

import store from './store';
import { addToCart, clearCart } from './actions';
import IndexContainer from './components/index_container';
import ProductPageContainer from './components/product_page_container';
import CartContainer from './components/cart_container';
import Header from './components/header';
import Footer from './components/footer';



// TODO just for testing!
window.store = store;
window.addToCart = addToCart;
window.clearCart = clearCart;

const App = () => (
	<div className="container">
	<HashRouter>
		<Header/>
			<Provider store={store}>
					<Route exact path="/index" component={IndexContainer} />
					<Route exact path="/product/:id" component={ProductPageContainer} />
					<Route exact path="/cart" component={CartContainer} />
			</Provider>
		<Footer/>
	</HashRouter>
	</div>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
