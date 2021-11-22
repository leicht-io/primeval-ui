import {IProps} from './types';
import React from 'react';
import './UISlider.scss';
import Glide from '@glidejs/glide';
import {UILoader} from '../UILoader';
import {ISlide} from '../../types';

// TODO: Use React integration of Glide.
// TODO: use animations
export const UISlider = (props: IProps): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
  const [slider]: Glide = React.useState<Glide>(new Glide('.glide', {
    startAt: 0,
    hoverPause: true,
    type: 'carousel'
  }));

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    return () => slider.destroy();
  }, []);

  React.useEffect(() => {
    if (props.slides) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      slider.mount();
    }
  }, [props.slides]);

  const getSlideImageUrl = (slide: ISlide): string => {
    let url: string = (props.basePath ? props.basePath : '');

    if (typeof slide.headerImage === 'string') {
      url += slide.headerImage;
    } else {
      url += slide.headerImage.fullSize.path;
    }

    return url;
  };

  if (!props.slides) {
    return (
      <div className={ 'glide' + (props.inCard ? ' glide--in-card' : '') }>
        <UILoader size="small" color="light" />
      </div>
    );
  } else {
    return (
      <div className={ 'glide' + (props.inCard ? ' glide--in-card' : '') }>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {props.slides.map((slide, index) => {
              return (
                <li
                  className="glide__slide slider-frame"
                  key={ index }
                  style={ {
                    backgroundImage: `url(${getSlideImageUrl(slide)})`,
                    backgroundPosition: 'center 45%'
                  } }>
                  <div className="slide-content">
                    <h2>{slide.title}</h2>
                    <p>{slide.excerpt}
                      {slide.slug && (
                        <a
                          className="slide-content--button"
                          href={ slide.slug }>See the results!
                        </a>
                      )}
                    </p>
                  </div>

                  <div className="slide-overlay" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

UISlider.displayName = 'UISlider';
