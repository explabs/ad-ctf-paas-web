import React from 'react';
import UserService from 'services/user.service';

export class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    UserService.getTeamsList().then(
      (response) => {
        this.setState({
          items: response.data.teams,
          isLoaded: true,
        });
      },
      (error) => {
        this.setState({
          content:
                        (error.response
                            && error.response.data
                            && error.response.data.message)
                        || error.message
                        || error.toString(),
        });

        if (error.response && error.response.status === 401) {
          // EventBus.dispatch('logout');
        }
      },
    );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return (
        <div>
          Ошибка:
          {error.message}
        </div>
      );
    } if (!isLoaded) {
      return <div>Загрузка...</div>;
    }
    return (
      <table hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Slug</th>
            <th>Team</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.Login}</td>
              <td>{item.Name}</td>
              <td>{item.Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
