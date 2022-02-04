import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './PoliticianListItem.scss';

export const PoliticianListItem = ({ className, firstName, lastName }) => {
  const classNames = classnames('politician-list-item', className);
  const fullName = `${firstName} ${lastName}`;
  const imgUriLastNameFragment = lastName
    .replace(' ', '')
    .replace("'", '')
    .replace('.', '');
  const imgUriFirstNameFragment = firstName
    .replace(' ', '')
    .replace("'", '')
    .replace('.', '');
  const imgUri = `${imgUriLastNameFragment}${imgUriFirstNameFragment}`;
  const photoUrl = `/images/parliamanterians/${imgUri}.jpg`;
  return (
    <div className={classNames}>
      <div className="politician-list-item__left">
        <img alt={fullName} src={photoUrl} />
      </div>
      <div className="politician-list-item__right">
        <h3>{fullName}</h3>
      </div>
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
