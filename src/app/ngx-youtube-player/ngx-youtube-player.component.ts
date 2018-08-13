import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngx-youtube-player',
  template: `<div id="player"></div>`,
})
export class NgxYoutubePlayerComponent implements OnInit {
  public YT: any;
  public video: any;
  public player: any;
  @Input() width = 640;
  @Input() height = 360;
  youtubeScript: HTMLScriptElement;
  scriptLoaded = false;

  constructor() { }

  ngOnInit() {
    this.initPlayer();
  }

  initPlayer() {
    if (!window['YT']) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      this.youtubeScript = firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      this.video = '4thvxNoyUKo';

      window['onYouTubeIframeAPIReady'] = e => {
        this._loadPlayer();
        this.scriptLoaded = true;
      };
    } else {
      this._loadPlayer();
    }
  }

  _loadPlayer() {
    this.YT = window['YT'];
    this.player = new window['YT'].Player('player', {
      width: this.width,
      height: this.height,
      playerVars: {
        enablejsapi: 1,
        controls: 0,
        disablekb: 0,
        autoplay: 0,
      },
      videoId: '4thvxNoyUKo',
      events: {
        onStateChange: this.onPlayerStateChange.bind(this),
        onError: this.onPlayerError.bind(this),
        onReady: event => { }
      }
    });
  }


  onPlayerStateChange(event) {
    console.log(event);
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() === 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() !== 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }

  nextVideo() {
    this.player.nextVideo();
  }

  shufflePlaylist() {
    this.player.setShuffle(true);
  }

  // utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime());
  }

  onPlayerError(event) {
    console.log('event', event);
    switch (event.data) {
      case 2:
        console.log('' + this.video);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }
}
