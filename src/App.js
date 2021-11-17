import './App.css';
import React from 'react';
import { defineCustomElements } from "@skill-wallet/auth/loader";
// const DiscordOauth2 = require("discord-oauth2");
import { useState } from "react";

function App() {

  useState(() => {

    // r = requests.post('%s/oauth2/token' % API_ENDPOINT, data=data, headers=headers)
    // r.raise_for_status()
    // return r.json()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    console.log(code);
    const fetchUser = async code => {

      const details = {
        'client_id': '898586559228551208',
        'client_secret': 'ITiqzF4DqeuPIwpp23s9uXmxHouRS_RV',
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:3334'
      };
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      const response = await fetch(`https://discord.com/api/v9/oauth2/token`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      })
      // if (!response.ok) throw new Error(`Error status code: ${response.status}`)

      // console.log(response.body);
      // return JSON.parse(await response.json())
      const json = await response.json();
      const accessToken = json.access_token;

      const userReq = await fetch(`https://discord.com/api/v9/users/@me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      const user = await userReq.json();
      console.log(user);
      return;
    };
    if (code) {
      fetchUser(code);
    }


  }, [])


  const authorizeAccountLink = `https://discord.com/api/oauth2/authorize?client_id=898586559228551208&redirect_uri=http%3A%2F%2Flocalhost%3A3334&response_type=code&scope=identify`;
  const discordTokenUrl = 'https://discord.com/api/oauth2/token'
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={discordAuth}>Discord Auth</button> */}
        <a href="https://discord.com/api/oauth2/authorize?client_id=898586559228551208&redirect_uri=http%3A%2F%2Flocalhost%3A3334&response_type=code&scope=identify">discord auth</a>
        {/* <skillwallet-auth partner-key="e045db0b7868a054e0e75b2013b0fc59f1fbe035"></skillwallet-auth> */}

      </header>

    </div>
  );
}
defineCustomElements(window);
export default App;
