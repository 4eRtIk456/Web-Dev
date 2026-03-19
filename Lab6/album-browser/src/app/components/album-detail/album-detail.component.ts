import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  message = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum(id);
  }

  loadAlbum(id: number): void {
    this.loading = true;
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load album details.';
        this.loading = false;
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle.trim() || this.album.title
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.message = 'Album title updated successfully.';
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Failed to update album.';
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}