import { FilesizePipe } from './filesize.pipe';

describe('FilesizePipe', () => {
  let pipe: FilesizePipe;

  beforeEach(() => {
    pipe = new FilesizePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform filesize into kb', () => {
    expect(pipe.transform(1000000, 'kb')).toEqual('1000 KB')
  })
});
