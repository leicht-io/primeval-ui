import React from 'react';
import {render} from 'react-dom';
import appRoutes from './App/App.routes';
import {BrowserRouter} from 'react-router-dom';
import {Root} from "./App/domain";
import {UIFooter} from "../src";

const Application = (): React.ReactElement => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Root>
                    {appRoutes}

                    <UIFooter
                        leftText="Copyright 2021"
                        rightText="Contact"
                        socialIcons={[{text: "GitHub", link: "", icon: "github"}]}
                    />
                </Root>
            </BrowserRouter>
        </React.StrictMode>
    )
}

render(<Application/>, document.getElementById('root'));
