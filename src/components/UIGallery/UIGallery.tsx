import React from 'react';
import './UIGallery.scss';
import {IProps} from './types';
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';
import {IPhoto} from '../../types';
import {UICard} from '../UICard';

// TODO: Move this function
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

  React.useEffect(() => {
    document.addEventListener('keyup', handleEventListeners);

    return () => {
      document.removeEventListener('keyup', handleEventListeners);
    };
  }, []);

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

  return (
    <>
      {showSlider && (
        <div className="ui-gallery--glide-wrapper"
          onClick={ () => {
            setShowSlider(false);
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
                  <img alt={ `Slide #${index}` } src={ props.baseUrl + photo.fullSizePath } />
                </div>
              );
            })}
          </Glide>
        </div>
      )}

      <div className="ui-gallery grid-container grid-two-columns">
        {(data as any[]).map((photo: IPhoto, index: number) => {
          return (
            <div className="grid-item" key={ index }>
              <UICard
                alt={ photo ? photo.description : '' }
                backgroundUrl={ photo ? (props.baseUrl + photo.mediumThumbPath) : '' }
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
