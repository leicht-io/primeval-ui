import * as React from "react";
import {IMenuItem, UIFooter, UIMenuLeft} from "../../../../src";
import {logo} from "../../../assets/logo";
import {Menu} from "../../../assets/menu";
import {useHistory} from "react-router-dom";
import "./root.scss";
import {SocialIcon} from "../../../../src/components/UIFooter/types";
import {IoLogoFacebook} from "@react-icons/all-files/io5/IoLogoFacebook";
import {IoLogoInstagram} from "@react-icons/all-files/io5/IoLogoInstagram";
import {IoLogoGithub} from "@react-icons/all-files/io5/IoLogoGithub";

export const Root = (props: { children: any }): React.ReactElement => {
    const history = useHistory();
    const socialIcons: SocialIcon[] = [
        {text: "GitHub", link: "https://github.com", icon: <IoLogoGithub/>},
        {text: "Instagram", link: "https://instagram.com", icon: <IoLogoInstagram/>},
        {text: "Facebook", link: "https://facebook.com", icon: <IoLogoFacebook/>}
    ]

    return (
        <>

            <div style={{display: "flex", marginLeft: "370px"}}>
                <UIMenuLeft
                    onNavigate={(destination: IMenuItem) => {
                        history.push(destination.link as any);
                    }}
                    logo={logo}
                    footer={<UIFooter socialIcons={socialIcons}/>}
                    menuItems={Menu}/>

                <div style={{width: "calc(100vw - 394px)"}}>
                    {props.children}
                </div>
            </div>
        </>
    );
}
