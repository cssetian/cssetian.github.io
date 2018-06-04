import React from 'react';
import { FILTER_TYPES } from './constants';
import { FilterItem } from './FilterItem';
const Filters = (props) => {
        const filters = Object.keys(FILTER_TYPES).map((filter) => (
            <FilterItem
                key={filter}
                text={FILTER_TYPES[filter]}
                value={FILTER_TYPES[filter]}
                onFilter={props.onFilter}
                active={FILTER_TYPES[filter] === props.activeFilter}
            />
        ));
        
        return (
            <ul className='filters'>
                {filters}
            </ul>
        )
    };

export default Filters;