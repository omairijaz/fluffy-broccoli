import React from 'react';
import "./subEntry.css";

interface Props {
    name?: string;
}

class SubEntry extends React.Component<Props>{
    render() {
        return (
          <div className="subEntry">{this.props.name}</div>
        );
    }
}

export default SubEntry;