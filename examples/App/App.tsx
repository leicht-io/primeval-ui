import React from 'react';
import {ISlide, UISlider} from '../../src';
import {sliderMockResponse} from '../assets/slider.mock';

export const App = (): React.ReactElement => {
    const [slides, setSlides] = React.useState<ISlide[] | null>(null);

    React.useEffect(() => {
        setTimeout(() => {
            setSlides(sliderMockResponse);
        }, 2500);
    }, []);

    return (
        <>
            <UISlider slides={slides} basePath={'https://ni.leicht.io/'}/>
        </>
    );
};
