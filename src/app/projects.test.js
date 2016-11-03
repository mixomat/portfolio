import {expect} from 'chai';
import {request} from './projects';

describe('projects', () => {

  it('should define a request function', () => {
    expect(request).to.be.a('function');
  });
});
