import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Kokardenblume_Gaillardia_aristata_stack28_20190721-RM-7210879.jpg/750px-Kokardenblume_Gaillardia_aristata_stack28_20190721-RM-7210879.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Rubens_Felice_da_Cantalice.JPG';

  constructor() { }

  ngOnInit() {
  }

}