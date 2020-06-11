import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './app/layouts/MainLayout';
import Home from './app/pages/Home';
import Navigation from "./app/layouts/Navigation";
import Albums from './app/pages/Albums';
import Images from './app/pages/Images';

class App extends React.Component {
    render() {
        return (<Router>
            <Navigation/>
            <MainLayout>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/albums"} exact component={Albums}/>
                <Route path={"/images"} exact component={Images}/>
            </MainLayout>
        </Router>)
    }
}

export default App;
