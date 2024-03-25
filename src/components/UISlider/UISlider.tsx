import {IProps} from './types';
import React from 'react';
import './UISlider.scss';
import Glide from '@glidejs/glide';
import {UILoader} from '../UILoader';

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

  if (!props.slides) {
    return (
      <div className="glide">
        <UILoader size="small" color="dark" />
      </div>
    );
  } else {
    return (
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {props.slides.map((slide, index) => {
              return (
                <li
                  className="glide__slide slider-frame"
                  key={ index }
                  style={ {
                    backgroundImage: `url(${slide.headerImage})`,
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
