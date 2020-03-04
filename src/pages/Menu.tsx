

import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

export const Menu: React.FC = () => (
  <>
    <IonMenu contentId="my-content" menuId="first" side="start">
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle> DexChange</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonItem routerLink="/" >Mi Perfil</IonItem>
        <IonItem routerLink="/profileposts">Mis Publicaciones</IonItem>
        <IonItem>Mis Comentarios</IonItem>
        <IonItem>Mensajes</IonItem>
        <IonItem routerLink="/users-list">Todos los Usuarios </IonItem>
        <IonItem routerLink="/cardposts">Publicaciones</IonItem>
        </IonList>
          </IonContent>
        </IonMenu>

    <IonRouterOutlet id="my-content"  ></IonRouterOutlet>
  </>
);

export default Menu;