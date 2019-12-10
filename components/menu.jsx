import React, {Component} from 'react';
import Wallpaper  from './wallpaper';
import MainBtn from './mainBtn';
import TitleMain from './titleMain';

export default class Header extends Component {
    render(){
        return(
            <div className="main__page">
            <header>
                <nav className="navbar navbar-expand-lg  nav_bar">
                    <a className="navbar-brand" href="#">Menu</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav_center" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-item nav-link active" href="./main.html"> Home<span class="sr-only">(current)</span></a>
                            <a className="nav-item nav-link " href="#">Gallery</a>
                            <a className="nav-item nav-link" href="#">Links</a>
                            <a className="nav-item nav-link" href="#">About</a>
                        </div>
                    </div>
                </nav>
        </header>
        <div className="conteiner">
            <Wallpaper  />
            <MainBtn />
            <TitleMain />
        </div>
        </div>
        )
    }
}
