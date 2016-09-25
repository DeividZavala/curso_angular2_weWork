import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';
import { Song } from './song';

@Component({
    selector:'spotify-component',
    templateUrl:'./spotify.component.html',
    styleUrls:['spotify.component.css']
})

export class SpotifyComponent {

    songs: Song[];

    constructor(private spotifyService:SpotifyService){}

    search(song){
        this.spotifyService.getSong(song)
            .subscribe(songs => this.songs = songs)
    }

    play(song){
        let songAudio = new Audio;
        songAudio.src = song.preview_url
        songAudio.play()
    }

}