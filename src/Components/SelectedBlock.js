import React, { Component } from 'react';
class SelectedBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="likedblock">
                <h4>已选分类(<em id="f-num">{this.props.likedList.length}</em>)</h4>
                 <div className="selected-list" style={{overflow: 'auto'}}>
                    <ul className="feed-list">
                        {
                            this.props.likedList.length > 0 ?
                            this.props.likedList.map((item, index) => {
                                return (
                                    <li style={{position: 'relative'}} key={item.id}>
                                        <span>{item.name}</span>
                                        <a className="deleIcon" onClick={()=>{this.props.deleteLiked(item.id)}}>
                                            X
                                        </a>
                                    </li>
                                )
                            })
                            :
                            <li style={{float:'none',width:'90%',boxSizing:'border-box',margin:'4px auto'}}>还没有任何订阅<br />请从下方选择订阅</li>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default SelectedBlock;