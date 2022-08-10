import * as React from "react";
import {IGallery, UIGallery, UIPageContainer} from "../../../../src";
import {galleryMockResponse} from "../../../assets/gallery.mock";
import {useTimeout} from "../../../../src/@core";
import {UIHeader2} from "../../../../src/components/UIHeader2";

export const Gallery = (): React.ReactElement => {
  const [gallery, setGallery] = React.useState<IGallery | null>(null);

  useTimeout(() => {
    setGallery(galleryMockResponse);
  }, 1500);

  return (
    <>
      <UIHeader2 title="Gallery"/>

      <UIPageContainer>
        <UIGallery gallery={gallery} skeletons={12}/>
      </UIPageContainer>
    </>
  );
}
