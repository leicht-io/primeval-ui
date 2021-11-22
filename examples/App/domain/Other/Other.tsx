import * as React from "react";
import {
    UIButton,
    UICard,
    UIDivider,
    UIHeader,
    UIModal,
    UINotification,
    UIPageContainer,
    UITypography
} from "../../../../src";
import {useTimeout} from "../../../../src/@core";

export const Other = (): React.ReactElement => {
    const [showModal1, setShowModal1] = React.useState<boolean>(false);
    const [showModal2, setShowModal2] = React.useState<boolean>(false);
    const [notifications, setNotifications] = React.useState<{ type: any, title: string, message: string }[]>([{
        type: "error",
        title: "Error!",
        message: "This is an error notification"
    }, {type: "success", message: "This is a success notification", title: "Success!"}]);
    const [imageSource, setImageSource] = React.useState<string | null>(null);

    useTimeout(() => {
        setImageSource('https://picsum.photos/1920/1080');
    }, 2500);

    return (
        <>
            <UIHeader title={{value: 'Other Components'}}/>

            <UIPageContainer>

                <UITypography type={'h3'}>Dividers</UITypography>

                <UIDivider size={'large'} showBorder={true}/>
                <UIDivider size={'medium'} showBorder={true}/>
                <UIDivider size={'small'} showBorder={true}/>
                <UIDivider size={'medium'} showBorder={false}/>

                <UITypography type={'h3'}>Modals</UITypography>

                <UIButton type={'primary'} onClick={() => {
                    setShowModal1(true);
                }}>Show Modal with IFRAME</UIButton>
                <UIButton type={'primary'} onClick={() => {
                    setShowModal2(true);
                }}>Show Modal with HTML</UIButton>

                <UIDivider size={'large'}/>

                <UITypography type={'h3'}>Images</UITypography>
                <UICard
                    skeletonHeight={658}
                    title='This is the label'
                    backgroundUrl={imageSource}/>

                <UITypography type={'h3'}>Notifications</UITypography>

                {notifications.map((notification, index) => {
                    return (
                        <UINotification
                            key={index}
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

                <UIModal
                    type={'IFRAME'}
                    title={'Modal Title'}
                    show={showModal1}
                    onHide={() => {
                        setShowModal1(false);
                    }}
                    iframeUrl={'https://en.wikipedia.org/wiki/Ardbeg_distillery'}/>

                <UIModal
                    title={'Modal Title'}
                    show={showModal2}
                    onHide={() => {
                        setShowModal2(false);
                    }}>
                    <UITypography type="p">With HTML content</UITypography>
                </UIModal>
            </UIPageContainer>
        </>
    );
}
