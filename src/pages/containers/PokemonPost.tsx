import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonPage, IonRow, IonLabel, IonInput, IonCol, IonButton, IonSelect, IonSelectOption } from '@ionic/react';

const PokemonPost = () => {
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Añadir Publicacion - Pokémon </IonTitle>
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
            <IonSelectOption selected> Criatura </IonSelectOption>
              <IonSelectOption > Pokémon </IonSelectOption>
              <IonSelectOption > Energía </IonSelectOption>
              <IonSelectOption > Carta de Entrenador - Objeto </IonSelectOption>
              <IonSelectOption > Carta de Entrenador - Partidario </IonSelectOption>
              <IonSelectOption > Carta de Entrenador - Estadio </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>
              Rareza
            </IonLabel>
            <IonSelect>
              <IonSelectOption selected > Común </IonSelectOption>
              <IonSelectOption > Poco Común </IonSelectOption>
              <IonSelectOption > Rara </IonSelectOption>
              <IonSelectOption> Holo Rara</IonSelectOption>
              <IonSelectOption> Reverse Holo </IonSelectOption>
              <IonSelectOption> EX/GX Half Art / Half Body </IonSelectOption>
              <IonSelectOption> Full Art/ Full Body </IonSelectOption>
              <IonSelectOption > Rara Secreta </IonSelectOption>
              <IonSelectOption > Promo </IonSelectOption>
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

export default PokemonPost;