import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSquare as farFaSquare,
  faCheckSquare as farFaCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

interface Props {
  checkbox: {
    active?: boolean;
    enabled: boolean;
    value: boolean;
  };
}

function fortAwesomeAdd(...args: any[]) {
  for (const lib of args) {
    library.add(lib);
  }
}

fortAwesomeAdd(farFaSquare, farFaCheckSquare, faCaretRight);

class CheckboxInContextmenu extends React.Component<Props> {
  public render() {
    const active =
      typeof this.props.checkbox.active !== 'undefined'
        ? this.props.checkbox.active
        : true;
    const enabled = this.props.checkbox.enabled;
    const className = enabled
      ? 'CheckboxInContextmenu'
      : 'CheckboxInContextmenu disabled';
    return (
      <React.Fragment>
        {!(this.props.checkbox.value && active) && (
          <FontAwesomeIcon className={className} icon={['far', 'square']} />
        )}
        {this.props.checkbox.value && active && (
          <FontAwesomeIcon
            className={className}
            icon={['far', 'check-square']}
          />
        )}
      </React.Fragment>
    );
  }
}

export default CheckboxInContextmenu;
