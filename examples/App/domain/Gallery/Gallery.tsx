import * as React from "react";
import {IGallery, UIGallery, UIHeader, UIPageContainer} from "../../../../src";
import {galleryMockResponse} from "../../../assets/gallery.mock";

export const Gallery = (): React.ReactElement => {
    const [gallery, setGallery] = React.useState<IGallery | null>(null);

    React.useEffect(() => {
        setTimeout(() => {
            setGallery(galleryMockResponse);
        }, 2500);
    }, []);

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
