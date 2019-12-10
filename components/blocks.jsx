import React, {Component} from 'react';
import Block from './block';


export default class Blocks extends Component {
    initialState = {
        currentId:0,
        blockS:[
            {
                title:'commerce',
                text:'ldiuf hsdk fhosdf jsdof pjoify'
            },
            {
                title:'offers',
                text:'oqwer tyui oasd fghjk'
            },
            {
                title:'products',
                text:'nbvcxz asd fghjk lpoi uytrew'
            }
        ]
    }
    
    render(){
        return(
            <div  className="container container__first">
                <div className="title__section">Offers</div>
                <div className="blockLine col">
                <div class="row align-items-center">
                    <div class="col">
                        <Block title={this.initialState.blockS[0].title} text={this.initialState.blockS[0].text} />
                    </div>
                    <div class="col">
                        <Block title={this.initialState.blockS[1].title} text={this.initialState.blockS[1]}/>
                    </div>
                    <div class="col">
                        <Block title={this.initialState.blockS[2].title} text={this.initialState.blockS[2]} />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
