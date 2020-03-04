import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonPage, IonRow, IonLabel, IonInput, IonCol, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import {default as firebase} from '../../firebase/firebase';
import {PokemonInterface} from '../../interfaces/PokemonInterface';
const { Storage } = Plugins;

class PokemonPost extends React.Component<{},PokemonInterface> {
  
  constructor(props:any){
    super(props);
    this.state = {
      title: '',
      type: '',
      rarity: '',
      description: '',
      referencia: undefined,
      file: undefined
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  async  getUserId(): Promise<any> {
    const item = await Storage.get({ key: 'id' });
    const data = JSON.parse(item.value || '{}');
    return(data.id);
  }

  handleChange(event:any) {
    const keyname = event.target.name;
    this.setState({
      [keyname]: event.target.value,
    } as any);
  }

  handleImageChange(event:any) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`cartas/${file.name}`);
    this.setState({
      referencia: storageRef,
      file: file
    });
  }

  handleSubmit(event:any){
    console.log(this.state);
    event.preventDefault();
  }

  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Añadir Publicacion - Pokémon </IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit ={this.handleSubmit}>
        <IonItem class= "round">
          <IonLabel style={{ fontWeight:300 }} position="fixed">Nombre</IonLabel>
          <IonInput required name='title' value={this.state.title} onIonChange={(event) => this.handleChange(event)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>
            Tipo
          </IonLabel>
          <IonSelect name="type" onIonChange ={(event) => this.handleChange(event)}>
            <IonSelectOption selected> Pokémon </IonSelectOption>
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
          <IonSelect name="rarity" onIonChange ={(event) => this.handleChange(event)}>
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
          <IonLabel style={{ fontWeight:300 }} position="fixed">Descripción</IonLabel>
          <IonInput name='description' required value={this.state.description} onIonChange={(event) => this.handleChange(event)} ></IonInput>
        </IonItem>
        <IonItem class= "round">
         <input required type="file" onChange = {(event) => this.handleImageChange(event)}></input>
        </IonItem>
        <section id="last">
          <IonRow>
            <IonCol>
              <IonButton class="login_button"  type='submit' size= "large" expand="block">Añadir</IonButton>
            </IonCol>
          </IonRow>
        </section>
        </form>
      </IonPage>
    );
  }
}

export default PokemonPost;