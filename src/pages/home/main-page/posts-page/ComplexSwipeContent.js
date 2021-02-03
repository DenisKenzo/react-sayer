import React from 'react';
import PropTypes from 'prop-types';

import './ComplexSwipeContent.css';

const ComplexSwipeContent = ({ icon, label, position }) => (
    <div className={`complex-swipeable-list__item-content-${position}`}>
        <div className="complex-swipeable-list__content">
            {label && <span>{label}</span>}
        </div>
    </div>
);

ComplexSwipeContent.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    position: PropTypes.oneOf(['left', 'right']).isRequired
};

export default ComplexSwipeContent;