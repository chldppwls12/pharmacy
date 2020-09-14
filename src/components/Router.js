import React from 'react';
import { HashRouter , Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import Map from './Map';

class Router extends React.Component{
    render(){
        const { information } = this.props;
        return(
            <HashRouter>
                    <Switch>
                        <Route 
                            exact path="/" 
                            render={() => <MainPage information={information} />} 
                        />
                        <Route 
                            path="/map/:id" 
                            render={() => <Map information={information} />}
                        />  
                        <Redirect from="*" to="/" />
                    </Switch>
            </HashRouter>
        )
    }
}

export default Router;