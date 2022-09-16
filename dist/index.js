"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.animation = void 0;
var React = __importStar(require("react"));
var react_contexify_1 = require("react-contexify");
var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var CheckboxInContextmenu_1 = __importDefault(require("./customcontextmenu/internal/CheckboxInContextmenu"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var CustomMenu_1 = __importDefault(require("./customcontextmenu/internal/CustomMenu"));
exports.animation = react_contexify_1.animation;
exports.theme = react_contexify_1.theme;
var ItemAny = react_contexify_1.Item;
var SubmenuAny = react_contexify_1.Submenu;
fontawesome_svg_core_1.library.add(free_solid_svg_icons_1.faCaretRight, free_solid_svg_icons_1.faCheckSquare, free_solid_svg_icons_1.faSquare);
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { contextMenu: {} };
        _this.executeAction = _this.executeAction.bind(_this);
        return _this;
    }
    Index.prototype.executeAction = function (action) {
        return function (options) {
            if (typeof action === 'function') {
                action(options.event);
            }
        };
    };
    Index.prototype.show = function (options) {
        var domElement = this.contextMenuRef;
        if (options &&
            typeof options.x !== 'undefined' &&
            typeof options.y !== 'undefined') {
            domElement.showProgrammatically({ x: options.x, y: options.y }, { contextMenu: options.contextMenu });
            this.setState({ contextMenu: options.contextMenu });
        }
    };
    Index.prototype.render = function () {
        var _this = this;
        var intl = this.props.intl;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var that = this;
        var arrow = (React.createElement(react_fontawesome_1.FontAwesomeIcon, { className: "FontAwesomeIcon-class", icon: "caret-right" }));
        function renderItems(items) {
            return items.map(function (item, index) {
                var label = typeof item.label === 'undefined'
                    ? 'Missing label'
                    : typeof item.label === 'string'
                        ? item.label
                        : intl.formatMessage({
                            id: "".concat(item.label.id),
                            defaultMessage: "".concat(item.label.defaultMessage),
                        });
                var title = typeof item.title === 'undefined'
                    ? 'Missing label'
                    : typeof item.title === 'string'
                        ? item.title
                        : intl.formatMessage({
                            id: "".concat(item.title.id),
                            defaultMessage: "".concat(item.title.defaultMessage),
                        });
                if (item.separator) {
                    return React.createElement(react_contexify_1.Separator, { key: index });
                }
                else {
                    if (item.items) {
                        var suItems = renderItems(item.items);
                        if (suItems) {
                            return (React.createElement(SubmenuAny, { key: index, label: label, arrow: arrow }, suItems));
                        }
                        else {
                            return React.createElement(React.Fragment, { key: index });
                        }
                    }
                    else {
                        if (item.checkbox) {
                            var enabled = item.checkbox.enabled;
                            return (React.createElement(ItemAny, { key: index, onClick: that.executeAction(item.action), disabled: !enabled },
                                React.createElement("div", { className: "item-row" },
                                    React.createElement("span", { className: "item-icon", title: title }, item.icon),
                                    React.createElement("span", { className: "item-label", title: title }, label),
                                    React.createElement("span", { className: "item-checkbox" },
                                        React.createElement("div", { className: "item-checkbox-float" },
                                            React.createElement(CheckboxInContextmenu_1.default, { checkbox: item.checkbox }))))));
                        }
                        else {
                            return (React.createElement(ItemAny, { key: index, onClick: that.executeAction(item.action) },
                                React.createElement("div", { className: "item-row" },
                                    React.createElement("span", { className: "item-icon", title: title }, item.icon),
                                    React.createElement("span", { className: "item-label", title: title, "data-cy": item.cyAction }, label))));
                        }
                    }
                }
            });
        }
        var menu = React.createElement("div", null);
        if (this.state.contextMenu.items) {
            var items = this.state.contextMenu.items;
            menu = renderItems(items);
        }
        return (React.createElement(CustomMenu_1.default, { id: this.props.menuID, ref: function (ref) { return (_this.contextMenuRef = ref); }, theme: this.props.theme ? this.props.theme : exports.theme.dark, animation: this.props.animation ? this.props.animation : exports.animation.scale, className: "cy-context-menu" }, menu));
    };
    return Index;
}(React.Component));
exports.default = Index;
