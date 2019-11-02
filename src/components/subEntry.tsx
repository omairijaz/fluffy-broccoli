import React from "react";
import "./subEntry.css";
import { ISubscription } from "../App";

interface Props {
  sub: ISubscription;
  unsubscribe: (id: string) => any;
}

class SubEntry extends React.Component<Props> {
  render() {
    return (
      <div className="subEntry">
        <p>{this.props.sub.snippet.title}</p>
        <button
          className="unsub"
          onClick={() => this.props.unsubscribe(this.props.sub.id)}
        >
          Unsubscribe
        </button>
      </div>
    );
  }
}

export default SubEntry;
