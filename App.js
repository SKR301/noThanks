import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home';

class App extends Component {
	
    render = () => {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home}/>
					{/* <Route path="/single" component={Single}/>
					<Route path="/multi" component={Multi}/>
					<Route path="/bot" component={Bot}/> */}
				</Switch>
			</Router>
		);
	}
}

export default App;