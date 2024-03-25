import {IMenuItem} from '../../src';
import {BiSpreadsheet} from "react-icons/bi";
import * as React from "react";

export const Menu: IMenuItem[] = [
    {
        title: 'Home',
        link: '/',
        active: true,
        icon: "home-alt"
    }, {
        title: 'Typography',
        link: '/typography',
        icon: "home-alt"
    }, {
        title: 'Elements',
        link: '/elements',
        icon: "cable-car",
        menuItems: [{
            title: 'Icons',
            link: '/icons',
            icon: <BiSpreadsheet/>,
        }        ]
    }, {
        title: 'Forms',
        link: '/form-elements',
        icon: "cable-car",

    }, {
        title: 'Icons',
        link: '/icons',
        icon: "cable-car",
    }, {
        title: 'Gallery',
        link: '/gallery',
        icon: "cable-car",
    }, {
        title: 'Cards',
        link: '/grid-and-cards',
        icon: "cable-car",
    }, {
        title: 'Other',
        link: '/other',
        icon: "cable-car",
    }
];
