import React from "react";
import "./App.css";
import SubEntry from "./components/subEntry";
import axios from "axios";

interface State {
  username: string;
  subs: string[];
  accessToken: string;
}

class App extends React.Component {
  state: State = {
    username: "",
    subs: [],
    accessToken: ""
  };

  componentDidMount() {
    // let token = this.getOauthToken();
    // let un = this.getUsername();
    // this.setState({
    //   username: un,
    //   subs: sorbs,
    // });

    var params: { [key: string]: any } = {};
    var regex = /([^&=]+)=([^&]*)/g,
      m;
    while ((m = regex.exec(new URL(window.location.href).hash.substring(1)))) {
      params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    if (Object.keys(params).length > 0) {
      localStorage.setItem("oauth2-test-params", JSON.stringify(params));
    }
    console.log(params.access_token);
    this.setState({
      accessToken: params.access_token
    });

    //make sure auth token is set before calling this
    let vr = localStorage.getItem("oauth2-test-params");
    console.log(vr);

    if (vr != null) {
      var para = JSON.parse(vr);
      if (para && para.access_token) {
        // let sub =
        this.getSubs(para.access_token);
      }
    }
  }

  getUsername(): string {
    return "Username";
  }

  getOauthToken = () => {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement("form");
    form.setAttribute("target", "_blank");
    form.setAttribute("method", "GET");
    form.setAttribute("action", oauth2Endpoint);
    let p = ["client_id", "redirect_uri", "response_type", "scope"];
    let p2 = [
      "1065759368920-rqertu1ir6c2jpmema2uqto2pg4m4aca.apps.googleusercontent.com",
      "http://localhost:3000",
      "token",
      "https://www.googleapis.com/auth/youtube"
    ];
    for (let i = 0; i < 4; i++) {
      let input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p[i]);
      input.setAttribute("value", p2[i]);
      form.appendChild(input);
    }
    document.body.appendChild(form);
    form.submit();
  };

  getSubs(access_token: String) {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&" +
          "access_token=" +
          access_token +
          "&maxResults=50"
        //key=AIzaSyCjtG0WC3UFCudri6h5RK9ZaqM_Uc5XizU
      )
      .then(
        response => {
          console.log(response.data.items);
          this.setState({
            subs: response.data.items
          });
        },
        error => {
          console.log(error);
        }
      );
    //response => console.log(response));

    //set the subs to this.state.subs
  }

  render() {
    this.state.subs.unshift("Channel Name");
    let allSubs = this.state.subs.map((sub, index) => (
      <li key={index}>
        <SubEntry name={sub} />
      </li>
    ));

    return (
      <div className="App">
        <h2>YouTube Subscription Manager</h2>
        <h3>{this.state.username}</h3>
        <button onClick={this.getOauthToken}>Authorize</button>
        {allSubs}
      </div>
    );
  }
}

export default App;
