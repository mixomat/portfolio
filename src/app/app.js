import {Observable} from 'rx';
import Cycle from '@cycle/core';
import {div, ul, li, button, h1, h4, a, makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';

function request() {
  return Observable.just({url: 'http://localhost:3000/api/projects'});
}

function model(responses) {
  return responses.HTTP
    // TODO filter requests .filter(res$ => res$.request.url.indexOf)
    .mergeAll()
    .do(response => console.log(response.body.content))
    .map(response => response.body.content)
    .startWith([]);
}

function view(projectList$) {
  return projectList$.map(projectList =>
    //div('Hello Marc')
    ul(projectList.map(project => li(project.title)))
  )
}

function main(sources) {
  return {DOM: view(model(sources)), HTTP: request()};
}

Cycle.run(main, {
  DOM: makeDOMDriver('#projects'),
  HTTP: makeHTTPDriver()
});
