import React from 'react';
import {
    ISlide,
    UIButton,
    UICard,
    UIDivider,
    UIHeader,
    UIModal,
    UINotification,
    UIPageContainer,
    UISlider,
    UITypography
} from '../../src';
import {sliderMockResponse} from '../assets/slider.mock';

export const App = (): React.ReactElement => {
    const [showModal1, setShowModal1] = React.useState<boolean>(false);
    const [showModal2, setShowModal2] = React.useState<boolean>(false);
    const [imageSource, setImageSource] = React.useState<string | null>(null);
    const [slides, setSlides] = React.useState<ISlide[] | null>(null);
    const [title, setTitle] = React.useState<string | null>(null);
    const [notifications, setNotifications] = React.useState<{ type: any, title: string, message: string }[]>([{
        type: "error",
        Title: "Error!",
        message: "This is an error notification"
    }, {type: "success", message: "This is a success notification", title: "Success!"}]);

    React.useEffect(() => {
        setTimeout(() => {
            setImageSource('https://ni.leicht.io/wadden_sea.0039e6c00cf93aed50f037fcfbdfa31f5517546e_original.jpg');

            setSlides(sliderMockResponse);

            setTitle('Leicht.IO React UI Component Library');
        }, 2500);
    }, []);

    return (
        <>
            <UISlider slides={slides} basePath={'https://ni.leicht.io/'}/>

            <UIPageContainer>
                <UITypography type={'h3'}>Dividers</UITypography>

                <UIDivider size={'large'} showBorder={true}/>
                <UIDivider size={'medium'} showBorder={true}/>
                <UIDivider size={'small'} showBorder={true}/>
                <UIDivider size={'medium'} showBorder={false}/>
            </UIPageContainer>

            <UIPageContainer>
                <UITypography type={'h3'}>Modals</UITypography>

                <UIButton type={'primary'} onClick={() => {
                    setShowModal1(true);
                }}>Show Modal with IFRAME</UIButton>
                <UIButton type={'primary'} onClick={() => {
                    setShowModal2(true);
                }}>Show Modal with HTML</UIButton>
            </UIPageContainer>

            <UIDivider size={'large'}/>

            <UIHeader
                gradient={true}
                title={{value: 'Alternative Header'}}
                multiContent={true}
                breadcrumbs={'Home / Blog /'}
                metadata={{
                    author: {
                        name: 'Christian Leicht',
                        image: 'https://leicht.io/assets/images/Christian%20Leicht.446ae6c5b506726034a6835e04683053805a01936559314861d01c9f7e999e51.jpg',
                        published: 'May 15, 2019',
                        updated: 'May 5, 2020',
                        length: '5 minutes read'
                    }
                }}/>

            <UIPageContainer>
                <UITypography type={'h3'}>Images</UITypography>
                <UICard
                    skeletonHeight={658}
                    title='This is the label'
                    backgroundUrl={imageSource}/>
            </UIPageContainer>

            <UIPageContainer>
                <UITypography type={'h3'}>Notifications</UITypography>

                {notifications.map(notification => {
                    return (
                        <UINotification
                            type={notification.type}
                            title={notification.title}
                            description={notification.message}/>
                    );
                })}

                <UIButton type={"primary"}
                          onClick={() => {
                              const tempNotifications = [...notifications];
                              tempNotifications.push({
                                  title: "Error!",
                                  message: "This is an error notification",
                                  type: "error"
                              })
                              setNotifications(tempNotifications)
                          }}>
                    Add Notification
                </UIButton>
            </UIPageContainer>

            <UIModal type={'IFRAME'} title={'Modal Title'} show={showModal1} onHide={() => {
                setShowModal1(false);
            }}
                     iframeUrl={'https://en.wikipedia.org/wiki/Ardbeg_distillery'}/>

            <UIModal title={'Modal Title'} show={showModal2} onHide={() => {
                setShowModal2(false);
            }}>
                <UITypography type="p">With HTML content</UITypography>
            </UIModal>
        </>
    );
};
