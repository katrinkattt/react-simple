import React, {Component} from 'react';
import Block from './block';

export default class Blocks extends Component {
    render(){
        return(
            <div className="container container__first">
                <div className="blocks">
                <div className="row">
                    <div className="col-sm">
                        <Block  />
                    </div>
                    <div className="col-sm">
                        <Block />
                    </div>
                    <div className="col-sm">
                        <Block />
                    </div>
                </div>
                </div>
            </div>

        )
    }
}
