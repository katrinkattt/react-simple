import React, {Component} from 'react';
// import Block from './block';

var initialState = {
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

var Blockss = document.getElementById('blockList')


export default class Blocks extends Component {
    render(){
        return(
            <div  className="container container__first">
                <div id="blockList"></div>
                ${
                function renderText(){
                    let innerContent = ''
                    initialState.blockS.map((orderObj, id) => {
                        innerContent += `
                        <div className="block_line col-sm"">
                            <div className="block__one">
                                <div className="block__foto"></div>
                                <div className="block__title">
                                    ${orderObj.title}
                                </div>
                                <div className="block__text">
                                    ${ orderObj.text}
                                </div>
                            </div>
                        </div>
                        `
                        })
                    Blockss.html(innerContent);
                    renderText();
                    }
                }
            </div>
        )
    }
}

