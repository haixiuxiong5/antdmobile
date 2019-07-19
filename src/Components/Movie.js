import React, { Component } from 'react';
import {WingBlank,WhiteSpace,SegmentedControl} from 'antd-mobile'
import HotMovie from './HotMovie'
import SoonMovie from './SoonMovie'
import TopMovie from './TopMovie'


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectIndex:0
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(e){
        this.setState({
            selectIndex:e.nativeEvent.selectedSegmentIndex
        })
    }
    renderbody(){
        let index=this.state.selectIndex;
        if(index===0){
            return (<HotMovie></HotMovie>)
        }else if(index===1){
            return (<SoonMovie></SoonMovie>)
        }else{
            return (<TopMovie></TopMovie>)
        }
    }
    render() {
        return (
            <div>
                <WingBlank>
                    <WhiteSpace size="lg" />
                    <SegmentedControl values={['最近热映', '即将上映', 'top250']} selectedIndex={this.state.selectIndex} onChange={this.onChange}/>
                    <div style={{marginTop:'10px'}}>
                        {this.renderbody()}
                    </div>
                </WingBlank>
            </div>
        );
    }
}
 
export default Movie;