import * as React from "react";
import {UIButton, UIGrid, UIHeader, UIInput, UIPageContainer, UITextArea, UITypography} from "../../../../src";

export const FormElements = (): React.ReactElement => {
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
