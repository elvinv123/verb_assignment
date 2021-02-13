import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../App.scss';

import store from './store';
import { addToCart, clearCart } from './actions';
import IndexContainer from './components/index_container';
import Header from './components/header';
import Footer from './components/footer';



// TODO just for testing!
window.store = store;
window.addToCart = addToCart;
window.clearCart = clearCart;

const App = () => (
	<div className="container">
		<Header/>
			<Provider store={store}>
					<IndexContainer />
			</Provider>
		<Footer/>
	</div>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	);
});
