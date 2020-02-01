import React from 'react';
import Menu from './Menu';
import { IonPage, IonLabel } from '@ionic/react';

const UserPosts: React.FC = () => {
    return(
        <IonPage>
            <Menu></Menu>
            <IonLabel>User Posts</IonLabel>
        </IonPage>
    );
}

export default UserPosts;