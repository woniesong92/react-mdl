import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
    className: PropTypes.string,
    expand: PropTypes.bool
};

const CardTitle = props => {
    const { className, children, expand, ...otherProps } = props;

    const classes = classNames('mdl-card__title', {
        'mdl-card--expand': expand
    }, className);

    const title = typeof children === 'string'
        ? React.createElement('h2', { className: 'mdl-card__title-text' }, children)
        : children;

    return (
        <div className={classes} {...otherProps}>
            {title}
        </div>
    );
};

CardTitle.propTypes = propTypes;

export default CardTitle;
