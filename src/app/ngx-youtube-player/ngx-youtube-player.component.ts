import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngx-youtube-player',
  template: `<div id="player"></div>`,
})
export class NgxYoutubePlayerComponent implements OnInit {
  private YT: any;
  private _player: any;
  @Output() ready = new EventEmitter<any>();
  @Output() stateChange = new EventEmitter<any>();
  @Output() error = new EventEmitter<any>();

  @Input() width = 640;
  @Input() height = 360;
  @Input() autoplay = false;
  @Input() videoId: string;
  @Input() controls = true;
  @Input() kbcontrols = true;
  @Input()
  set volume(volume: number) {
    this._volume = volume;
    if (this._player) {
      this._player.setVolume(this._volume);
    }
  }
  _volume = 50;
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
    this._player = new window['YT'].Player('player', {
      width: this.width,
      height: this.height,
      playerVars: {
        controls: this.controls ? 1 : 0,
        disablekb: this.kbcontrols ? 1 : 0,
        autoplay: this.autoplay ? 1 : 0
      },
      videoId: this.videoId,
      events: {
        onStateChange: this.onPlayerStateChange.bind(this),
        onError: this.onPlayerError.bind(this),
        onReady: this.onPlayerReady.bind(this)
      }
    });
  }

  onPlayerReady(event) {
    this.ready.emit(event);
  }

  onPlayerStateChange(event) {
    console.log(event);
    this.stateChange.emit(event);
  }

  nextVideo() {
    this._player.nextVideo();
  }

  shufflePlaylist() {
    this._player.setShuffle(true);
  }

  // utility
  cleanTime() {
    return Math.round(this._player.getCurrentTime());
  }

  onPlayerError(event) {
    console.log('event', event);
    this.error.emit(event);
  }
}
