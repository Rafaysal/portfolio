import React from 'react';
import {Layout, Drawer, Header, Navigation, Content} from 'react-mdl'
import './App.css';
import {Main} from '../src/Components/Main'
import {Link} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)
  }

  
  render(){
  return (<div className="demo-big-content">
  <Layout>
      <Header id = "header" title="Rafay Salahuddin" scroll>
          <Navigation>
              <Link  id = 'link' to="/portfolio">About Me </Link>
              <Link  id = 'link' to="/resume">Resume</Link>
              <Link  id = 'link' to="/projects">Projects</Link>
              <Link  id = 'link' to="/contactInfo">Contact</Link>             
          </Navigation>
      </Header>
      
      <Content>
          <Main/>
      </Content>
  </Layout>
</div>

  );
}
}
export default App;
