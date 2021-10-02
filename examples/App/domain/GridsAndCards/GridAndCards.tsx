import * as React from "react";
import {UICard, UICardToolbar, UIGrid, UIHeader, UIPageContainer, UITags, UITypography} from "../../../../src";

export const GridAndCards = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                title={{value: "FormElements", skeleton: true}}
                imageUrl="https://leicht.io//assets/images/header-7.7f48e486decb2b9246586c0f33d03c942e25dcb23bb5f5d33dff9876f59ca2f9.jpg"/>
            <UIPageContainer>
                <UITypography type={'h3'}>Grid & Cards</UITypography>
                <UIGrid columns={'four'}>
                    <UICard title={"This is a very long title that is very long"} titleAlignment={"left"}
                            backgroundUrl={'https://ni.leicht.io/sunset_feggeklit.90238d8d3fba65a90cfd8d60beab1e230da73ed7_original.jpg'}>
                        <UICardToolbar
                            icons={[{
                                id: 'download',
                                onClick: () => {
                                    // eslint-disable-next-line no-console
                                    console.log('Clicked icon');
                                }
                            }, {
                                id: 'magnify',
                                onClick: () => {
                                    // eslint-disable-next-line no-console
                                    console.log('Clicked icon');
                                }
                            }]}/>
                    </UICard>

                    <UICard
                        backgroundUrl={'https://ni.leicht.io/sunset_feggeklit.90238d8d3fba65a90cfd8d60beab1e230da73ed7_original.jpg'}>
                        <UITags tags={[
                            {type: 'primary', name: '3D Print'},
                            {type: 'secondary', name: 'PCB'},
                        ]}/>
                    </UICard>

                    <UICard title={"title"}
                            backgroundUrl="https://ni.leicht.io/sunset_kaloe.34af0caa00ad06dacc6a578f5bc30bd748d10e1a_medium.jpg">
                        <UICardToolbar icons={[{
                            id: 'facebook',
                            onClick: () => {
                                // eslint-disable-next-line no-console
                                console.log('Clicked icon');
                            }
                        }]}/>
                    </UICard>

                    <UICard title={'This is also a very long title that is very long'}
                            backgroundUrl="https://ni.leicht.io/wadden_sea.0039e6c00cf93aed50f037fcfbdfa31f5517546e_original.jpg"/>
                </UIGrid>
            </UIPageContainer>
        </>
    );
}
