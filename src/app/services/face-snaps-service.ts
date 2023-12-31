import { Injectable } from "@angular/core";
import { faceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class faceSnapsService{
    faceSnaps: faceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'Paris'
          },
          {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnées.',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
            createdDate: new Date(),
            snaps: 0,
            location: 'La montagne'
          },
          {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createdDate: new Date(),
            snaps: 0,
          }
    ]

    getAllFaceSnaps(): faceSnap[]{
        return this.faceSnaps;
    }

    getFaceSnapById(snapId: number): faceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === snapId );
        if(faceSnap){
            return faceSnap;
        }else{
            throw new Error('Aucun snap avec cet Id');
        }
    }

    snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(id);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}