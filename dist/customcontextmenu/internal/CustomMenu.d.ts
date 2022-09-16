import React from 'react';
import { ContextMenuParams, MenuAnimation, MenuId, TriggerEvent } from 'react-contexify';
interface Props {
    id: MenuId;
    theme?: string;
    animation?: MenuAnimation;
    className?: string;
    children: any;
}
declare class CustomMenu extends React.Component<Props, any> {
    private myContextMenu;
    showOnEvent(event: TriggerEvent, params?: Pick<ContextMenuParams, 'id' | 'props' | 'position'> | undefined): void;
    showProgrammatically(options: {
        x: number;
        y: number;
    }, props: any): void;
    render(): JSX.Element;
}
export default CustomMenu;
