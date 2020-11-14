import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/shared/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  requestedArtistaId: number;
  album: Array<any>;

  constructor(private activatedRouter: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.requestedArtistaId = params.id;
      this.getAlbum(this.requestedArtistaId);
    })
  }

  getAlbum = (id) => {
    this.spotify.getAlbums(id).subscribe((res => {
      this.album =  res;
    }))
  }

}
