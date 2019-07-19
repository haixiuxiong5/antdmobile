import React, { Component } from 'react';
import {TabBar} from 'antd-mobile'

import Movie from './Components/Movie'
import Music from './Components/Music'
import Books from './Components/Books'
import movieIcon from './images/movie.svg'
import musicIcon from './images/music.svg'
import bookIcon from './images/book.svg'
import movieIconS from './images/movie_S.svg'
import musicIconS from './images/music_S.svg'
import bookIconS from './images/book_S.svg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullScreen:true,
      pathname:'/movie'
    }
  }
  render() { 
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#009a61"
          barTintColor="white"
        >
          <TabBar.Item
            title="电影"
            key="movie"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${movieIcon}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${movieIconS}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.pathname==='/movie'}
            onPress={() => {
              this.setState({
                pathname:'/movie'
              })
            }}
          >
            <Movie></Movie>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${musicIcon}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${musicIconS}) center center /  21px 21px no-repeat` }}
              />
            }
            title="音乐"
            key="music"
            selected={this.state.pathname==='/music'}
            onPress={()=>{
              this.setState({
                pathname:'/music'
              })
            }}
          >
            <Music></Music>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${bookIcon}` }}
            selectedIcon={{ uri: `${bookIconS}` }}
            title="图书"
            key="books"
            selected={this.state.pathname==='/books'}
            onPress={()=>{
              this.setState({
                pathname:'/books'
              })
            }}
          >
            <Books></Books>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
 
export default App;