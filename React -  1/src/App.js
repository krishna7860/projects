import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Search from './Component/Search';
import CardView from './Component/CardView';
import axios from 'axios';
import DetailView from './Component/DetailView';
import Progress from './Progress';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usersData: [],
      query: '',
      shouldDisplay: true,
      userDisplay: {},
      isLoading: false
    };
  }

  onInputQuery = query => {
    this.setState({ query: query, shouldDisplay: true }, () => {
      this.fetchUserByQuery();
    });
  };

  fetchUserByQuery = async () => {
    let query = this.state.query;

    let config = {
      baseURL: 'https://api.github.com/search',
      method: 'get'
    };
    this.setState({ isLoading: true });
    axios('/users?q=' + query, config)
      .then(res => this.setDataToState(res.data))
      .catch(err => console.log(err));
  };

  setDataToState = async users => {
    let usersData = await users;
    this.setState({ usersData: usersData, isLoading: false });
  };

  fetchDataOnUserClick = async user => {
    let name = user.login;
    let id = user.id;
    let avatarUrl = user.avatar_url;
    let htmlURL = user.html_url;

    let followers = await axios
      .get(user.followers_url)
      .then(res => res.data)
      .catch(err => err);
    let scores = user.score;

    let repos = await axios
      .get(user.repos_url)
      .then(res => res.data)
      .catch(err => console.log(err));

    let userDisplay = {
      name: name,
      id: id,
      avatarUrl: avatarUrl,
      htmlURL: htmlURL,
      followers: followers,
      scores: scores,
      repos: repos
    };

    this.setState({ userDisplay: userDisplay, shouldDisplay: false });
  };

  render() {
    return (
      <div className='text-center bg-light' style={{ minHeight: '100vh' }}>
        <Navbar />
        <Search onInputQuery={this.onInputQuery} />
        <div className='d-flex justify-content-center mb-3'>
          <div className='col-3 text-center'>
            {this.state.isLoading ? <Progress /> : ''}
          </div>
        </div>
        {this.state.shouldDisplay ? (
          <CardView
            usersData={this.state.usersData}
            fetchDetails={this.fetchDataOnUserClick}
          />
        ) : (
          <DetailView userDisplay={this.state.userDisplay} />
        )}
      </div>
    );
  }
}

export default App;
