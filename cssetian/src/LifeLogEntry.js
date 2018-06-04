import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { EVENT_TYPES } from './constants';

class LifeLogEntry extends Component {
    render() {
        const { title, date, type } = this.props;
        return (
            <li className='log-entry'>
                <span>{moment(date).format('MMM D, YYYY')}</span>
                <span>{type}</span>
                <span>{title}</span>
            </li>
        );
    }
}

LifeLogEntry.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    type: PropTypes.oneOf(Object.values(EVENT_TYPES)),
}

export default LifeLogEntry;