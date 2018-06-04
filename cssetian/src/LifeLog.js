import React, { Component } from 'react';
import { data } from './data.js';
import LifeLogEntry from './LifeLogEntry';
import { TYPE_ALL } from './constants.js';

class LifeLog extends Component {
    render() {
        const events = data.events
            .filter((event) => (
                this.props.activeFilter === TYPE_ALL ||
                event.type === this.props.activeFilter
            ))
            .map((event) => (
                <LifeLogEntry
                    key={event.title}
                    title={event.title}
                    date={event.date}
                    type={event.type}
                />
            ));
        return (
            <ul className='life-log'>
                {events}
            </ul>
        );

    }
}

export default LifeLog;