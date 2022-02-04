import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PoliticianListItem } from './PoliticianListItem';
import {
  orderedPoliticians,
  politiciansByProvinceCode,
} from '../../../../../data/politicians';
import './PoliticianList.scss';

export const PoliticianList = ({ className, province: initialProvince }) => {
  const classNames = classnames('politician-list', className);

  const [province, setProvince] = useState(initialProvince);
  const [politicians, setPoliticians] = useState(orderedPoliticians());

  useEffect(() => {
    setProvince(initialProvince);
  }, [initialProvince]);

  useEffect(() => {
    const nextPoliticians =
      province !== null
        ? politiciansByProvinceCode(province)
        : orderedPoliticians();
    setPoliticians(nextPoliticians);
  }, [province]);

  return (
    <div className={classNames}>
      {politicians.map(
        ({ affiliation, constituency, firstName, lastName, province }, i) => (
          <PoliticianListItem
            affiliation={affiliation}
            constituency={constituency}
            firstName={firstName}
            key={`politician-${i}`}
            lastName={lastName}
            province={province}
          />
        )
      )}
    </div>
  );
};

PoliticianList.propTypes = {
  className: PropTypes.string,
  province: PropTypes.string,
};

PoliticianList.defaultProps = {
  className: null,
  province: null,
};
