import {IMenuItem} from '../../src';

export const Menu: IMenuItem[] = [
    {
        title: 'Home',
        link: '/',
        active: true,
    }, {
        title: 'Typography',
        link: '/typography'
    }, {
        title: 'Form Elements',
        link: '/form-elements'
    }, {
        title: 'Icons',
        link: '/icons'
    }, {
        title: 'Gallery',
        link: '/gallery'
    }, {
        title: 'Grids & Cards',
        link: '/grid-and-cards'
    }, {
        title: 'Other',
        link: '/other'
    }, {
        primaryButton: true,
        title: 'Button Text',
        link: '/shop'
    }
];
