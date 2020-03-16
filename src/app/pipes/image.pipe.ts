import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath; 

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {

    if (!img){
      return;
    }
    const imgUrl = `${URL}/${size}/${img}`
      console.log(imgUrl);  

      return imgUrl;

  }


}
//Peticion
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
