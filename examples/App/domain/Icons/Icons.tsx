import * as React from "react";
import {UIGrid, UIHeader, UIIcon, UIPageContainer} from "../../../../src";

export const Icons = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                title={{value: "Icons", skeleton: true}}
                imageUrl="https://leicht.io//assets/images/header-7.7f48e486decb2b9246586c0f33d03c942e25dcb23bb5f5d33dff9876f59ca2f9.jpg"/>
            <UIPageContainer>
                <UIGrid columns={'four'}>
                    <UIIcon icon={'github'} size={'lg'}/>
                    <UIIcon icon={'instagram'} size={'lg'}/>
                    <UIIcon icon={'facebook'} size={'lg'}/>
                    <UIIcon icon={'landscape'} size={'lg'}/>
                    <UIIcon icon={'usa'} size={'lg'}/>
                    <UIIcon icon={'close'} size={'lg'}/>
                    <UIIcon icon={'threeDModel'} size={'lg'}/>
                    <UIIcon icon={'electronics'} size={'lg'}/>
                    <UIIcon icon={'mail'} size={'lg'}/>
                    <UIIcon icon={'phone'} size={'lg'}/>
                    <UIIcon icon={'chevronDown'} size={'lg'}/>
                    <UIIcon icon={'hamburger'} size={'lg'}/>
                    <UIIcon icon={'close'} size={'lg'}/>
                    <UIIcon icon={'closeSquare'} size={'lg'}/>
                    <UIIcon icon={'magnify'} size={'lg'}/>
                    <UIIcon icon={'download'} size={'lg'}/>
                </UIGrid>
            </UIPageContainer>
        </>
    );
}
