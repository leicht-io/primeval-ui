import * as React from "react";
import {IMenuItem, UIFooter, UIMenuLeft} from "../../../../src";
import {logo} from "../../../assets/logo";
import {Menu} from "../../../assets/menu";
import {useHistory} from "react-router-dom";
import "./root.scss";
import {SocialIcon} from "../../../../src/components/UIFooter/types";

export const Root = (props: { children: any }): React.ReactElement => {
    const history = useHistory();
    const [menuItems, setMenuItems] = React.useState<IMenuItem[]>(Menu);
    const socialIcons: SocialIcon[] = [
        {text: "GitHub", link: "https://github.com", icon: "github"},
        {text: "Instagram", link: "https://instagram.com", icon: "instagram"},
        {text: "Facebook", link: "https://facebook.com", icon: "facebook"}
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
                    menuItems={menuItems}/>

                <div style={{width: "calc(100vw - 394px)"}}>
                    {props.children}
                </div>
            </div>
        </>
    );
}
