

import { IonLabel, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonButton, IonCol, IonInput, IonItem} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const Image = {src: 'https://www.onlinelogomaker.com/applet_userdata/version2/6/6/75188036/projects/75188036.png', text: 'DexChange'};

class Home extends React.Component<RouteComponentProps<any>,{email:string, password:string}> {
  constructor(props: RouteComponentProps){
    super(props);
    this.state = {email:'', password:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    const keyname= event.target.name;
    this.setState({
      [keyname]: event.target.value,
    } as any);
  }

  handleSubmit(event:any){
    var email = this.state.email;
    var password = this.state.password;
    this.loginUsuario(email,password);
    event.preventDefault();
  }

  async loginUsuario(email:String, password:String ){
    axios.post('http://localhost:3000/auth/authenticate',{email:email,password:password}).then(async res =>{
        if (res.status === 200){
          alert(res.data.mensaje);
          await Storage.set({
            key: 'jwt',
            value: JSON.stringify({
              token: res.data.token,
            }),
          });
          var userId = res.data.userId;
          await Storage.set({
            key: 'id',
            value: JSON.stringify({
              id: userId,
            }),
          });
          this.props.history.push('/myProfile/' + userId);
        } else {
          alert('Error al enviar peticion al servidor');
        };
        }).catch(
          error => {
            alert(error.response.data.mensaje);
          });
  }

  render(){
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
        <form onSubmit={this.handleSubmit}>
          <IonItem class= "round">
            <IonLabel style={{ fontWeight:900 }} position="fixed">Email</IonLabel>
            <IonInput  name= "email" type="email" required value={this.state.email} onIonChange={(event) => this.handleChange(event)} ></IonInput>        
          </IonItem>
          <IonItem class= "round">
            <IonLabel style={{ fontWeight:900 }}  position="fixed">Password</IonLabel>
            <IonInput  name= "password" type="password" required value={this.state.password} onIonChange={(event) => this.handleChange(event)} ></IonInput>      
          </IonItem>
          <section id="last" style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <IonRow>
              <IonCol>
                <IonButton class="login_button"  type='submit' size= "large"  expand="block">Login</IonButton>
              </IonCol>
            </IonRow>
              <IonRow>
              <IonCol>
                  <IonButton routerLink= "/register" class="register_button"  size= "large" expand="block">Don't have an account? Sign in</IonButton>
              </IonCol>
            </IonRow>
          </section>
          </form>
      </IonPage>
    );
  }
}


export default Home;
