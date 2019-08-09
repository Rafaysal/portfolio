import React from 'react';
import {LandingPage} from './LandingPage'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Resume} from './Resume'
import {ContactInfo} from './ContactInfo'
import {Projects} from './Projects'

export const Main = () => {
    return (<Switch>
        <Route exact path = '/portfolio' component = {LandingPage}/>
        <Route path = '/resume' component = {Resume}/>
        <Route path ='/projects' component = {Projects}/>
        <Route path ='/contactInfo' component = {ContactInfo}/>
        
            </Switch>)
}