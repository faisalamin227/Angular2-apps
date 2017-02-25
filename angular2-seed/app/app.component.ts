import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent { 
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor(){
    this.videos = [
             new Video (1, "Coldplay1", "YykjpeuMNEk", "Hymn for the weekend"),
             new Video (2, "Coldplay2", "QtXby3twMmI", "Adventure of a lifetime")
            ]
    }    
}