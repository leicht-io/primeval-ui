import {IMenuItem} from '../../src';
import {IoHomeOutline} from "@react-icons/all-files/io5/IoHomeOutline";
import React from 'react';
import {IoTextOutline} from "@react-icons/all-files/io5/IoTextOutline";
import {IoDocumentOutline} from "@react-icons/all-files/io5/IoDocumentOutline";
import {IoPieChartOutline} from "@react-icons/all-files/io5/IoPieChartOutline";
import {IoImagesOutline} from "@react-icons/all-files/io5/IoImagesOutline";
import {IoCardOutline} from "@react-icons/all-files/io5/IoCardOutline";
import {IoHelpCircle} from "@react-icons/all-files/io5/IoHelpCircle";
import {IoImageOutline} from "@react-icons/all-files/io5/IoImageOutline";

export const Menu: IMenuItem[] = [
    {
        title: 'Home',
        link: '/',
        icon: <IoHomeOutline/>
    }, {
        title: 'Typography',
        link: '/typography',
        icon: <IoTextOutline/>
    }, {
        title: 'Form Elements',
        link: '/form-elements',
        icon: <IoDocumentOutline/>
    }, {
        title: 'Icons',
        link: '/icons',
        icon: <IoPieChartOutline/>
    }, {
        title: 'Gallery',
        link: '/gallery',
        icon: <IoImagesOutline/>,
        menuItems: [{
            title: "Gallery #1",
            link: '/gallery',
            icon: <IoImageOutline/>,
        }]
    }, {
        title: 'Grids & Cards',
        link: '/grid-and-cards',
        icon: <IoCardOutline/>,

    }, {
        title: 'Post',
        link: '/post',
        icon: <IoDocumentOutline/>

    }, {
        title: 'Other',
        link: '/other',
        icon: <IoHelpCircle/>,
    }
];
