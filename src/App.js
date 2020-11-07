import logo from './logo.svg';
import './App.css';
import './components/Article.css';
import './components/SideBar.css';
import { MainMenu } from './components/MainMenu';
import { SearchBar } from './components/SearchBar';
import { NavMenu } from './components/NavMenu';
import { Component } from 'react';
import { Article } from './components/Article';
import { SideBar } from './components/SideBar';

 export class App extends Component {
  state ={
    menuItems:[
      {title: 'Google', link: 'https://google.com'},
      {title: 'Apple', link: 'https://apple.com.br'},
      {title: 'Microsoft', link: 'https://microsoft.com'},
      {title: 'PUC Minas', link: 'https://pucminas.br'},
    ],
    article:[
      {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
      {title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    ],
    sideBar:[
      {title: 'Link 1', link: 'https://google.com'},
      {title: 'Link 2 ', link: 'https://apple.com.br'},
      {title: 'Link 3', link: 'https://microsoft.com'},
  
    ]

  }


  render(){
  return (
    <>
      <header className="main-header">
        <div className= "main-logo">
          <h1>Logo</h1>
        </div>
        <div className = "header-info">
            <MainMenu/>
            <SearchBar/>
        </div>
        

      </header>
           <NavMenu items={this.state.menuItems}/>
      <div className="article">
           <Article items={this.state.article}/>
           <SideBar items={this.state.sideBar}/>
      </div>
        
  </>
    );
  }
}

export default App;
