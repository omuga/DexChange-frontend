

import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonPage, IonRow, IonLabel, IonInput, IonCol, IonButton, IonSelect, IonSelectOption } from '@ionic/react';

const MTGPost: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Añadir Publicacion - MTG </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem class= "round">
          <IonLabel style={{ fontWeight:300 }} position="fixed">Nombre</IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>
            Tipo
          </IonLabel>
          <IonSelect>
            <IonSelectOption> Tierra </IonSelectOption>
            <IonSelectOption selected> Criatura </IonSelectOption>
            <IonSelectOption > Artefacto </IonSelectOption>
            <IonSelectOption> Encantamiento </IonSelectOption>
            <IonSelectOption> Planeswalker </IonSelectOption>
            <IonSelectOption> Instantáneo </IonSelectOption>
            <IonSelectOption> Conjuro </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>
            Color
          </IonLabel>
          <IonSelect>
            <IonSelectOption> Incolora</IonSelectOption>
            <IonSelectOption> Blanco </IonSelectOption>
            <IonSelectOption > Rojo </IonSelectOption>
            <IonSelectOption selected> Criatura </IonSelectOption>
            <IonSelectOption > Azul </IonSelectOption>
            <IonSelectOption> Negro </IonSelectOption>
            <IonSelectOption> Verde </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>
            Rareza
          </IonLabel>
          <IonSelect>
            <IonSelectOption> Rara Mítica </IonSelectOption>
            <IonSelectOption > Raras </IonSelectOption>
            <IonSelectOption > Infrecuente </IonSelectOption>
            <IonSelectOption selected> Criatura </IonSelectOption>
            <IonSelectOption > Común</IonSelectOption>
            <IonSelectOption> Tierra Básica </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem class= "round">
          <IonLabel style={{ fontWeight:300 }} position="fixed">Fecha</IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem class= "round">
          <IonLabel style={{ fontWeight:300 }} position="fixed">Descripción</IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <section id="last">
          <IonRow>
            <IonCol>
              <IonButton class="login_button"  size= "large" expand="block">Añadir</IonButton>
            </IonCol>
          </IonRow>
        </section>
      </IonPage>
    );
  };
  
export default MTGPost;