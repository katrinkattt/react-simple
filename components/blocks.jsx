import React, {Component} from 'react';
import Block from './block';


export default class Blocks extends Component {
    initialState = {
        currentId:0,
        title:[
                'commerce',
                'offers',
                'products',
            ],
        text:[
            'ldiuf hsdk fhosdf jsdof pjoify',
            'oqwer tyui oasd fghjk',
            'nbvcxz asd fghjk lpoi uytrew'
            ]
            
            
    }       
            
//         blockS:[
            
//             {
//                 title:'commerce',
//                 text:'ldiuf hsdk fhosdf jsdof pjoify'
//             },
//             {
//                 title:'offers',
//                 text:'oqwer tyui oasd fghjk'
//             },
//             {
//                 title:'products',
//                 text:'nbvcxz asd fghjk lpoi uytrew'
//             }
//         ]
//     }
    
    render(){
        return(
            <div  className="container container__first">
                <div className="title__section">Offers</div>
                <div className="blockLine col">
                <div class="row align-items-center">
                    this.initialState.
                    <div class="col">
                        <Block title={this.initialState.title} text={this.initialState.text} />
                    </div>
                    <div class="col">
                        <Block title={this.initialState.title} text={this.initialState.text]}/>
                    </div>
                    <div class="col">
                        <Block title={this.initialState.title} text={this.initialState.text} />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
