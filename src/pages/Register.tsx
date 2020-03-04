

import { IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonButton, IonCol, IonInput, IonItem, IonMenu, IonContent, IonList, IonRouterOutlet} from '@ionic/react';
import React from 'react';
import {RouteComponentProps} from 'react-router';
import axios from 'axios';


const Image = {src: 'https://www.onlinelogomaker.com/applet_userdata/version2/6/6/75188036/projects/75188036.png', text: 'DexChange'};

class Register extends React.Component<RouteComponentProps<any>,{username: string,email:string,password:string, password_confirm:string}> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {username: '',email:'', password:'',password_confirm:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registroUsuario = this.registroUsuario.bind(this);

  }
  
  handleChange(event:any) {
    const keyname= event.target.name;
    this.setState({
      [keyname]: event.target.value,
    } as any);
  }

  registroUsuario(username:String, email:String, password:String ){
    axios.post('http://localhost:3000/auth/register',{username:username,email:email,password:password}).then(res =>{
        if (res.status === 200){
          alert(res.data);
          this.props.history.push('/');
        } else{
          alert('No se ha podido registrar el Usuario');
        }
  });
  }


  handleSubmit(event:any) {
    var pass1 = this.state.password;
    var pass2 = this.state.password_confirm;
    if (!(pass1.localeCompare(pass2) === 0)){
      alert("Las constraseñas deben coincidir");
    } else{
      this.registroUsuario(this.state.username,this.state.email,this.state.password);
    }
    event.preventDefault();
  }

  render(){
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
        <form onSubmit={this.handleSubmit}>
          <IonItem class= "round">
            <IonLabel style={{ fontWeight:900 }} position="fixed">Username</IonLabel>
            <IonInput  name= "username" type="text" required value={this.state.username} onIonChange={(event) => this.handleChange(event)} ></IonInput>
          </IonItem>
          <IonItem class= "round"> 
            <IonLabel style={{ fontWeight:900 }} position="fixed">Email</IonLabel>
            <IonInput  name= "email" type="email" required value={this.state.email} onIonChange={(event) => this.handleChange(event)} ></IonInput> 
          </IonItem>
          <IonItem class= "round">
            <IonLabel style={{ fontWeight:900 }}  position="fixed">Password</IonLabel>
            <IonInput  name= "password" type="password" required value={this.state.password} onIonChange={(event) => this.handleChange(event)} ></IonInput>
          </IonItem>
          <IonItem class= "round">
            <IonLabel class="ion-text-wrap" style={{ fontWeight:900 }}  position="fixed">Confirm Password</IonLabel>
            <IonInput  name= "password_confirm" type="password" required value={this.state.password_confirm} onIonChange={(event) => this.handleChange(event)} ></IonInput>
          </IonItem>
          <IonRow>
            <IonCol>
              <section id="last"  style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
              <IonButton class="login_button"  size= "large" expand="block" type="submit" >Sign in</IonButton>
              </section>
            </IonCol>
          </IonRow>
        </form>
      </IonPage>
    );
  }
}


export default Register;
