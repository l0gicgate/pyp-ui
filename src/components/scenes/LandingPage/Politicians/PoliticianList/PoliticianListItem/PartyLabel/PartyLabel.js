import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { colorsByParty } from '../../../../../../../data/politicians';
import './PartyLabel.scss';

export const PartyLabel = ({ className, party }) => {
  const classNames = classnames('party-label', className);
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
