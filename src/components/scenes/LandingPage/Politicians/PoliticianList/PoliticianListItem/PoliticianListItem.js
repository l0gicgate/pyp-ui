import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './PoliticianListItem.scss';

export const PoliticianListItem = ({ className, firstName, lastName }) => {
  const classNames = classnames('politician-list-item', className);
  return (
    <div className={classNames}>
      <h3>
        {firstName} {lastName}
      </h3>
    </div>
  );
};

PoliticianListItem.propTypes = {
  className: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

PoliticianListItem.defaultProps = {
  className: null,
};
