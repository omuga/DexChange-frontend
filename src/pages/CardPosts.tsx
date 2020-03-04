import React from 'react';
import Menu from './Menu';
import axios from 'axios';
import {MTGPostInterface} from '../interfaces/MTGPostInterface';
import { IonPage, IonHeader, IonToolbar, IonTitle, useIonViewDidEnter, IonList, IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonSearchbar, IonItem } from '@ionic/react';
const CardPosts: React.FC = (props:any) => {

    const [posts, setposts]  = React.useState<MTGPostInterface[]>([]);

    useIonViewDidEnter(() => {
        return axios.get('http://localhost:3000/mtgcards').then(response =>{
            setposts(response.data);
            return;
        })
    });

    const show = (id:string) =>{
        props.history.push('/cardposts/'+ id);
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle> 
                        Lista de Cartas 
                    </IonTitle>
                </IonToolbar>
                </IonHeader>   
            <Menu></Menu>
            <IonToolbar>
                <IonSearchbar>

                </IonSearchbar>
            </IonToolbar>  

            <IonList>
                    {
                        posts.map((post) =>{
                            return (
                                <IonItem onClick = {(event) => show(post['_id'].toString())} key={post['_id']}>
                                        <IonCardHeader >
                                                <IonCardSubtitle >  Magic: The Gathering </IonCardSubtitle>
                                                <IonCardTitle >{post['title']}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            {post['description']}
                                        </IonCardContent>
                                </IonItem>
                            );
                        })

                    }   
            </IonList>         
        </IonPage>
    )
}

export default CardPosts;