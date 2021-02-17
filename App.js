import React from 'react';
import {Provider} from "react-redux";
import store from "./src/store/configureStore";
import Routes from "./src/Routes";

const App = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
};

export default App;