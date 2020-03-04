import {default as firebase} from '../firebase/firebase';

export interface MTGInterface {
    title: string,
    type: string,
    colour:string, 
    rarity:string,
    description:string,
    referencia:firebase.storage.Reference|undefined,
    file: File |undefined
}