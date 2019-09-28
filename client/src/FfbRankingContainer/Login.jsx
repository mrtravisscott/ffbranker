import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            title:"",
            description: ""
        }
    }
    handleChange = (e) => {
        this.setState({
[e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMovie(this.state)
    }
    createMovie = async (formData) => {
        console.log(formData);
        try{
            const NewMovie = await fetch ("localhost:9000/api/v1/movies", {
                methode: "POST",
                body:JSON.stringify(formData),
                header: {
    "Content-Type": "application/json"
            }
            })
            const parsedResponse = await NewMovie.json();
            if(parsedResponse.status.code ===201){
                this.setState({
                    movies: [...this.state.movies, parsedResponse.dadta]
                })
            }
        }catch(err){
            
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a new movie</h4>
                <label htmlFor="title"> Title:</label>
                <input type="text" name="title" onChange={this.handleChange}/>
                <br></br>
                <label htmlFor="description">description:</label>
                <textarea name="description" onChange={this.handleChange}></textarea>
                <input type="submit" value="Create a Movie" />
            </form>
        )
    }
}

export default Login;