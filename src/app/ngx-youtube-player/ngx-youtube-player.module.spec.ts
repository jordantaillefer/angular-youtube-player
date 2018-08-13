import { NgxYoutubePlayerModule } from './ngx-youtube-player.module';

describe('NgxYoutubePlayerModule', () => {
  let ngxYoutubePlayerModule: NgxYoutubePlayerModule;

  beforeEach(() => {
    ngxYoutubePlayerModule = new NgxYoutubePlayerModule();
  });

  it('should create an instance', () => {
    expect(ngxYoutubePlayerModule).toBeTruthy();
  });
});
