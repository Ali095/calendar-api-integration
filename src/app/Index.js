import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import { Nav, Alert } from '@/_components';
import { Home } from '@/home';
import { Users } from '@/users';
import { Meetings } from '@/meeting';

function logout() {
    useEffect(() => { localStorage.clear(); });
    return (<Redirect to="/" />)
}

function App() {
    const { pathname } = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Switch>
                    <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/meetings" component={Meetings} />
                    <Route path="/logout" component={logout} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
}

export default App; 