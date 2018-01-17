import React from 'react';
import ListSubheader from 'material-ui/List/ListSubheader';
import moment from 'moment';
import Activity from './activity';
import EditActivity from './editContainer';

class Activities extends React.Component {

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { list, activity } = this.props;
    const activities = list.map(item => {
      return (
        (activity.id && item.id === activity.id) ?
        <EditActivity
          key={`activity-${item.id}`}
          activity={activity}
          kind={item.kind.description}
          color={item.kind.color}
        /> :
        <Activity 
          key={`activity-${item.id}`}
          id={item.id}
          kind={item.kind.description}
          color={item.kind.color}
          description={item.description}
          loggedAt={moment(item.loggedAt).format('LT')}
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