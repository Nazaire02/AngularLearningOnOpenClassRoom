import { Component, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps-service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps! : faceSnap[];

  constructor(private faceSnapsService: faceSnapsService){}

  ngOnInit(): void {
    this.faceSnaps= this.faceSnapsService.getAllFaceSnaps();
  }
}
