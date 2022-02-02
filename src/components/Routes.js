import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom';
import Results from './Results';
const Routes = () => {
    return (
        <div className="pt-0 p-4 mb-24">
            <Switch>
                <Route exact path="/search" element={<Results />} />
                <Route exact path="/images" element={<Results />} />
                <Route exact path="/news" element={<Results />} />
                <Route exact path="/videos" element={<Results />} />
            </Switch>
        </div>
    )
}

export default Routes
