import React from 'react';
import axios from 'axios';
import {MTGPostInterface} from '../interfaces/MTGPostInterface';
import {MyProfileProps} from '../interfaces/MyProfileProps';
import { IonPage, IonHeader, IonToolbar, IonTitle, useIonViewDidEnter, IonContent, IonText, IonCard, IonCardTitle, IonRow, IonCol, IonCardHeader, IonCardContent, IonBadge, IonLabel, IonItem, IonCardSubtitle } from '@ionic/react';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;


const MTGCard: React.FC<MyProfileProps>  = ({match}) =>{

    const [mtgcard, setmtgcard]  = React.useState<MTGPostInterface>({
        _id: "",
        title: "",
        idUser: "",
        imageUrl: "",
        type: "",
        colour: "",
        date: "",
        rarity: "",
        description: "",
    });

    const [userName, setUsername] = React.useState({
        _id: "",
        username: "",
    });

    async function getTokenPromise(): Promise<any> {
        const item = await Storage.get({ key: 'jwt' });
        const data = JSON.parse(item.value || '{}');
        return(data.token);
    }


    

    
    useIonViewDidEnter(() => {
        return axios.get('http://localhost:3000/mtgcards/' + (match.params.id).toString()).then(response =>{
            setmtgcard(response.data);
            const userId = response.data.idUser;
            return getTokenPromise().then(token =>{
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'access-token': token,
                }
                axios.get('http://localhost:3000/users/' + (userId),{headers: headers}).then(userResponse =>{
                    const user = {_id: userResponse.data._id, username: userResponse.data.username}
                    setUsername(user);
                    return;
                });
            }); 
        })
    });

    

    return(
        <IonPage>
            <IonHeader>
                    <IonToolbar color="warning">
                    <IonTitle> Vista de Carta : MTG </IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <img style ={{width:'50%', margin:'auto'}}src = {mtgcard.imageUrl} />
                    <IonCardHeader>
                        <IonCardSubtitle>
                            {mtgcard.date}
                        </IonCardSubtitle>
                        <IonCardTitle>
                            {mtgcard.title}
                        </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel> Propietario </IonLabel>
                            <IonBadge color = 'black'>  {userName.username}</IonBadge>
                        </IonItem>                       
                        <IonItem>
                            <IonLabel> Tipo </IonLabel>
                            <IonBadge color = 'primary'>  {mtgcard.type}</IonBadge>
                        </IonItem>
                        <IonItem>
                            <IonLabel> Color </IonLabel>
                            <IonBadge> {mtgcard.colour} </IonBadge>
                        </IonItem>
                        <IonItem>
                            <IonLabel> Rareza
                                </IonLabel>
                            <IonBadge>  {mtgcard.rarity} </IonBadge>
                        </IonItem>
                        <IonItem>
                          {mtgcard.description}    
                        </IonItem>
                    </IonCardContent>                
                </IonCard>
            </IonContent>



        </IonPage>
    )
}

export default MTGCard;