import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Inductee } from './Inductee';
import { WEFLogo } from '../../../ui/WEFLogo';
import { wefAgents } from '../../../../data/politicians';
import styles from './WEFWallOfShame.module.scss';

export const WEFWallOfShame = ({ className }) => {
  const classNames = classnames(styles.wefWallOfShame, className);
  return (
    <div className={classNames}>
      <WEFLogo className={styles.wefWallOfShame__logo} />
      <h2>Wall of Shame</h2>
      <p>
        The representatives listed below have been identified as being
        affiliated with the World Economic Forum which has subverted the
        democracy of multiple nations around the world. We believe that we must
        shame individuals who participate in carrying out the agendas proposed
        by this organization.
      </p>
      <div className={styles.wefWallOfShame__inductees}>
        {wefAgents().map(({ affiliation, firstName, lastName }, i) => (
          <Inductee
            affiliation={affiliation}
            className={styles.inductees__inductee}
            firstName={firstName}
            key={i}
            lastName={lastName}
          />
        ))}
      </div>
    </div>
  );
};

WEFWallOfShame.propTypes = {
  className: PropTypes.string,
};

WEFWallOfShame.defaultProps = {
  className: null,
};
