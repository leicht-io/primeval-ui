import * as React from "react";
import {UIHeader, UIPageContainer, UITypography} from "../../../../src";
import {useTimeout} from "../../../../src/@core";

export const Typography = (): React.ReactElement => {
    const [text, setText] = React.useState<string | null>(null);

    useTimeout(() => {
        setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum            dolore eu fugiat            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia            deserunt mollit            anim id est laborum.")
    }, 2500);

    return (
        <>
            <UIHeader
                size="small"
                gradient={true}
                title={{value: "Typography", skeleton: true}}/>

            <UIPageContainer>
                <UITypography type={'h3'}>Typography</UITypography>
                <UITypography type={'h1'}>Heading 1</UITypography>
                <UITypography type={'h2'}>Heading 2</UITypography>
                <UITypography type={'h3'}>Heading 3</UITypography>
                <UITypography type={'h4'}>Heading 4</UITypography>
                <UITypography type={'h5'}>Heading 5</UITypography>
                <UITypography type={'h6'}>Heading 6</UITypography>
                <UITypography type={'p'} skeleton={!text}>{text}</UITypography>
                <UITypography type={'p'}>Lorem upsim with an <a href="#">anchor</a>.</UITypography>
            </UIPageContainer>
        </>
    );
}
