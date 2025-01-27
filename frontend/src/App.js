import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GetInvolved from './pages/GetInvolved';
import Learn from './pages/Learn';
import TakeAction from './pages/TakeAction';
import ExploreResources from './pages/ExploreResources';
import Donate from './pages/Donate';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/get-involved" component={GetInvolved} />
                <Route path="/learn" component={Learn} />
                <Route path="/take-action" component={TakeAction} />
                <Route path="/explore-resources" component={ExploreResources} />
                <Route path="/donate" component={Donate} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

