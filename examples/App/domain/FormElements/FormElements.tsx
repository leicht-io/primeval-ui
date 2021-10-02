import * as React from "react";
import {UIButton, UIGrid, UIHeader, UIInput, UIPageContainer, UITextArea, UITypography} from "../../../../src";

export const FormElements = (): React.ReactElement => {
    const [text, setText] = React.useState<string | null>(null);

    React.useEffect(() => {
        setTimeout(() => {
            setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum            dolore eu fugiat            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia            deserunt mollit            anim id est laborum.")
        }, 2500);
    }, []);

    return (
        <>
            <UIHeader
                title={{value: "Form Elements", skeleton: true}}
                imageUrl="https://leicht.io//assets/images/header-7.7f48e486decb2b9246586c0f33d03c942e25dcb23bb5f5d33dff9876f59ca2f9.jpg"/>

            <UIPageContainer>
                <UITypography type="h3">Buttons</UITypography>

                <UIButton text="Primary Button" type="primary"/>
                <UIButton text="Danger Button" type="danger"/>
                <UIButton text="Success Button" type="success"/>
                <UIButton text="Disabled Button" type="success" disabled={true}/>
            </UIPageContainer>

            <UIPageContainer>
                <UITypography type={'h3'}>Inputs</UITypography>

                <UIGrid columns={"two"}>
                    <UIInput
                        tabIndex={1}
                        label={'Input Label'}
                        onChange={(value: string) => {
                            // eslint-disable-next-line no-console
                            console.log('Value:', value);
                        }}/>
                    <UIInput
                        tabIndex={2}
                        label={'Input Label'}
                        onChange={(value: string) => {
                            // eslint-disable-next-line no-console
                            console.log('Value:', value);
                        }}/>
                </UIGrid>

                <UITextArea
                    tabIndex={3}
                    label={'Input Label'}
                    onChange={(value: string) => {
                        // eslint-disable-next-line no-console
                        console.log('Value:', value);
                    }}/>

                <UIButton text="Primary Button" type="primary" disabled={true}/>
            </UIPageContainer>
        </>
    );
}
