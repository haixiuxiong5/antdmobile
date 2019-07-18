import React, { Component } from 'react';
import {ListView,Card,Toast} from 'antd-mobile'
import axios from 'axios'




class SoonMovie extends Component {
    constructor(props) {
        super(props);
        
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource,
            refreshing: true,
            isLoading: true,
            hasMore:true,
            useBodyScroll: false,
            dataArr:[],//关键代码
            movieData:[],
            height: document.documentElement.clientHeight-120,
            start:0
        }
    }
    componentDidMount(){
        this.getData(true);
    }
    getData(ref=false){
        const that=this;
        console.log(that.state.start)
        axios.get(`/api/movie/coming_soon?start=${that.state.start}&count=10`).then((res)=>{
            const length=res.data.subjects.length;
            if(length===0){
                Toast.info('没有数据了',1)
                that.setState({
                    hasMore:false,
                    isLoading:false
                })
                return false;
            }
            let dataArr = that.state.dataArr;
            let datas=that.state.movieData;
            for(let i=0;i<length;i++){
                dataArr.push(`row - ${(that.state.start * length) + i}`)
                datas.push(res.data.subjects[i])
            }
            if(ref){
                that.setState({
                    movieData:res.data.subjects,
                    dataSource: that.state.dataSource.cloneWithRows(dataArr),
                    refreshing: false,
                    isLoading: false,
                    //保存数据进state
                    dataArr:dataArr
                });
                console.log( that.state.movieData);
            }else{
                that.rData = { ...that.rData, ...dataArr };
                that.setState({
                    movieData:datas,
                    dataSource: that.state.dataSource.cloneWithRows(that.rData),
                    refreshing: false,
                    isLoading:false,
                    dataArr:dataArr,
                });
                console.log( that.state.movieData);

            }
        }).catch((err)=>{
            console.log('错误：'+err)
        })
    }
    onEndReached(event){
        let that=this;
        console.log('reach end', event);
        if (!that.state.hasMore) {
            return;
        }
        that.setState({ 
            isLoading: true,
            start:that.state.movieData.length
        });
        setTimeout(() => {
            that.getData(false);
        }, 1000);
    }
    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                }}
            />
        );
        let index = this.state.movieData.length - 1;
        const renderrow = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = this.state.movieData.length - 1;
            }
            const obj = this.state.movieData[index--];
            return (
                <Card full key={rowID}>
                    <Card.Body>
                        <div style={{display:'flex'}}>
                            <img src={obj.images.small} style={{width:'60px',height:'60px',objectFit:'cover',marginRight:'15px'}} alt=""/>
                            <div>{obj.title}</div>
                        </div>
                    </Card.Body>
                </Card>
            );
        };
        return (
            <div>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={renderrow}
                    renderSeparator={separator}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    scrollRenderAheadDistance={500}
                    onEndReachedThreshold={10}
                    onEndReached={this.onEndReached.bind(this)}
                    pageSize={5}
                    >
                </ListView>
            </div>);
    }
}
 
export default SoonMovie;