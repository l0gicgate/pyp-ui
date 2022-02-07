import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { colorsByParty } from '../../../../../../../data/politicians';
import styles from './PartyLabel.module.scss';

export const PartyLabel = ({ className, party }) => {
  const classNames = classnames(styles.partyLabel, className);
  return (
    <div className={classNames} style={{ background: colorsByParty[party] }}>
      {party}
    </div>
  );
};

PartyLabel.propTypes = {
  className: PropTypes.string,
  party: PropTypes.string.isRequired,
};

PartyLabel.defaultProps = {
  className: null,
};
