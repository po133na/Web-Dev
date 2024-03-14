import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Album } from '../models/album-model';
import { AlbumPhotos } from '../models/album-photos-model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  dataUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { 

  }
  getAlbum(id: number) {
    return this.httpClient.get<Album>(`${this.dataUrl}/albums/${id}`);
  }
  getAlbums() {
    return this.httpClient.get<Album[]>(`${this.dataUrl}/albums`);
  }
  updateAlbum(albumId: number, newTitle: string) {
    const body = { title: newTitle };
    console.log(newTitle);
    return this.httpClient.put<Album>(`${this.dataUrl}/albums/${albumId}`, body);
  }
  addAlbum(album: Album) {
    return this.httpClient.post<Album>(`${this.dataUrl}/albums`, album);
  }
  getAlbumPhotos(id: number) {
    return this.httpClient.get<AlbumPhotos[]>(`${this.dataUrl}/albums/${id}/photos`);
  }
  deleteAlbum(id: number) {
    return this.httpClient.delete<Album>(`${this.dataUrl}/albums/${id}`);
  }
}