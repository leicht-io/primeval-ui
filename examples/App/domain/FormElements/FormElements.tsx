import * as React from "react";
import {UIButton, UIGrid, UIHeader, UIInput, UIPageContainer, UITextArea, UITypography} from "../../../../src";

export const FormElements = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                size={"small"}
                gradient={true}
                breadcrumbs={"Home / Form Elements"}
                title={{value: "Form Elements", skeleton: true}}/>
            <UIPageContainer>
                <UITypography type="h3">Buttons</UITypography>

                <UIButton text="Primary Button" type="primary"/>
                <UIButton text="Danger Button" type="danger"/>
                <UIButton text="Success Button" type="success"/>
                <UIButton text="Disabled Button" type="success" disabled={true}/>

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
            </UIPageContainer>
        </>
    );
}
