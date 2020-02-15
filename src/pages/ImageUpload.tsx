import React, {Component} from 'react';
import {default as  firebase} from '../firebase/firebase';
//import {default as  storage} from '../firebase/firebase';



class ImageUpload extends Component<{}, {referencia:firebase.storage.Reference| undefined,file:File | undefined}> {
    constructor(props:any){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {referencia: undefined, file:undefined}
    }

    handleChange = (event:any) =>{
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`cartas/${file.name}`);
        this.setState({
            referencia: storageRef,
            file:file
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
                console.log(url);
            });
          });
        event.preventDefault();

    }

    render(){
        return (
                <form onSubmit= {(event) => this.handleSubmit(event)}> 
                <div>
                    <input  type="file" onChange  ={(event) => this.handleChange(event)} />
                    <button type='submit'> HHH</button>
                </div>
                </form>

        )
    }
}

export default ImageUpload;