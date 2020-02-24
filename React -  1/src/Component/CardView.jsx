import React from 'react';
import ProfileCard from './ProfileCard';
class CardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.usersData !== this.props.usersData) {
      this.setState({ usersData: this.props.usersData.items });
    }
  }

  componentDidMount() {
    if (this.props.usersData.items != undefined) {
      this.setState({ usersData: this.props.usersData.items });
    }
  }

  render() {
    return (
      <div className='d-flex flex-wrap px-3'>
        {this.state.usersData.map(user => {
          return (
            <ProfileCard
              key={user.id}
              user={user}
              fetchData={this.props.fetchDetails}
            />
          );
        })}
      </div>
    );
  }
}

export default CardView;
