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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InternalContextMenu_1 = __importDefault(require("./InternalContextMenu"));
var CustomMenu = /** @class */ (function (_super) {
    __extends(CustomMenu, _super);
    function CustomMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myContextMenu = null;
        return _this;
    }
    CustomMenu.prototype.showOnEvent = function (event, params) {
        var _a;
        (_a = this.myContextMenu) === null || _a === void 0 ? void 0 : _a.show(event, params);
    };
    CustomMenu.prototype.showProgrammatically = function (options, props) {
        var _a;
        (_a = this.myContextMenu) === null || _a === void 0 ? void 0 : _a.show(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        { preventDefault: function () { }, stopPropagation: function () { } }, {
            position: { x: options.x, y: options.y },
            props: props,
        });
    };
    CustomMenu.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(InternalContextMenu_1.default, { id: this.props.id, theme: this.props.theme, animation: this.props.animation, className: this.props.className, ref: function (ref) { return (_this.myContextMenu = ref); } }, this.props.children));
    };
    return CustomMenu;
}(react_1.default.Component));
exports.default = CustomMenu;
