import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from "@cycle/dom";
import {makeHTTPDriver} from "@cycle/http";
import {projects} from './app/projects';

import "./assets/styles/portfolio.scss";

const drivers = {
  DOM: makeDOMDriver('#resume .container'),
  HTTP: makeHTTPDriver()
};

run(projects, drivers);
