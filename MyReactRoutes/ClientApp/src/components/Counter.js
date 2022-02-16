import React, { Component, useState } from 'react';
import { Route } from 'react-router';
import { Link, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { FetchData } from './FetchData';
import { Home } from './Home';


const fetchWithEdit = () => <FetchData editOn={true} />;

export const Counter = (props) => {
  let { path, url } = useRouteMatch();
  const [counter, setCounter] = useState(0);
  const incrementCounter = (event) => {
    setCounter(counter + 1);
  }

  const params = useParams();

  return (
    <div>
      <h1>Counter {params["id"]}</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">Current count: <strong>{counter}</strong></p>

      <button className="btn btn-primary" onClick={incrementCounter}>FetchData</button>
      <button className="btn btn-primary" onClick={incrementCounter}>Home</button>
      <ul>
        <li>
          <Link to={`${url}/home/${encodeURIComponent("home/id.json")}`}>Show Home Below</Link>
        </li>
        <li>
          <Link to={`${url}/fetch`}>Show Data Below</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/home/:id`} component={() => <Home parentID={decodeURIComponent(params["id"])} />} />
        <Route exact path={`${path}/fetch`} component={fetchWithEdit} />
      </Switch>
    </div>
  );
}

