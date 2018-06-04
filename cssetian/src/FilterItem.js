import React from 'react';
import { FILTER_TYPES } from './constants';

export const FilterItem = (props) => {
    let classes = 'filter-item';
    if (props.active) classes = classes + ' active';
    return (
        <li
            className={classes}
            onClick={() => props.onFilter(props.value)}>
            {props.text}
        </li>
    );
}