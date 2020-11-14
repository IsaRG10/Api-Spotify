import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    // Defino Headers que API de Spotify Necesita
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBazIfFWnak0cysy15t9ZA8ovYWpwkNUHNDrQqv5bOCiX4TVhsmXp0YSg-re5yQFLdb255UN5X-hmjS0ZQNSynEpdrcolaqHtteQ742-vNJSDzFtc5kUQiyM7sOiLO_oUyc33l7fzBSz6EhAKqzfCWAo6frbEo"
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=21").pipe(
      map(data => data["albums"].items)
    );
  }

  // Referente al Search

  getArtistas(terminoArtist: string) {
    return this.getQuery(`search?q=${terminoArtist}&type=artist&limit=15`).pipe(
      map(data => data["artists"].items)
    );
  }

  getTracks(terminoTrack: string) {
    return this.getQuery(`search?q=${terminoTrack}&type=track&limit=15`).pipe(
      map(data => data["tracks"].items)
    );
  }

  getCancion(terminoTrack){
    return this.getQuery(`tracks/${terminoTrack}`);
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data['artists'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map(data => data["tracks"])
    );
  }

  getAlbums(artistId: string) {
    return this.getQuery(`artists/${artistId}/albums`).pipe(map((data: any) => data.items));
  }

  getAlbum(albumId: string) {
    return this.getQuery(`albums/${albumId}`).pipe(map((data: any) => data));
  }

}
