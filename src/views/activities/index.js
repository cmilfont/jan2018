import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import moment from 'moment';
import Activity from './activity';
import EditActivity from './edit';

const url = 'http://biohacking.herokuapp.com/graphql?query=query%20%7B%0A%20%20todayActivities%20%7B%0A%20%20%20%20id%0A%20%20%20%20loggedAt%0A%20%20%20%20description%0A%20%20%20%20kind%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20color%0A%20%20%20%20%20%20description%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D';

class Activities extends React.Component {

  removeActivity(id) {
    debugger;
  }

  onChange = (activity) => {
    this.setState({
      ...this.state,
      activity: {
        ...this.state.activity,
        ...activity,
      },
    })
  }

  saveEditActivity = () => {
    this.setState({
      ...this.state,
      activity: {},
    })
  }


  cancelEditActivity = () => {
    this.setState({
      ...this.state,
      activity: {},
    })
  }

  editActivity = (activity) => {
    this.setState({
      ...this.state,
      activity,
    })
  }

  componentDidMount() {
    fetch(url).then(r => r.json()).then(list => {
      this.props.dispatch({
        type: 'LISTA',
        payload: list.data.todayActivities
      });
    });
  }

  render() {
    const { data: { list, activity } } = this.props;
    const activities = list.map(item => {
      return (
        (activity.id && item.id === activity.id) ?
        <EditActivity
          key={`activity-${item.id}`}
          activity={activity}
          kind={item.kind.description}
          color={item.kind.color}
          cancelEditActivity={this.cancelEditActivity}
          saveEditActivity={this.saveEditActivity}
          onChange={this.onChange}
        /> :
        <Activity 
          key={`activity-${item.id}`}
          id={item.id}
          kind={item.kind.description}
          color={item.kind.color}
          description={item.description}
          loggedAt={moment(item.loggedAt).format('LT')}
          editActivity={this.editActivity}
        />
      )
    });
    return (
      <div>
        <ListSubheader>{`Today`}</ListSubheader>
        {activities}
      </div>
    );
  }
}

export default Activities;