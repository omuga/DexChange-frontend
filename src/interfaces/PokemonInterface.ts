import {default as firebase} from '../firebase/firebase';

export interface PokemonInterface {
    title: string,
    type: string,
    rarity:string,
    description:string,
    referencia:firebase.storage.Reference|undefined,
    file: File |undefined
}