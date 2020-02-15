import React from 'react';
import Menu from './Menu';
import axios from 'axios';
import { IonPage, IonHeader, IonToolbar, IonTitle, useIonViewDidEnter, IonList, IonContent, IonItem, IonButton } from '@ionic/react';
import {getTokenPromise} from '../functions/APIFunctions';
import {User} from '../interfaces/UserInterface';




const UserList: React.FC = () =>{

    const [users, setUser]  = React.useState<User[]>([]);

    useIonViewDidEnter(() => {
        getTokenPromise().then(token =>{
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'access-token': token,
            }
            return axios.get('http://localhost:3000/users/',{headers: headers}).then(response =>{
                setUser(response.data);
                return;
            });
        }); 
      });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="warning">
                    <IonTitle> 
                        Lista de Usuarios 
                    </IonTitle>
                </IonToolbar>
                </IonHeader>   
            <Menu></Menu>
            <IonContent>
                <IonList>
                    {
                        users.map((user) =>{
                            return (
                                <IonItem key={user['_id']}>
                                {user['username']}
                                <IonButton  routerLink={'/users/' + user['_id']}   color="warning" slot="end">Ver Perfil</IonButton>
                                </IonItem>
                            );
                        })
                    }   
                </IonList>
            </IonContent>
         </IonPage>
    )
}

export default UserList;