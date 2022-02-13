import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { politicianImageUrl } from '../../../../../data/politicians';
import { PartyLabel } from '../../Politicians/PoliticianList/PoliticianListItem/PartyLabel';
import styles from './Inductee.module.scss';

export const Inductee = ({ affiliation, className, firstName, lastName }) => {
  const classNames = classnames(styles.inductee, className);
  const fullName = `${firstName} ${lastName}`;
  const photoUrl = politicianImageUrl(firstName, lastName);
  return (
    <div className={classNames}>
      <div className={styles.inductee__photo}>
        <img alt={fullName} src={photoUrl} />
        <PartyLabel className={styles.photo__partyLabel} party={affiliation} />
      </div>
      <h3 className={styles.inductee__name}>{fullName}</h3>
    </div>
  );
};

Inductee.propTypes = {
  affiliation: PropTypes.string.isRequired,
  className: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

Inductee.defaultProps = {
  className: null,
};
