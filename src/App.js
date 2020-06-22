// <a href='https://www.freepik.com/free-photos-vectors/background'>Background vector created by Creative_hat - www.freepik.com</a>

import React, { useState } from "react";
import {Card, Container, CardColumns, Col, Row} from 'react-bootstrap'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './images/background.jpg'


function App() {
  const [user, setUser] = useState("");
  const [query, setQuery] = useState("");
  const [languages, setLanguages] = useState()

  //////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`https://api.github.com/users/${query}`)
        .then((res) => res.json())
        .then((res) => {
          setUser(res);
          console.log(res);
          setQuery("");
        });
    }
  };

  return (
    <Container fluid className="App" style={{height: "100vh", backgroundImage: `url(${background})`}}>
      <header className="App-header">Github-Buddy</header>
      <Container style={{marginTop: "20vh"}}>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search here..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            style={{textAlign: "center"}}
          />
          
        </div>

        {user ? (
          <Container style={{borderWidth: ".2rem .2rem 0", borderRadius: "8px 8px 0 0", borderColor: "grey", marginTop: "5vh"}}>
          <CardColumns className = "mx-auto">
            <Card >
              <Card.Header><h4>Name:</h4></Card.Header>
              
              {user.name != null ? <p>{user.name}</p> : <p>add a name!</p>}
            </Card>
            <Card>
              <Card.Header><h4>Public Repos:</h4></Card.Header>
              
              {user.public_repos != null ? <p>{user.public_repos}</p> : <p>Make some Repos!</p>}
            </Card>
            <Card>
              <Card.Header><h4>Location:</h4></Card.Header>
              
              {user.location != null ? (
                <p>{user.location}</p>
              ) : (
                <p>Add a location to your profile!</p>
              )}
            </Card>
            <Card>
              <Card.Header><h4>Company:</h4></Card.Header>
              
              {user.company != null ? (
                <p>{user.company}</p>
              ) : (
                <p>add a company to your profile!</p>
              )}
            </Card>
            <Card>
              <Card.Header><h4>Available for hire?</h4></Card.Header>
              
              {user.hireable != null ? (
                <p>{user.hireable}</p>
              ) : (
                <p>make it known on your profile!</p>
              )}
            </Card>
            <Card>
              <Card.Header><h4>email:</h4></Card.Header>
              
              {user.email != null ? (
                <p>{user.email}</p>
              ) : (
                <p>add an email to your profile!</p>
              )}
            </Card>
            <Card className = "mx-auto">
              <Card.Header><h4>Laguages Used:</h4></Card.Header> Feature  coming soon
              </Card>
            <Card className = "mx-auto">
              <Card.Header><h4>Suggestion for Next Project:</h4></Card.Header>Feature  coming soon
              </Card>
          </CardColumns>
          </Container>
        ) : (
          <Card className = "mx-auto" style={{width: "40%", marginTop: "10vh", padding: "1%"}}>
              Github-Buddy checks to make sure you have your profile filled out
              and with the right information! Currently working on adding a pie
              chart of languages used and a suggestion for your next project.
              <br />
              Search for your username and press enter to get started!
            </Card>
        )}
      </Container>
    </Container>
  );
}

export default App;
