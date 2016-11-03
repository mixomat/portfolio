import {expect} from 'chai';
import {request} from './projects';

describe('projects', () => {

  describe('request()', () => {
    it('should be a function', () => {
      expect(request).to.be.a('function');
    });

    it('should emit a request object', (done) => {
      request().subscribe({
        next: (request) => {
          expect(request).to.be.a('Object');
        },
        complete: done
      });
    });

    it('should emit a request object with a valid url', (done) => {
      request().subscribe({
        next: (request) => {
          expect(request.url).to.be.equal('/api/projects');
        },
        complete: done
      });
    });

    it('should emit a request object with a valid category', (done) => {
      request().subscribe({
        next: (request) => {
          expect(request.category).to.be.equal('projects');
        },
        complete: done
      });
    })
  });
});
