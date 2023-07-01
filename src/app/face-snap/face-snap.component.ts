import { Component, OnInit, Input } from '@angular/core';
import { faceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: faceSnap;
    boutonText!: string;

    constructor(
      private faceSnapsService: faceSnapsService,
      private router: Router  
    ){}

    ngOnInit(): void {
        this.boutonText="Oh snaps";
    }

    onAddSnap(){
      if(this.boutonText==="Oh snaps"){
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
        this.boutonText="Oops"
      }else{
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
        this.boutonText="Oh snaps"
      }
    }

    onViewFaceSnap(){
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}
