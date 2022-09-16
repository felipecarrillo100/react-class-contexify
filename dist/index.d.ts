import * as React from 'react';
export declare const animation: {
    fade: string;
    flip: string;
    scale: string;
    slide: string;
};
export declare const theme: {
    light: string;
    dark: string;
};
declare type FunctionActionType = (o: any) => void;
export declare class ContextMenuClassType {
    addItem(o: ContextMenuItem): void;
    addSeparator(): void;
}
export declare type ContextMenuItem = ContextMenuSimpleItem | ContextMenuSeparator | ContextMenuSubMenu;
export declare type ContextMenuItems = ContextMenuItem[];
export declare type PredefinedMessage = {
    id: string;
    defaultMessage: string;
    description: string;
};
export interface ContextMenuSimpleItem {
    label: string | PredefinedMessage;
    icon?: JSX.Element;
    title?: string | PredefinedMessage;
    checkbox?: {
        active?: boolean;
        enabled: boolean;
        value: boolean;
    };
    action?: FunctionActionType;
    cyAction?: string;
}
export interface ContextMenuSubMenu {
    label: string | PredefinedMessage;
    title?: string | PredefinedMessage;
    items?: ContextMenuItems;
}
export interface ContextMenuSeparator {
    separator: boolean;
}
export interface ContextMenuContent {
    items: ContextMenuItems;
}
export interface ShowCustomContextMenuOptions {
    x?: number;
    y?: number;
    event?: any;
    contextMenu: ContextMenuContent;
}
interface CCMProps {
    menuID: string;
    theme?: string;
    animation?: string;
    intl?: any;
}
interface CCMState {
    contextMenu: ContextMenuContent;
}
declare class Index extends React.Component<CCMProps, CCMState> {
    private contextMenuRef;
    constructor(props: any);
    executeAction(action: any): (options: any) => void;
    show(options: ShowCustomContextMenuOptions): void;
    render(): JSX.Element;
}
export default Index;
