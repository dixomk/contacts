import React, { PropTypes } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';

const ButtonLink = ({ title, color, linkTo, clickHandler }) => {
    let result = null;
    result = linkTo ? (
        <Link to={linkTo}>
            <Button color={color}>{title}</Button>
        </Link>
        ) : (
            <Button color={color} onClick={clickHandler}>{title}</Button>
        );
    return result;
};

ButtonLink.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    linkTo: PropTypes.string,
    clickHandler: PropTypes.func
};

ButtonLink.defaultProps = {
    title: 'button',
    color: 'info',
    linkTo: '',
    clickHandler: () => {}
};

export default ButtonLink;
