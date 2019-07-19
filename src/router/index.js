import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import App from '../App'
import Movie from '../Components/Movie'
import Music from '../Components/Music'
import Books from '../Components/Books'
import MovieDetail from '../Components/MovieDetail'

class RouteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={App}></Route>
                        <Route path="/movie" component={Movie}></Route>
                        <Route path="/music" component={Music}></Route>
                        <Route path="/books" component={Books}></Route>
                        <Route path="/Detail/:id" component={MovieDetail}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
 
export default RouteComponent;