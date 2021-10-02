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
                title={{value: "Gallery", skeleton: true}}
                imageUrl="https://leicht.io//assets/images/header-7.7f48e486decb2b9246586c0f33d03c942e25dcb23bb5f5d33dff9876f59ca2f9.jpg"/>
            <UIPageContainer>
                <UIGallery baseUrl="https://ni.leicht.io/" gallery={gallery} skeletons={12}/>
            </UIPageContainer>
        </>
    );
}
