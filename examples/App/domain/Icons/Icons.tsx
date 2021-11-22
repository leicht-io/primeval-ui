import * as React from "react";
import {UIGrid, UIHeader, UIPageContainer} from "../../../../src";

export const Icons = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                size="small"
                gradient={true}
                title={{value: "Icons", skeleton: true}}/>

            <UIPageContainer>
                <UIGrid columns={'four'}>

                </UIGrid>
            </UIPageContainer>
        </>
    );
}
