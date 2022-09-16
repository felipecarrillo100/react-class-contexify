import React, { ReactNode } from 'react';
import { ContextMenuParams, MenuAnimation, MenuId, TriggerEvent } from 'react-contexify';
interface Props {
    id: MenuId;
    theme?: string;
    animation?: MenuAnimation;
    className?: string;
    children: ReactNode;
}
export interface CustomContextMenuReferenceExports {
    show: (event: TriggerEvent, params?: Pick<ContextMenuParams, 'id' | 'props' | 'position'> | undefined) => void;
}
declare const InternalContextMenu: React.ForwardRefExoticComponent<Props & React.RefAttributes<CustomContextMenuReferenceExports>>;
export default InternalContextMenu;
