import React from "react";
import "./subEntry.css";

interface Props {
  name?: string;
  unsubscribe: (id: string) => any;
}

class SubEntry extends React.Component<Props> {
  render() {
    return (
      <div className="subEntry">
        <p>{this.props.name}</p>
        <button
          className="unsub"
          onClick={() => this.props.unsubscribe("test")}
        >
          Unsubscribe
        </button>
      </div>
    );
  }
}

export default SubEntry;
