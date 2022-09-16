import * as React from 'react';
interface Props {
    checkbox: {
        active?: boolean;
        enabled: boolean;
        value: boolean;
    };
}
declare class CheckboxInContextmenu extends React.Component<Props> {
    render(): JSX.Element;
}
export default CheckboxInContextmenu;
