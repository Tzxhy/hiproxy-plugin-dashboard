/**
 * @file
 * @author zdying
 */

/**
 * @file
 * @author zdying
 */

// https://www.behance.net/gallery/40165625/uKit-Dashboard-UIUX-Kit-Redesign
// https://picturepan2.github.io/spectre/layout.html#navbar

import React from 'react';
import { connect } from 'react-redux';

import {doClick} from './action';

import './styles.less';

import Menu from './Menu';
import ServerInfoCard from './ServerInfoCard';
import Table from './Table';
import Header from './Header';
import Editor from './Editor';

export class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
  }

  render () {
    let {result} = this.props;
    let serverInfo = window.serverInfo;

    return (
      <div className="home-page col-gapless">
        <div className="side-bar">
          <div className="logo">
            <img src="./source/logo-light.svg" />
          </div>
          <Menu />
          {/*<br/>
          <div style={{padding: '10px'}}>
            <h4>Counter: {result}</h4>
            <button className="btn btn-primary" onClick={this.onClick.bind(this)}>primary button</button>
          </div>*/}
        </div>
        <div className="body">
          <Header />
          <div className="toast toast-success ml-10 mr-10 mt-10" style={{width: 'auto'}}>
            <button className="btn btn-clear float-right"></button>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="main">
            <div className="cards mt-10">
              <ServerInfoCard data={serverInfo.httpServer} pid={serverInfo.pid}/>
              <ServerInfoCard data={serverInfo.httpsServer} pid={serverInfo.pid}/>
            </div>
            <h5 className="mt-10">Hosts Files</h5>
            <Table files={serverInfo.hosts} fileType="hosts"/>
            <h5 className="mt-10">Rewrite Files</h5>
            <Table files={serverInfo.rewrites} fileType="rewrite" className="mt-10"/>
            {/*<Editor />*/}
          </div>
        </div>
      </div>
    );
  }

  onClick () {
    let {dispatch} = this.props;

    dispatch({
      type: 'ADD'
    })
  }
};

function mapStateToProps (state) {
  return state.home;
// let {
//     list, fetchState, msg
// } = state.list
//
// return {
//     list,
//     fetchState,
//     msg
// }
}

export default connect(mapStateToProps)(Home);

Home.contextTypes = {
  // router: React.PropTypes.object.isRequired
};
