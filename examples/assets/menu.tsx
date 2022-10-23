import {IMenuItem} from '../../src';
import {BiSpreadsheet} from "react-icons/bi";
import * as React from "react";
import {logo} from './logo';

export const Menu: IMenuItem[] = [
    {
        title: 'Home',
        link: '/',
        active: true,
        icon: logo
    }, {
        title: 'Typography',
        link: '/typography',
        icon: <BiSpreadsheet/>
    }, {
        title: 'Elements',
        link: '/elements',
        icon: <BiSpreadsheet/>,
        menuItems: [{
            title: 'Icons',
            link: '/icons',
            icon: <BiSpreadsheet/>,
        }        ]
    }, {
        title: 'Forms',
        link: '/form-elements',
        icon: <BiSpreadsheet/>

    }, {
        title: 'Icons',
        link: '/icons',
        icon: <BiSpreadsheet/>

    }, {
        title: 'Gallery',
        link: '/gallery',
        icon: <BiSpreadsheet/>

    }, {
        title: 'Cards',
        link: '/grid-and-cards',
        icon: <BiSpreadsheet/>

    }, {
        title: 'Other',
        link: '/other',
        icon: <BiSpreadsheet/>
    }/* , {
        primaryButton: true,
        title: 'Button Text',
        link: '/shop'
    } */
];
