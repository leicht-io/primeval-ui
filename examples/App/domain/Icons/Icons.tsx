import * as React from "react";
import {UIGrid, UIHeader, UIIcon, UIPageContainer} from "../../../../src";

export const Icons = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                size="small"
                gradient={true}
                title={{value: "Icons", skeleton: true}}/>

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
