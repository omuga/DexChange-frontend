import React from 'react';
import axios from 'axios';
import { IonPage, IonHeader, IonTitle, IonToolbar, useIonViewDidEnter, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import {MTGPostInterface} from '../interfaces/MTGPostInterface';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;



const ProfilePosts: React.FC = () => {

    const [profileposts, setprofileposts]  = React.useState<MTGPostInterface[]>([]);

    async function getUserId(): Promise<any> {
        const item = await Storage.get({ key: 'id' });
        const data = JSON.parse(item.value || '{}');
        return(data.id);
    }

    useIonViewDidEnter(() =>{
        getUserId().then(userId =>{
            return axios.get('http://localhost:3000/mtgcards/users/' + userId).then(response =>{
                setprofileposts(response.data);
                return
            })
        });
    })


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle> 
                        Lista de mis Posts
                    </IonTitle>
                </IonToolbar>
            </IonHeader> 
            <IonList>
            {
                        profileposts.map((post) =>{
                            return (
                                <IonCard routerLink={'/mtgcard/' + post['_id']} key={post['_id']}>
                                        <IonCardHeader>
                                                <IonCardSubtitle>  Magic: The Gathering </IonCardSubtitle>
                                                <IonCardTitle>{post['title']}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            {post['description']}
                                        </IonCardContent>
                                </IonCard>
                            );
                        })
                    }   
            </IonList>    
        </IonPage>
    )

}

export default ProfilePosts;