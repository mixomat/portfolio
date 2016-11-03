import xs from "xstream";
import {div, h3, p} from "@cycle/dom";

export function request() {
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

export function projects(sources) {
  return {DOM: view(model(sources)), HTTP: request()};
}

