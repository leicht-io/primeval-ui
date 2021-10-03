import * as React from "react";
import {IMenuItem, UIMenu, UIScrollProgress} from "../../../../src";
import {logo} from "../../../assets/logo";
import {Menu} from "../../../assets/menu";
import {useHistory} from "react-router-dom";

export const Root = (props: { children: any }): React.ReactElement => {
    const history = useHistory();
    const [menuItems] = React.useState<IMenuItem[]>(Menu);

    return (
        <>
            <UIScrollProgress/>

            <UIMenu
                menuItems={menuItems}
                logo={logo}
                onNavigate={(destination: IMenuItem) => {
                    history.push(destination.link as any);
                }}
            />
            {props.children}
        </>
    );
}
