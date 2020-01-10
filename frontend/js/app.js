import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import ViewHome from '~/js/views/ViewHome';

export default class App extends React.Component {
    render() {
        return (
            <div className="c-wrapper">
                <Router>
                    <Switch>
                        <Route path="/" render={({ match, location, history }) => {
                            if (!match.isExact) {
                                history.replace('/');
                            }
                            return <ViewHome/>;
                        }}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}
