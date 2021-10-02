import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {FormElements, Gallery, GridAndCards, Icons, Other, Typography} from "./domain";
import {App} from "./App";

export default (
    <Switch>
        <Route path="/typography" component={() => <Typography/>}/>
        <Route path="/form-elements" component={() => <FormElements/>}/>
        <Route path="/icons" component={() => <Icons/>}/>
        <Route path="/gallery" component={() => <Gallery/>}/>
        <Route path="/grid-and-cards" component={() => <GridAndCards/>}/>
        <Route path="/other" component={() => <Other/>}/>
        <Route path="/" component={() => <App/>}/>

        <Redirect to="/"/>
    </Switch>
);
