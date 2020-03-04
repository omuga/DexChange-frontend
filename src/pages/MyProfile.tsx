import { IonContent, IonToolbar, IonTitle, IonHeader, IonCard, IonCardTitle, IonCardHeader,IonBadge, IonAvatar, IonCol, IonRow, IonText, IonItem, IonLabel, useIonViewDidEnter, IonPage} from '@ionic/react';
import React  from 'react';
import Menu from './Menu';
import axios from 'axios';
import { Plugins } from '@capacitor/core';
import {User} from '../interfaces/UserInterface';
import {MyProfileProps} from '../interfaces/MyProfileProps';
const { Storage } = Plugins;


const Image = {src: 'https://thumbs.dreamstime.com/b/hombre-en-la-l%C3%ADnea-an%C3%B3nima-icono-del-avatar-de-los-vidrios-con-el-ejemplo-vector-cuello-aislado-blanco-esquema-masculino-retrato-127785045.jpg', text: 'DexChange'};






const MyProfile: React.FC<MyProfileProps> = ({match}) => {

    const [user, setUser]  = React.useState<User>({
        _id: "",
        email: "",
        username: "",
        confianza: "",
    });



    async function getTokenPromise(): Promise<any> {
        const item = await Storage.get({ key: 'jwt' });
        const data = JSON.parse(item.value || '{}');
        return(data.token);
    }

    
    useIonViewDidEnter(() => {
        getTokenPromise().then(token =>{
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'access-token': token,
            }
            return axios.get('http://localhost:3000/users/' + (match.params.id).toString(),{headers: headers}).then(response =>{
                setUser(response.data);
                return;
            });
        }); 
      });


    return (
            <IonPage>   
                <Menu></Menu>
                <IonHeader>
                    <IonToolbar color="warning">
                    <IonTitle> Mi Perfil</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonCard>
                        <IonRow>
                        <IonCol>
                            <IonAvatar class="ion-avatar">
                                <img  src={Image.src} alt="Avatar"></img>    
                            </IonAvatar>
                        </IonCol>  
                        <IonCol>
                            <IonCardHeader>
                                <IonCardTitle  style={{ fontWeight:900 }} id="nombre-perfil">                 
                                    {Object.keys(user).length >= 0 ? <p> {user.username} </p>: <h1> Error  </h1>}
                                </IonCardTitle>
                                <IonCol>
                                    <IonRow>
                                        <IonText color="dark" class="nombre-card-perfil">
                                            <h2>Reputación del Usuario </h2>
                                        </IonText>
                                    </IonRow>
                                    <IonRow>
                                        <IonText color="success">
                                            {Object.keys(user).length >= 0 ? <h2> {user.confianza} </h2>: <h1> Error  </h1>}
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                                <IonCol>
                                    <IonRow>
                                        <IonText color="dark">
                                           <h2> Transacciones </h2> 
                                        </IonText>
                                    </IonRow>
                                    <IonRow>
                                        <IonText color="success">
                                            <h2> 50</h2>
                                        </IonText>
                                    </IonRow>
                                </IonCol>
                            </IonCardHeader>
                        </IonCol>
                        </IonRow>   
                    </IonCard>
                    <IonCard>
                        <IonItem>
                            <IonLabel>
                                {Object.keys(user).length >= 0 ? <h2>  Email : {user.email} </h2> : <h1> 9 </h1>}
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Reputación</IonLabel>
                            <IonBadge color="success" slot="end">98</IonBadge>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Transacciones Exitosas</IonLabel>
                            <IonBadge color="light" slot="end">20</IonBadge>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Publicaciones Activas</IonLabel>
                            <IonBadge color="light" slot="end">8</IonBadge>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Número de Comentarios</IonLabel>
                            <IonBadge color="light" slot="end">90</IonBadge>
                        </IonItem>
                    </IonCard>
                </IonContent>
            </IonPage>
        );
    }


export default (MyProfile);