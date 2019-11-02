import React from "react";
import YouTube from "./youtube";
import "./App.css";

class App extends React.Component {
  componentDidMount = async () => {
    // const res = await YouTube.get("/activities", {
    //   params: {
    //     q: "test"
    //   }
    // });
    const KEY = "AIzaSyCK6-lI1dkmN2v-YcA3X1uTZW5CUbXRe-0";
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&channelId=UCS-n7QNji8ZBA6SctaKFr5A&key=${KEY}`
    );
    const data = await res.json();
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <h1>YouTube Subscription Manager</h1>
      </div>
    );
  }
}
export default App;
