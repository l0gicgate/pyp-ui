import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PoliticianListItem } from './PoliticianListItem';
import {
  orderedPoliticians,
  politiciansByProvinceCode,
} from '../../../../../data/politicians';
import styles from './PoliticianList.module.scss';

export const PoliticianList = ({
  className,
  province: initialProvince,
  searchQuery,
}) => {
  const classNames = classnames(styles.politicianList, className);

  const [province, setProvince] = useState(initialProvince);
  const [politicians, setPoliticians] = useState(orderedPoliticians());

  useEffect(() => {
    setProvince(initialProvince);
  }, [initialProvince]);

  useEffect(() => {
    const nextPoliticians =
      province !== null
        ? politiciansByProvinceCode(province, searchQuery)
        : orderedPoliticians(searchQuery);
    setPoliticians(nextPoliticians);
  }, [province, searchQuery]);

  return (
    <div className={classNames}>
      {politicians.map(
        (
          {
            affiliation,
            constituency,
            email,
            faxNumber,
            firstName,
            lastName,
            phoneNumber,
            province: p,
            twitter,
          },
          i
        ) => (
          <PoliticianListItem
            affiliation={affiliation}
            constituency={constituency}
            email={email}
            faxNumber={faxNumber}
            firstName={firstName}
            key={`politician-${i}`}
            lastName={lastName}
            phoneNumber={phoneNumber}
            province={p}
            twitter={twitter}
          />
        )
      )}
    </div>
  );
};

PoliticianList.propTypes = {
  className: PropTypes.string,
  province: PropTypes.string,
  searchQuery: PropTypes.string,
};

PoliticianList.defaultProps = {
  className: null,
  province: null,
  searchQuery: null,
};
