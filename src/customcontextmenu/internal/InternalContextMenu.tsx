import React, {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
} from 'react';
import {
  ContextMenuParams,
  Menu,
  MenuAnimation,
  MenuId,
  TriggerEvent,
  useContextMenu,
} from 'react-contexify';

interface Props {
  id: MenuId;
  theme?: string;
  animation?: MenuAnimation;
  className?: string;
  children: ReactNode;
}

export interface CustomContextMenuReferenceExports {
  show: (
    event: TriggerEvent,
    params?: Pick<ContextMenuParams, 'id' | 'props' | 'position'> | undefined
  ) => void;
}

const InternalContextMenu = forwardRef(
  (props: Props, ref: ForwardedRef<CustomContextMenuReferenceExports>) => {
    const { show } = useContextMenu({
      id: props.id,
    });

    useImperativeHandle(ref, () => ({ show }), [show]);

    return (
      <Menu
        id={props.id as string}
        theme={props.theme}
        animation={props.animation}
        className={props.className}
      >
        {props.children}
      </Menu>
    );
  }
);

export default InternalContextMenu;
