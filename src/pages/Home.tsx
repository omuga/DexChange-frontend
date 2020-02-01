

import { IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonButton, IonCol, IonInput, IonItem} from '@ionic/react';
import React from 'react';


const Image = {src: 'https://www.onlinelogomaker.com/applet_userdata/version2/6/6/75188036/projects/75188036.png', text: 'DexChange'};




const Home: React.FC = () => {
  return (
    <IonPage>
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
        <IonLabel style={{ fontWeight:900 }}  position="fixed">Password</IonLabel>
        <IonInput></IonInput>
    </IonItem>
      <section id="last">

        <IonRow>
          <IonCol>
            <IonButton class="login_button"  size= "large" expand="block">Login</IonButton>
          </IonCol>
        </IonRow>
          <IonRow>
          <IonCol>
              <IonButton routerLink= "/register" class="register_button"  size= "large" expand="block">Don't have an account? Sign in</IonButton>
          </IonCol>
        </IonRow>
      </section>
    </IonPage>
  );
};



export default Home;
