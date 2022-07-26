import { Component } from 'react';

import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/nav/Header';
import Footer from './components/nav/Footer';

import Home from './pages/Home';
import Team from './pages/Team';
import Changelog from './pages/Changelog';
import FAQ from './pages/FAQ';

import PageNotFound from './pages/PageNotFound';

import BackgroundGradient from './components/bg/BackgroundGradient';

class PlayCover extends Component {

    render() {
        return (
            <div className="flex flex-col antialiased transition-colors duration-500 min-h-screen bg-light dark:text-white dark:bg-dark">
                <div className="flex-grow">
                    <Header {...this.props}/>

                    <Switch>
                        <Route exact path='/' render={(props) => <Home {...props} {...this.props}/>}/>
                        <Route exact path='/team' render={(props) => <Team {...props} {...this.props}/>}/>
                        <Route exact path='/changelog' render={(props) => <Changelog {...props} {...this.props}/>}/>
                        <Route exact path='/faq' render={(props) => <FAQ {...props} {...this.props}/>}/>

                        <Route exact path='/discord' render={() => {
                            window.location.replace('https://discord.gg/PlayCover');
                            return null;
                        }}/>
                        <Route exact path='/download' render={() => {
                            window.location.replace('https://github.com/PlayCover/PlayCover/releases/latest');
                            return null;
                        }}/>

                        <Route render={(props) => <PageNotFound {...props}/>}/>
                    </Switch>

                    <BackgroundGradient theme="light" location="left"/>
                    <BackgroundGradient theme="light" location="right"/>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default withRouter(PlayCover);