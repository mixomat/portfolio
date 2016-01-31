import {Observable} from 'rx';
import Cycle from '@cycle/core';
import {div, span, h1, h4, a, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';

function request() {
  return Observable.just({url: 'http://localhost:3000/api/projects'});
}

function model(sources) {
  return sources.HTTP
    // TODO filter requests .filter(res$ => res$.request.url.indexOf)
    .mergeAll()
    .do(response => console.log(response.body.content))
    .map(response => response.body.content)
    .startWith([]);
}

function view(projectList$) {
  return projectList$.map(projectList =>
    div('.row .centered',
      projectList.map(project => div('.col-lg-4', [
        span('.project-title', project.title),
        span('.project-customer', project.client)
      ]))
    )
  )
}

function main(sources) {
  return {DOM: view(model(sources)), HTTP: request()};
}

Cycle.run(main, {
  DOM: makeDOMDriver('#projects'),
  HTTP: makeHTTPDriver()
});
