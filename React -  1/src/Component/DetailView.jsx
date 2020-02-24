import React from 'react';
import FollowerCard from './FollowerCard';
import RepoList from './RepoList';

class DetailView extends React.Component {
  constructor() {
    super();
    this.state = {
      langauge: ['All'],
      repos: [],
      selectedLanguage: '',
      searchedRepo: ''
    };
  }

  componentDidMount() {
    let array = ['All'];
    this.props.userDisplay.repos.forEach(repo => {
      if (repo.language != null) {
        if (!array.includes(repo.language)) {
          array.push(repo.language);
        }
      }
    });

    this.setState({ langauge: array, repos: this.props.userDisplay.repos });
  }

  handleChange = e => {
    let argument = e.target.name;
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (argument == 'selectedLanguage') {
        this.filterRepo();
      } else if (argument == 'searchedRepo') {
        this.searchByName();
      }
    });
  };

  filterRepo = () => {
    let repos = this.props.userDisplay.repos;
    let filter = this.state.selectedLanguage;
    let filteredRepo = [];
    if (filter == 'All') {
      filteredRepo = repos;
    } else {
      repos.forEach(repo => {
        if (repo.language == filter) {
          filteredRepo.push(repo);
        }
      });
    }

    this.setState({ repos: filteredRepo });
  };

  searchByName = () => {
    let repos = this.props.userDisplay.repos;
    let filter = this.state.searchedRepo;
    let filteredRepo = [];
    if (filter == 'All') {
      filteredRepo = repos;
    } else {
      repos.forEach(repo => {
        if (repo.name.startsWith(filter)) {
          filteredRepo.push(repo);
        }
      });
    }
    this.setState({ repos: filteredRepo });
  };

  render() {
    return (
      <div className='card mx-5 mb-5'>
        <div className='row p-3'>
          <div className='col-3'>
            <img src={this.props.userDisplay.avatarUrl} className='img-fluid' />
            <h1 className='lead text-left mt-3' style={{ fontSize: '2rem' }}>
              {this.props.userDisplay.name}
            </h1>
            <a
              className='btn btn-info btn-block my-3'
              href={this.props.userDisplay.htmlURL}
            >
              Show Profile
            </a>
            <ul className='list-group text-left'>
              <li className='list-group-item'>
                Id : {this.props.userDisplay.id}
              </li>
              <li className='list-group-item'>
                Followers : {this.props.userDisplay.followers.length}
              </li>
              <li className='list-group-item'>
                Scores : {Math.round(this.props.userDisplay.scores)}
              </li>
            </ul>
          </div>
          <div className='col-9'>
            <div className='my-4'>
              <h2 className='text-left'>Followers</h2>
              <div className='d-flex py-3' style={{ overflowX: 'scroll' }}>
                {this.props.userDisplay.followers.map(user => {
                  return <FollowerCard key={user.id} user={user} />;
                })}
              </div>
            </div>
            <h2 className='text-left my-3'>Repos</h2>
            <div className='row my-3'>
              <div className='col-6 text-left'>
                <label>Laguages</label>
                <select
                  name='selectedLanguage'
                  id=''
                  className='form-control'
                  onChange={this.handleChange}
                  value={this.state.selectedLanguage}
                >
                  {this.state.langauge.map(item => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
                <small className='text-muted text-left'>
                  Choose any language to show repos
                </small>
              </div>
              <div className='col-6 text-left'>
                <label>Search By Name</label>
                <input
                  type='text'
                  value={this.state.searchedRepo}
                  onChange={this.handleChange}
                  name='searchedRepo'
                  className='form-control'
                />
                <small className='text-muted'>
                  Type to search repos in user
                </small>
              </div>
            </div>
            <table className='table table-striped table-bordered'>
              <thead className='thead-dark'>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Language</th>
                  <th>Created At</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {this.state.repos.map(repo => {
                  return <RepoList repo={repo} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailView;
