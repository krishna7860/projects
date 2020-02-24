import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateStatus = e => {
    this.props.onInputQuery(this.state.user);
  };

  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className='col-6 p-4 form-group'>
          <div className='row'>
            <div className='col-11'>
              <input
                type='text'
                name='user'
                id='user'
                className='form-control w-100'
                value={this.state.user}
                onChange={this.handleChange}
              />
            </div>
            <div className='col-1'>
              <input
                type='button'
                value='Search'
                className='btn btn-outline-info'
                onClick={this.updateStatus}
              />
            </div>
          </div>

          <small className='text-muted mt-2'>
            Type any username to search details from Github
          </small>
        </div>
      </div>
    );
  }
}

export default Search;
