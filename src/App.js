import React, { Component } from 'react';
import {TabBar} from 'antd-mobile'
import Movie from './Components/Movie'
import Music from './Components/Music'
import Books from './Components/Books'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'movieTab',
      fullScreen:true
    }
  }
  renderContent(pageText){
    return (
      <div>A</div>
    )
  }
  render() { 
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="电影"
            key="movie"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'movieTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'movieTab',
              });
            }}
          >
            <Movie></Movie>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="音乐"
            key="music"
            selected={this.state.selectedTab === 'musicTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'musicTab',
              });
            }}
          >
            <Music></Music>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="图书"
            key="books"
            selected={this.state.selectedTab === 'booksTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'booksTab',
              });
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