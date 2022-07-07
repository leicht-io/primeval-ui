import React from 'react';
import appRoutes from './App/App.routes';
import {BrowserRouter} from 'react-router-dom';
import {Root} from "./App/domain";
import {UIFooter} from "../src";
import {SocialIcon} from "../src/components/UIFooter/types";
import {createRoot} from 'react-dom/client';

const Application = (): React.ReactElement => {
  const socialIcons: SocialIcon[] = [
    {text: "GitHub", link: "https://github.com", icon: "github"},
    {text: "Instagram", link: "https://instagram.com", icon: "instagram"},
    {text: "Facebook", link: "https://facebook.com", icon: "facebook"}
  ]

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Root>
          {appRoutes}

          <UIFooter
            left={{text: "\u00a9 Copyright 2021"}}
            right={{
              text: "Contact",
              link: "#contact"
            }}
            socialIcons={socialIcons}
          />
        </Root>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Application/>);
