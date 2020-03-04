

import React from 'react';
import {default as firebase} from '../../firebase/firebase';
import { Plugins } from '@capacitor/core';
import axios from 'axios';
import {MTGInterface} from '../../interfaces/MTGInterface';
import { IonHeader, IonToolbar, IonTitle, IonItem, IonPage, IonRow, IonLabel, IonInput, IonCol, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
const { Storage } = Plugins;


class  MTGPost extends React.Component<{},MTGInterface> {
  constructor(props:any){
    super(props);
    this.state = {
      title: '',
      type: '',
      colour: '',
      rarity: '',
      description: '',
      referencia: undefined,
      file: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  agregarMTGCard(title:string,type:string,colour:string,rarity:string,description:string,imageUrl:string,idUser:string){
    axios.post('http://localhost:3000/mtgcards/',{title:title,type:type,colour:colour,rarity:rarity,description:description,imageurl:imageUrl,iduser:idUser}).then(res =>{
      if (res.status === 200){
        alert(res.data);
      } else{
        alert('No se ha podido registrar el Usuario');
      }
    });
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
    const file = this.state.file;
    const storageRef = this.state.referencia;
    const task = (storageRef as firebase.storage.Reference).put((file as File));
    task.on('state_changed', (snapshot) => {
      // Se lanza durante el progreso de subida
    }, (error) => {
      // Si ha ocurrido un error aquí lo tratamos
    }, () => {
      (storageRef as firebase.storage.Reference).getDownloadURL().then(url =>{
          const imageUrl = url;
          console.log(imageUrl);
          this.getUserId().then(userId =>{
            this.agregarMTGCard(this.state.title,this.state.type,this.state.colour,this.state.rarity,this.state.description,imageUrl,userId);
          });
      });
    });
    event.preventDefault();
  }

  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Añadir Publicacion - MTG </IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={this.handleSubmit}>
        <IonItem class= "round">
          <IonLabel style={{ fontWeight:300 }} position="fixed">Nombre</IonLabel>
          <IonInput name='title' type='text' required value={this.state.title} onIonChange={(event) => this.handleChange(event)}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>
            Tipo
          </IonLabel>
          <IonSelect name='type' onIonChange={(event) => this.handleChange(event)}>
            <IonSelectOption value='Tierra'> Tierra </IonSelectOption>
            <IonSelectOption selected value='Criatura'> Criatura </IonSelectOption>
            <IonSelectOption value='Artefacto'> Artefacto </IonSelectOption>
            <IonSelectOption value='Encantamiento'> Encantamiento </IonSelectOption>
            <IonSelectOption value='Planeswalker'> Planeswalker </IonSelectOption>
            <IonSelectOption value='Instantáneo'> Instantáneo </IonSelectOption>
            <IonSelectOption value='Conjuro'> Conjuro </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>
            Color
          </IonLabel>
          <IonSelect name='colour' onIonChange={(event) => this.handleChange(event)}>
            <IonSelectOption> Incolora</IonSelectOption>
            <IonSelectOption> Blanco </IonSelectOption>
            <IonSelectOption selected > Rojo </IonSelectOption>
            <IonSelectOption > Azul </IonSelectOption>
            <IonSelectOption> Negro </IonSelectOption>
            <IonSelectOption> Verde </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel>
            Rareza
          </IonLabel>
          <IonSelect name='rarity' onIonChange={(event) => this.handleChange(event)}>
            <IonSelectOption selected> Legendaria </IonSelectOption>
            <IonSelectOption> Rara Mítica </IonSelectOption>
            <IonSelectOption > Raras </IonSelectOption>
            <IonSelectOption > Infrecuente </IonSelectOption>
            <IonSelectOption > Común</IonSelectOption>
            <IonSelectOption> Tierra Básica </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem class= "round">
          <IonLabel style={{ fontWeight:300 }}  position="fixed">Descripción</IonLabel>
          <IonInput name='description' required value={this.state.description} onIonChange={(event) => this.handleChange(event)} ></IonInput>
        </IonItem>
        <IonItem class= "round">
         <input required type="file" onChange = {(event) => this.handleImageChange(event)}></input>
        </IonItem>
        <section id="last">
          <IonRow>
            <IonCol>
              <IonButton class="login_button"  type='submit' size="large" expand="block">Añadir</IonButton>
            </IonCol>
          </IonRow>
        </section>
        </form>
      </IonPage>
    );
  }
  };
  
export default MTGPost;