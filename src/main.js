import {makeDOMDriver} from "@cycle/dom";
import {makeHTTPDriver} from "@cycle/http";
import {run} from '@cycle/xstream-run';
import {projects} from './app/projects';

// import global styles
import "./assets/styles/portfolio.scss";

const drivers = {
  DOM: makeDOMDriver('#resume .container'),
  HTTP: makeHTTPDriver()
};

run(projects, drivers);
