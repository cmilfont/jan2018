import React from 'react';

const url = 'http://biohacking.herokuapp.com/graphql?query=query%20%7B%0A%20%20todayActivities%20%7B%0A%20%20%20%20id%0A%20%20%20%20loggedAt%0A%20%20%20%20description%0A%20%20%20%20kind%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20color%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D';

class Activities extends React.Component {

  state = {
    list: [],
  }

  componentDidMount() {
    fetch(url).then(r => r.json()).then(list => {
      this.setState({
        list: list.data.todayActivities,
      })
    });
  }

  render() {
    const { list } = this.state;
    const activities = list.map(activity => {
      return (
        <div>{activity.description} - {activity.kind.description}</div>
      )
    });
    return (
      <div>
        {activities}
      </div>
    );
  }
}

export default Activities;