import {Observable} from 'rx';
import Cycle from '@cycle/core';
import {div, span, h3, h4, p, a, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';

function request() {
  return Observable.just({url: '/api/projects'});
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

Cycle.run(main, drivers);
