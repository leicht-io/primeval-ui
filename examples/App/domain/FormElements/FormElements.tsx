import * as React from "react";
import {UIButton, UIGrid, UIHeader, UIInput, UIPageContainer, UITextArea} from "../../../../src";

export const FormElements = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                breadcrumbs={"Home / Form Elements"}
                title="Form Elements"/>

            <UIPageContainer title="Buttons">
                <UIButton text="Primary Button" type="primary"/>
                <UIButton text="Danger Button" type="danger"/>
                <UIButton text="Success Button" type="success"/>
                <UIButton text="Disabled Button" type="success" disabled={true}/>
            </UIPageContainer>

            <UIPageContainer title="Inputs">
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
