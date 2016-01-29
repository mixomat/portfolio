'use strict';

import Rx from 'rx';
import Cycle from '@cycle/core';
import {div, button, h1, h4, a, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  //sources.DOM.select('')
  return {
    DOM: Rx.Observable.of(
      div('Hello World')
    )
  }
}

Cycle.run(main, {DOM: makeDOMDriver('#projects')});
