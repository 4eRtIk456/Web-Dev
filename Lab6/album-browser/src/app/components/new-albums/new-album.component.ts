import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-album',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './new-album.component.html',
  styleUrl: './new-album.component.css'
})
export class NewAlbumComponent {

  userId = 1;
  title = '';
  loading = false;
  error = '';

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  createAlbum() {

    this.loading = true;

    this.albumService.createAlbum({
      userId: this.userId,
      title: this.title
    }).subscribe({

      next: () => {
        this.router.navigate(['/albums']);
      },

    });
  }
}