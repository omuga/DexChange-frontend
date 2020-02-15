import { IonPage, IonContent, IonToolbar, IonTitle, IonHeader, IonCard, IonCardTitle, IonCardHeader,IonBadge, IonAvatar, IonCol, IonRow, IonText, IonItem, IonLabel} from '@ionic/react';
import React from 'react';
import Menu from './Menu';

const Image = {src: 'https://thumbs.dreamstime.com/b/hombre-en-la-l%C3%ADnea-an%C3%B3nima-icono-del-avatar-de-los-vidrios-con-el-ejemplo-vector-cuello-aislado-blanco-esquema-masculino-retrato-127785045.jpg', text: 'DexChange'};

const UserProfile: React.FC = () =>{
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
                            <IonCardTitle style={{ fontWeight:900 }} id="nombre-perfil">Rodolfo Jaramillo</IonCardTitle>
                            <IonCol>
                                <IonRow>
                                    <IonText color="dark" class="nombre-card-perfil">
                                        <h2>Reputación del Usuario </h2>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="success">
                                       <h2> +56 </h2> 
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

export default UserProfile;