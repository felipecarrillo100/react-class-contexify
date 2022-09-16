import React from 'react';
import {
  ContextMenuParams,
  MenuAnimation,
  MenuId,
  TriggerEvent,
} from 'react-contexify';
import InternalContextMenu, {
  CustomContextMenuReferenceExports,
} from './InternalContextMenu';
interface Props {
  id: MenuId;
  theme?: string;
  animation?: MenuAnimation;
  className?: string;
  children: any;
}

class CustomMenu extends React.Component<Props, any> {
  private myContextMenu: CustomContextMenuReferenceExports | null = null;

  public showOnEvent(
    event: TriggerEvent,
    params?: Pick<ContextMenuParams, 'id' | 'props' | 'position'> | undefined
  ) {
    this.myContextMenu?.show(event, params);
  }

  public showProgrammatically(options: { x: number; y: number }, props: any) {
    this.myContextMenu?.show(
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      { preventDefault: () => {}, stopPropagation: () => {} } as any,
      {
        position: { x: options.x, y: options.y },
        props: props,
      }
    );
  }

  public render() {
    return (
      <InternalContextMenu
        id={this.props.id as string}
        theme={this.props.theme}
        animation={this.props.animation}
        className={this.props.className}
        ref={(ref) => (this.myContextMenu = ref)}
      >
        {this.props.children}
      </InternalContextMenu>
    );
  }
}

export default CustomMenu;
