import { Injectable } from '@angular/core';
import { Bike } from 'src/app/models/bike';

@Injectable({
  providedIn: 'root'
})
export class BikeProviderService {
    // Array of conferences with their dates, images, titles, and contents // 0-indexed month
    private static bikesData: Bike[] = [
      { 
        name : "Vélo 1",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
      { 
        name : "Vélo 2",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
      { 
        name : "Vélo 3",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
      { 
        name : "Vélo 4",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
      { 
        name : "Vélo 5",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
      { 
        name : "Vélo 6",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
      { 
        name : "Vélo 7",
        imagePath : 'assets/images/image10.png',
        description : "Bah mon vélooh !"
      },
    ];
  
    public static getBikesData() : Bike[] { return this.bikesData; }
    public static getDefaultBikeData() : Bike {
      return {
        name : '0000',
        imagePath : 'assets/images/image10.png',
        description : 'test'
      }
    }

    public static addBike(bike : Bike) { this.bikesData.push(bike); }
    public static removeBike(bike_to_remove : Bike) { this.bikesData = this.bikesData.filter(bike => bike !== bike_to_remove) }
}
