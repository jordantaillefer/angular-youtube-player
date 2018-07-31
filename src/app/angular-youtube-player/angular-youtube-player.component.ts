import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-angular-youtube-player',
  templateUrl: './angular-youtube-player.component.html',
  styleUrls: ['./angular-youtube-player.component.scss']
})
export class AngularYoutubePlayerComponent implements OnInit, OnChanges {
  public YT: any;
  @Input() public videoId: any;
  @Input() public height = '360';
  @Input() public width = '640';
  public player: any;

  constructor() {}

  init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.init();

    window['onYouTubeIframeAPIReady'] = e => {
      this.YT = window['YT'];
      this.player = new window['YT'].Player('player', {
        videoId: this.videoId,
        height: this.height,
        width: this.width,
        events: {
          onStateChange: this.onPlayerStateChange.bind(this),
          onError: this.onPlayerError.bind(this)
        }
      });
    };
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
  cleanTime() {
    return Math.round(this.player.getCurrentTime());
  }
  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.videoId);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }

  ngOnChanges(): void {
    this.player.loadVideoById(this.videoId);
  }
}
