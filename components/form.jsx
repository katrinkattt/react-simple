import React, {Component} from 'react';
import FormBlock from './formBlock';
import BtnForm from './btn';

export default class Form extends Component {
    render(){
        return(
            <div className="container container__form">
                <div className="block__main__form">
                    <FormBlock />
                    <FormBlock />
                    <FormBlock />
                    <BtnForm />
                </div>
            </div>
        )
    }
}
