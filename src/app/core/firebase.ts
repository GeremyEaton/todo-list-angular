import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

export class Firebase {
    constructor() {
        firebase.initializeApp(environment.firebase);
      }
}
