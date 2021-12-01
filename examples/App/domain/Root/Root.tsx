import * as React from "react";
import {IMenuItem, UIFooter, UIMenuLeft} from "../../../../src";
import {logo} from "../../../assets/logo";
import {collapsedLogo} from "../../../assets/collapsedLogo";
import {Menu} from "../../../assets/menu";
import {useHistory} from "react-router-dom";
import "./root.scss";
import {IoLogoFacebook} from "@react-icons/all-files/io5/IoLogoFacebook";
import {IoLogoInstagram} from "@react-icons/all-files/io5/IoLogoInstagram";
import {IoLogoGithub} from "@react-icons/all-files/io5/IoLogoGithub";
import {ISocialIcon} from "../../../../src/@models/ISocialIcon";

export const Root = (props: { children: any }): React.ReactElement => {
    const history = useHistory();
    const [collapsed, setCollapsed] = React.useState<boolean>(false)

    const socialIcons: ISocialIcon[] = [
        {text: "GitHub", link: "https://github.com", icon: <IoLogoGithub/>},
        {text: "Instagram", link: "https://instagram.com", icon: <IoLogoInstagram/>},
        {text: "Facebook", link: "https://facebook.com", icon: <IoLogoFacebook/>}
    ]

    return (
        <>
            <div className={"root--wrapper " + (collapsed ? "root--wrapper-collapsed" : undefined)}>
                <UIMenuLeft
                    collapsed={collapsed}
                    onNavigate={(destination: IMenuItem) => {
                        history.push(destination.link as any);
                    }}
                    logo={logo}
                    collapsedLogo={collapsedLogo}
                    footer={<UIFooter socialIcons={socialIcons}/>}
                    menuItems={Menu}/>

                {props.children}
            </div>
        </>
    );
}
