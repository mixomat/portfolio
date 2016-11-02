import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {div, h3, p, makeDOMDriver} from "@cycle/dom";
import {makeHTTPDriver} from "@cycle/http";

import "../assets/styles/portfolio.scss";

function request() {
  return xs.of({url: '/api/projects', category: 'projects'});
}

function model(sources) {
  return sources.HTTP
    .select('projects')
    .map((response$) => response$.replaceError(() => xs.empty()))
    .flatten()
    .map(response => response.body.content)
    .startWith([]);
}

function view(projectList$) {
  return projectList$.map(projectList =>
    div('.row',
      projectList.map(project => div('.timeline-block', [
        div('.timeline-header', [
          h3(project.title),
          p(project.client)]),
        div('.timeline-content', [
          p(project.description)])
      ]))
    )
  )
}

function main(sources) {
  return {DOM: view(model(sources)), HTTP: request()};
}

const drivers = {
  DOM: makeDOMDriver('#resume .container'),
  HTTP: makeHTTPDriver()
};

run(main, drivers);
