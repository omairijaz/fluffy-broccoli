import React from "react";
import "./subEntry.css";
import { ISubscription } from "../App";

interface Props {
  sub: ISubscription;
  unsubscribe: (id: string) => any;
}

class SubEntry extends React.Component<Props> {
  render() {
    const { sub } = this.props;
    return (
      <div className="subEntry">
        <img
          style={{ borderRadius: "50%" }}
          src={sub.snippet.thumbnails.default.url}
          alt={sub.snippet.title}
        />
        <p>{sub.snippet.title}</p>
        <button
          className="unsub"
          onClick={() => this.props.unsubscribe(sub.id)}
        >
          Unsubscribe
        </button>
      </div>
    );
  }
}

export default SubEntry;
