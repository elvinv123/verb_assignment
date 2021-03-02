import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styling/App.scss';
import {HashRouter, Route} from 'react-router-dom';

import store from './store';
import IndexContainer from './components/index_container';
import ProductPageContainer from './components/product_page_container';
import CartContainer from './components/cart_container';
import OrderConfirmation from './components/order_confirmation';
import HeaderContainer from './components/header_container';
import Footer from './components/footer';

window.store = store

const App = () => (
	<div className="container">
	<HashRouter>
			<Provider store={store}>
					<HeaderContainer/>
					<Route exact path="/" component={IndexContainer} />
					<Route exact path="/product/:id" component={ProductPageContainer} />
					<Route exact path="/cart" component={CartContainer} />
					<Route exact path="/order" component={OrderConfirmation} />
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
