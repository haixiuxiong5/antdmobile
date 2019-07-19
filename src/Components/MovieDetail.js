import React, { Component } from 'react';
import axios from 'axios'
import {Toast} from 'antd-mobile'
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieId:this.props.location.state.id,
            movieInfo:{},
            loading:true
        }
        console.log(this.state.movieId)
    }
    render() { 
        if(this.state.loading){
            return (
               <div></div>
            );
        }else{
            return (
                <div style={style.container}>
                    <div style={style.baseinfo}>
                        <img style={style.movieimg} src={this.state.movieInfo.images.small}/>
                        <div>
                            <h4>{this.state.movieInfo.title}</h4>
                        </div>
                    </div>
                    <div>{this.state.movieInfo.summary}</div>
                </div>
            )
        }
    }
    componentDidMount(){
        Toast.loading('Loading...')
        axios.get(`/api/movie/subject/${this.state.movieId}`).then((res)=>{
            if(res.status===200){
                Toast.hide()
                this.setState({
                    movieInfo:res.data,
                    loading:false
                })
            }
            console.log(res)
        })
    }
}
const style={
    container:{
        padding:'20px',
    },
    baseinfo:{
        overflow:'hidden',
        paddingBottom:'20px'
    },
    movieimg:{
        float:'left',
        width:'100px',
        height:'140px',
        marginRight:'20px',
        objectFit:'cover'
    }
}
 
export default MovieDetail;