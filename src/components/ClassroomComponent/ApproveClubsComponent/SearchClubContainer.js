import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator/*, ToolbarTitle*/} from 'material-ui/Toolbar';
//import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField'

class SearchClubContainer extends Component{
	constructor(props) {
		super(props);
		this.filterClicked = this.filterClicked.bind(this);
		this.state = {
			filter: 'all'
		}
	}

	filterClicked(filterChoice) {
		this.setState({filter: filterChoice});
    }

  	render() {
    return (
       <div>
       <Toolbar style={{minWidth: '100%', backgroundColor: '#FFF'}}>
       <ToolbarGroup>
          <span onClick={()=>this.filterClicked('pending')}>pending</span>
          <ToolbarSeparator style={{marginLeft: 10, marginRight: 10, height: 20}}/>
          <span onClick={()=>this.filterClicked('approved')}>approved</span>
          <ToolbarSeparator style={{marginLeft: 10, marginRight: 10, height: 20}}/>
          <span onClick={()=>this.filterClicked('all')}>all</span>
        </ToolbarGroup>
       </Toolbar>
       </div>
    );
  }
}

function mapStateToProps(state) {
  const {openSideNav, isMobile, filter} = state.toggler
  const {user, verified} = state.authentication
  return {
    user,
    openSideNav,
    verified,
    isMobile,
    filter
  }
}

export default connect(mapStateToProps)(SearchClubContainer)
