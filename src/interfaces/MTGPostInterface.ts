import {default as firebase} from '../firebase/firebase';

export interface MTGPostInterface {
    _id: string,
    title: string,
    idUser: string,
    imageUrl: string,
    type: string,
    colour:string, 
    date:string,
    rarity:string,
    description:string
}