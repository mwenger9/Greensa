import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringGuardService {
  constructor() { }

  // Check if the string is just white space(s)
  public static isStringValid = (str : string) => {
    return /[^\s]/.test(str); 
  }
  public static hasValidExt = (str : string, validExtensions : string[]) => { 
    return validExtensions.find((strExt : string) => {
      return str.endsWith(strExt);
    });
  }
}
