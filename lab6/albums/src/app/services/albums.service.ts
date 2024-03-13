import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from '../models/album-model';
import { AlbumPhotos } from '../models/album-photos-model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }

  getAlbums() {
    return this.httpClient.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number) {
    return this.httpClient.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  updateAlbum(albumId: number, newTitle: string) {
    const body = { title: newTitle };
    console.log(newTitle);
    return this.httpClient.put<Album>(`${this.BASE_URL}/albums/${albumId}`, body);
  }
  addAlbum(album: Album) {
    return this.httpClient.post<Album>(`${this.BASE_URL}/albums`, album);
  }
  deleteAlbum(id: number) {
    return this.httpClient.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  getAlbumPhotos(id: number) {
    return this.httpClient.get<AlbumPhotos[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}