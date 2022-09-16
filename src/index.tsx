import * as React from 'react';

import {
  animation as internalAnimation,
  Item,
  Separator,
  Submenu,
  theme as internalTheme,
} from 'react-contexify';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CheckboxInContextmenu from './customcontextmenu/internal/CheckboxInContextmenu';

import {
  faCaretRight,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';

import CustomMenu from './customcontextmenu/internal/CustomMenu';

export const animation = internalAnimation;
export const theme = internalTheme;

const ItemAny = Item as any;
const SubmenuAny = Submenu as any;

library.add(faCaretRight, faCheckSquare, faSquare);

type FunctionActionType = (o: any) => void;

export declare class ContextMenuClassType {
  public addItem(o: ContextMenuItem): void;
  public addSeparator(): void;
}

export type ContextMenuItem =
  | ContextMenuSimpleItem
  | ContextMenuSeparator
  | ContextMenuSubMenu;
export type ContextMenuItems = ContextMenuItem[];

export type PredefinedMessage = {
  id: string;
  defaultMessage: string;
  description: string;
};

export interface ContextMenuSimpleItem {
  label: string | PredefinedMessage;
  icon?: JSX.Element;
  title?: string | PredefinedMessage;
  checkbox?: { active?: boolean; enabled: boolean; value: boolean };
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

class Index extends React.Component<CCMProps, CCMState> {
  private contextMenuRef: CustomMenu | undefined;

  constructor(props: any) {
    super(props);
    this.state = { contextMenu: {} as any };
    this.executeAction = this.executeAction.bind(this);
  }

  public executeAction(action: any) {
    return (options: any) => {
      if (typeof action === 'function') {
        action(options.event);
      }
    };
  }

  public show(options: ShowCustomContextMenuOptions) {
    const domElement = this.contextMenuRef as CustomMenu;
    if (
      options &&
      typeof options.x !== 'undefined' &&
      typeof options.y !== 'undefined'
    ) {
      domElement.showProgrammatically(
        { x: options.x, y: options.y },
        { contextMenu: options.contextMenu }
      );
      this.setState({ contextMenu: options.contextMenu });
    }
  }

  public render() {
    const intl = this.props.intl;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    const arrow = (
      <FontAwesomeIcon className="FontAwesomeIcon-class" icon="caret-right" />
    );
    function renderItems(items: any) {
      return items.map((item: any, index: number) => {
        const label =
          typeof item.label === 'undefined'
            ? 'Missing label'
            : typeof item.label === 'string'
            ? item.label
            : intl.formatMessage({
                id: `${item.label.id}`,
                defaultMessage: `${item.label.defaultMessage}`,
              });
        const title =
          typeof item.title === 'undefined'
            ? 'Missing label'
            : typeof item.title === 'string'
            ? item.title
            : intl.formatMessage({
                id: `${item.title.id}`,
                defaultMessage: `${item.title.defaultMessage}`,
              });

        if (item.separator) {
          return <Separator key={index} />;
        } else {
          if (item.items) {
            const suItems = renderItems(item.items);
            if (suItems) {
              return (
                <SubmenuAny key={index} label={label} arrow={arrow}>
                  {suItems}
                </SubmenuAny>
              );
            } else {
              return <React.Fragment key={index} />;
            }
          } else {
            if (item.checkbox) {
              const enabled = item.checkbox.enabled;
              return (
                <ItemAny
                  key={index}
                  onClick={that.executeAction(item.action)}
                  disabled={!enabled}
                >
                  <div className="item-row">
                    <span className="item-icon" title={title}>
                      {item.icon}
                    </span>
                    <span className="item-label" title={title}>
                      {label}
                    </span>
                    <span className="item-checkbox">
                      <div className="item-checkbox-float">
                        <CheckboxInContextmenu checkbox={item.checkbox} />
                      </div>
                    </span>
                  </div>
                </ItemAny>
              );
            } else {
              return (
                <ItemAny key={index} onClick={that.executeAction(item.action)}>
                  <div className="item-row">
                    <span className="item-icon" title={title}>
                      {item.icon}
                    </span>
                    <span
                      className="item-label"
                      title={title}
                      data-cy={item.cyAction}
                    >
                      {label}
                    </span>
                  </div>
                </ItemAny>
              );
            }
          }
        }
      });
    }
    let menu = <div />;
    if (this.state.contextMenu.items) {
      const items = this.state.contextMenu.items;
      menu = renderItems(items) as any;
    }
    return (
      <CustomMenu
        id={this.props.menuID}
        ref={(ref: any) => (this.contextMenuRef = ref)}
        theme={this.props.theme ? this.props.theme : theme.dark}
        animation={
          this.props.animation ? this.props.animation : animation.scale
        }
        className="cy-context-menu"
      >
        {menu}
      </CustomMenu>
    );
  }
}

export default Index;
