import React, { Component } from 'react';
class SelectListBlock extends Component {
    constructor(props) {
        super(props);
        this.state={
            flag:0
        }
    }
    
    
    onChangeGroup(){
        let flagnow=this.state.flag;
        if(flagnow+6>16){
            this.setState({
                flag:0
            })
        }else{
            this.setState({
                flag:flagnow+6
            })
        }
    }
    onSelectItem(id, name) {
        let likedListKey =[];
        for (var i of this.props.likedList) {
            likedListKey.push(i.id)
        }
        if ( likedListKey.indexOf(id) >= 0 ) {
            return;
        }
        this.props.addToLiked(id, name);
    }
    render() {
        let likedListKey =[];
        for (var i of this.props.likedList) {
            likedListKey.push(i.id)
        }
        return (
            <div className="selectBlock">
                <h4 className="clr">
                选择分类<span onClick={this.onChangeGroup.bind(this)} style={{float:'right'}}>换一换</span></h4>
                 <ul className="feed-list clr">
                    {
                        this.props.selectList.slice(this.state.flag, this.state.flag+6).map((item, index)=>{
                            return (
                                <li key={item.id} onClick={this.onSelectItem.bind(this,item.id,item.name)}>
                                    {(likedListKey.indexOf(item.id)>=0?
                                        <span className='disable'>{item.name}</span>
                                        :
                                        <span>{item.name}</span>
                                    )}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default SelectListBlock;