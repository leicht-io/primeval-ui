import React from 'react';
import appRoutes from './App/App.routes';
import {BrowserRouter} from 'react-router-dom';
import {UIFooter} from "../src";
import {SocialIcon} from "../src/components/UIFooter/types";
import {createRoot} from 'react-dom/client';
import {UIRoot} from "../src/components/UIRoot";
import {Menu} from "./assets/menu";

const Application = (): React.ReactElement => {
    const socialIcons: SocialIcon[] = [
        {text: "GitHub", link: "https://github.com", icon: "github"},
        {text: "Instagram", link: "https://instagram.com", icon: "instagram"},
        {text: "Facebook", link: "https://facebook.com", icon: "facebook"}
    ]

    return (
        <React.StrictMode>
            <BrowserRouter>
                <UIRoot menu={Menu}>

                    {appRoutes}

                    <UIFooter
                        text="© 2022 Primeval UI"
                        socialIcons={socialIcons}
                    />
                </UIRoot>
            </BrowserRouter>
        </React.StrictMode>
    )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Application/>);
