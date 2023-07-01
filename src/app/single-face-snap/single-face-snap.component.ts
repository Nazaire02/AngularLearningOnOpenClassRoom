import { Component } from '@angular/core';
import { faceSnap } from '../models/face-snap.model';
import { faceSnapsService } from '../services/face-snaps-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: faceSnap;
  boutonText!: string;

  constructor(private faceSnapsService: faceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.boutonText="Oh snaps";
      const faceSnapId= +this.route.snapshot.params['id'];
      this.faceSnap=this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
