import * as React from "react";
import {UICard, UICardToolbar, UIGrid, UIHeader, UIPageContainer, UITags} from "../../../../src";
import {IoDownloadOutline} from "@react-icons/all-files/io5/IoDownloadOutline";
import {IoSearchOutline} from "@react-icons/all-files/io5/IoSearchOutline";
import {IoLogoFacebook} from "@react-icons/all-files/io5/IoLogoFacebook";

export const GridAndCards = (): React.ReactElement => {
    return (
        <>
            <UIHeader
                size="small"
                title={{value: "Grids & Cards", skeleton: true}}
                gradient={true}/>

            <UIPageContainer>
                <UIGrid columns={'four'}>
                    <UICard title={"This is a very long title that is very long"} titleAlignment={"left"}
                            backgroundUrl={'https://picsum.photos/500/500'}>
                        <UICardToolbar
                            icons={[{
                                id: <IoDownloadOutline/>,
                                onClick: () => {
                                    // eslint-disable-next-line no-console
                                    console.log('Clicked icon');
                                }
                            }, {
                                id: <IoSearchOutline/>,
                                onClick: () => {
                                    // eslint-disable-next-line no-console
                                    console.log('Clicked icon');
                                }
                            }]}/>
                    </UICard>

                    <UICard backgroundUrl={'https://picsum.photos/500/500'}>
                        <UITags tags={[
                            {type: 'primary', name: '3D Print'},
                            {type: 'secondary', name: 'PCB'},
                        ]}/>
                    </UICard>

                    <UICard title={"title"} backgroundUrl={'https://picsum.photos/500/500'}>
                        <UICardToolbar icons={[{
                            id: <IoLogoFacebook/>,
                            onClick: () => {
                                // eslint-disable-next-line no-console
                                console.log('Clicked icon');
                            }
                        }]}/>
                    </UICard>

                    <UICard title={'This is also a very long title that is very long'}
                            backgroundUrl={'https://picsum.photos/500/500'}/>
                </UIGrid>
            </UIPageContainer>
        </>
    );
}
