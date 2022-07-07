import * as React from "react";
import {IMenuItem, UIMenu, UIScrollProgress} from "../../../../src";
import {logo} from "../../../assets/logo";
import {Menu} from "../../../assets/menu";
import {useNavigate} from "react-router-dom";

export const Root = (props: { children: any }): React.ReactElement => {
    const navigate = useNavigate();
    const [menuItems] = React.useState<IMenuItem[]>(Menu);

    return (
        <>
            <UIScrollProgress/>

            <UIMenu
                menuItems={menuItems}
                logo={logo}
                onNavigate={(destination: IMenuItem) => {
                    navigate(destination.link as any);
                }}
            />
            {props.children}
        </>
    );
}
