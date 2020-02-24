import React from 'react';

let imageModule = {
  height: '70px',
  width: '70px',
  borderRadius: '50%'
};

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: '',
      userName: '',
      score: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.setState({
        imgURL: this.props.user.avatar_url,
        userName: this.props.user.login,
        score: this.props.user.score
      });
    }
  }
  componentWillMount() {
    this.setState({
      imgURL: this.props.user.avatar_url,
      userName: this.props.user.login,
      score: this.props.user.score
    });
  }

  render() {
    return (
      <div className='col-3'>
        <div className='card mb-3 p-3 d-flex flex-column justify-content-center align-items-center'>
          <img src={this.state.imgURL} alt='' style={imageModule} />
          <h5 className='lead my-2'>{this.state.userName}</h5>
          <small>Score : {Math.round(this.state.score)}</small>
          <input
            type='submit'
            className='btn btn-info m-2'
            value='Profile'
            onClick={() => {
              this.props.fetchData(this.props.user);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
