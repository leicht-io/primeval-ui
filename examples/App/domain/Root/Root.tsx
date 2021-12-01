import * as React from "react";
import {IMenuItem, UIFooter, UIMenuLeft} from "../../../../src";
import {logo} from "../../../assets/logo";
import {Menu} from "../../../assets/menu";
import {useHistory} from "react-router-dom";
import "./root.scss";
import {IoLogoFacebook} from "@react-icons/all-files/io5/IoLogoFacebook";
import {IoLogoInstagram} from "@react-icons/all-files/io5/IoLogoInstagram";
import {IoLogoGithub} from "@react-icons/all-files/io5/IoLogoGithub";
import {ISocialIcon} from "../../../../src/@models/ISocialIcon";

export const Root = (props: { children: any }): React.ReactElement => {
    const history = useHistory();
    const socialIcons: ISocialIcon[] = [
        {text: "GitHub", link: "https://github.com", icon: <IoLogoGithub/>},
        {text: "Instagram", link: "https://instagram.com", icon: <IoLogoInstagram/>},
        {text: "Facebook", link: "https://facebook.com", icon: <IoLogoFacebook/>}
    ]

    return (
        <>
            <div className="root--wrapper">
                <UIMenuLeft
                    collapsed={true}
                    onNavigate={(destination: IMenuItem) => {
                        history.push(destination.link as any);
                    }}
                    logo={logo}
                    footer={<UIFooter socialIcons={socialIcons}/>}
                    menuItems={Menu}/>

                {props.children}
            </div>
        </>
    );
}
