import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string ="";
  urlImg: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event:any, name: string){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `image/` + name)
    uploadBytes(imgRef, file)
    .then(response => { 
      this.getImages(name);
      //this.getURLImage(name);
    })
    .catch(error => console.log(error) );
  }

  getImages(name: string){
    const imagesRef = ref(this.storage, 'image');
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        if(item.name === name){
          this.url = await getDownloadURL(item)
        }
      }
    })
    .catch(error => console.log(error))
  }

  /*
  getImages(){
    const imagesRef = ref(this.storage, 'image');
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error) )
  }
  */

  //Buscar url de la imagen recien subida
  /*
  getURLImage(nameImg: string){
    const imagesRef = ref(this.storage, 'image');
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        if(item.name === nameImg){
          this.urlImg = await getDownloadURL(item);
        }
      }
    })
    .catch(error => console.log(error));
  }
  */
}
