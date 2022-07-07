import * as React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {FormElements, Gallery, GridAndCards, Icons, Other, Typography} from "./domain";
import {App} from "./App";

export default (
  <Routes>
    <Route path="/typography" element={<Typography/>}/>
    <Route path="/form-elements" element={<FormElements/>}/>
    <Route path="/icons" element={<Icons/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/grid-and-cards" element={<GridAndCards/>}/>
    <Route path="/other" element={<Other/>}/>
    <Route path="/" element={<App/>}/>

    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
);
