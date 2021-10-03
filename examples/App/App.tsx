import React from 'react';
import {ISlide, UISlider} from '../../src';
import {sliderMockResponse} from '../assets/slider.mock';
import {useTimeout} from "../../src/@core";

export const App = (): React.ReactElement => {
    const [slides, setSlides] = React.useState<ISlide[] | null>(null);

    useTimeout(() => {
        setSlides(sliderMockResponse);
    }, 1500)

    return (
        <>
            <UISlider slides={slides}/>
        </>
    );
};
