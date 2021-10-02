import * as React from "react";
import {IGallery, UIButton, UIGallery, UIHeader, UIPageContainer, UITypography} from "../../../../src";
import {galleryMockResponse} from "../../../assets/gallery.mock";
import {sliderMockResponse} from "../../../assets/slider.mock";

export const Gallery = (): React.ReactElement => {
    const [text, setText] = React.useState<string | null>(null);
    const [gallery, setGallery] = React.useState<IGallery | null>(null);

    React.useEffect(() => {
        setTimeout(() => {
            setGallery(galleryMockResponse);

            setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum            dolore eu fugiat            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia            deserunt mollit            anim id est laborum.")
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
