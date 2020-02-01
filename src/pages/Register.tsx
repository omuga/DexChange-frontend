

import { IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonButton, IonCol, IonInput, IonItem, IonMenu, IonContent, IonList, IonRouterOutlet} from '@ionic/react';
import React from 'react';

const Image = {src: 'https://www.onlinelogomaker.com/applet_userdata/version2/6/6/75188036/projects/75188036.png', text: 'DexChange'};




const Register: React.FC = () => {
  return (
    <IonPage>

<IonMenu contentId="my-content" menuId="first" side="start">
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle> DexChange</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Mi Perfil</IonItem>
          <IonItem>Mis Publicaciones</IonItem>
          <IonItem>Mis Comentarios</IonItem>
          <IonItem>Mensajes</IonItem>
          <IonItem> </IonItem>
          <IonItem>Publicaciones</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonRouterOutlet id="my-content"  ></IonRouterOutlet>


      <IonHeader>
        <IonToolbar>
          <IonTitle>DexChange</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonRow>
        <img  style= {{ marginLeft: "auto", marginRight: "auto",  width: "100", height: "100" }} alt = "DexChange" src= {Image.src}></img>
      </IonRow>
      <IonItem class= "round">
        <IonLabel style={{ fontWeight:900 }} position="fixed">Username</IonLabel>
        <IonInput ></IonInput>
      </IonItem>
      <IonItem class= "round">
        <IonLabel style={{ fontWeight:900 }} position="fixed">Email</IonLabel>
        <IonInput ></IonInput>
      </IonItem>
      <IonItem class= "round">
        <IonLabel style={{ fontWeight:900 }}  position="fixed">Password</IonLabel>
        <IonInput></IonInput>
      </IonItem>
      <IonItem class= "round">
        <IonLabel class="ion-text-wrap" style={{ fontWeight:900 }}  position="fixed">Confirm Password</IonLabel>
        <IonInput></IonInput>
    </IonItem>
      <section id="last">
        <IonRow>
          <IonCol>
            <IonButton class="login_button"  size= "large" expand="block">Sign in</IonButton>
          </IonCol>
        </IonRow>
      </section>
    </IonPage>
  );
};



export default Register;
