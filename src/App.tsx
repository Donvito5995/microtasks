import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header/Header";
import {Body} from "./site/Body/Body";

function App() {
    return (
        <>
            <Header title={'New body'}/>
            <Body text={'Hello!!!!!'}/>
        </>
    );
}

export default App;
