import React from 'react';
import './UIGallery.scss';
import {IProps} from './types';
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';
import {IPhoto} from '../../types';
import {UICard} from '../UICard';
import {animated, useTransition} from '@react-spring/web';
import {opacity, useBodyScrollLock, useEventListener} from '../../@core';

// TODO: Move this function
// TODO: add exit button
const getSkeletonArray = (amount: number) => {
  const tempArray: null[] = [];
  for (let i = 0; i < amount; i++) {
    tempArray.push(null);
  }

  return tempArray;
};

export const UIGallery = (props: IProps): React.ReactElement => {
  const gliderRef = React.useRef(null);

  const [data, setData] = React.useState<null[] | IPhoto[]>(getSkeletonArray(props.skeletons || 10));
  const [showSlider, setShowSlider] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  useBodyScrollLock(showSlider, [showSlider]);

  const transitions = useTransition(showSlider, opacity());

  React.useEffect(() => {
    if (props.gallery) {
      setData(props.gallery.photos);
    }
  }, [props.gallery]);

  const handleEventListeners = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setShowSlider(false);
        break;
    }
  };
  useEventListener('keyup', handleEventListeners);

  const getThumbnailImageUrl = (photo: IPhoto): string => {
    let url: string = (props.baseUrl ? props.baseUrl : '');

    if (photo && photo.mediumThumbPath) {
      url += photo.mediumThumbPath;
    } else if (photo && photo.fullSizePath) {
      url += photo.fullSizePath;
    }

    return url;
  };

  return (
    <>
      {
        transitions((styles, item) => item && (
          <animated.div
            style={ styles }
            className="ui-gallery--glide-wrapper"
            onClick={ (event) => {
              if ((event.target as HTMLDivElement).className === 'ui-gallery--glide-wrapper') {
                setShowSlider(false);
                setIndex(0);
              }
            } }>
            <Glide
              className={ 'ui-gallery--slideshow' }
              ref={ gliderRef }
              throttle={ 0 }
              gap={ 100 }
              type="slider"
              peek={ {
                before: 200,
                after: 200,
              } }
              perView={ 1 }
              autoplay={ false }
              startAt={ index }
              slideClassName="slider__frame">
              {props.gallery && props.gallery.photos && props.gallery.photos.map((photo, index) => {
                return (
                  <div key={ index } className="slider__img_wrapper">
                    <img alt={ `Slide #${index}` }
                      src={ (props.baseUrl ? props.baseUrl : '') + photo.fullSizePath } />
                  </div>
                );
              })}
            </Glide>
          </animated.div>
        ))
      }

      <div className="ui-gallery grid-container grid-two-columns">
        {(data as any[]).map((photo: IPhoto, index: number) => {
          return (
            <div className="grid-item" key={ index }>
              <UICard
                alt={ photo ? photo.description : '' }
                backgroundUrl={ getThumbnailImageUrl(photo) }
                onClick={ () => {
                  if (photo) {
                    setIndex(index);
                    setShowSlider(true);
                  }
                } }
                title={ photo ? photo.description : undefined }
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
