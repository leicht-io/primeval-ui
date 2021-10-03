import * as React from "react";
import {IGallery, UIGallery, UIHeader, UIPageContainer} from "../../../../src";
import {galleryMockResponse} from "../../../assets/gallery.mock";
import {useTimeout} from "../../../../src/@core";

export const Gallery = (): React.ReactElement => {
    const [gallery, setGallery] = React.useState<IGallery | null>(null);

    useTimeout(() => {
        setGallery(galleryMockResponse);
    }, 1500);

    return (
        <>
            <UIHeader
                size={"small"}
                title={{value: "Gallery", skeleton: true}}
                gradient={true}/>

            <UIPageContainer>
                <UIGallery baseUrl="https://ni.leicht.io/" gallery={gallery} skeletons={12}/>
            </UIPageContainer>
        </>
    );
}
