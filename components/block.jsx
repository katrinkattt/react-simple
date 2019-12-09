import React, {Component} from 'react';



const words = [
    {id:1, title:'text1', content:'slovaaa mnogo slov'},
    {id:2, title:'text2', content:'eche slova i eche'},
    {id:3, title:'text3', content:'v thret zagolovke'}
];

function RenderText(props){
       // ADD FOR HZ
        const texts = (
        <div>
            {props.words.map((post) =>
            <p key={post.id}>
                {post.title}
            </p>
            )}
        </div>
    )
    const content = (
    <div>
        {props.words.map((post) =>
            <p key={post.id}>
                {post.content}
            </p>
        )}
    </div>
    );
    return(
        <div>
            {texts}
            <hr />
            {content}
        </div>
    );
}

export default class Block extends Component {
    render(){
        return(
            <div className="block_line">
                <div className="block__one">
                    <div className="block__foto"></div>
                    <div key="title"className="block__title"></div>
                    <div key="text" className="block__text"></div>
                </div>
            </div>
        )
    }
}






