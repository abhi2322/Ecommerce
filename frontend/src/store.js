import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk'
import { productDetailReducer, productListReucer } from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';

const intialState={
    cart:{
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    },
};

const reducer=combineReducers({
    productList:productListReucer,
    productDetails:productDetailReducer,
    cart:cartReducer
});

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(
    reducer,
    intialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;