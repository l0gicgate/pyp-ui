import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PoliticianListItem } from './PoliticianListItem';
import {
  politicians as initialPoliticians,
  politiciansByProvinceCode,
} from '../../../../../data/politicians';
import './PoliticianList.scss';

export const PoliticianList = ({ className, province: initialProvince }) => {
  const classNames = classnames('politician-list', className);

  const [province, setProvince] = useState(initialProvince);
  const [politicians, setPoliticians] = useState(initialPoliticians);

  useEffect(() => {
    setProvince(initialProvince);
  }, [initialProvince]);

  useEffect(() => {
    const nextPoliticians =
      province !== null
        ? politiciansByProvinceCode(province)
        : initialPoliticians;
    setPoliticians(nextPoliticians);
  }, [province]);

  return (
    <div className={classNames}>
      {politicians.map(({ firstName, lastName }, i) => (
        <PoliticianListItem
          firstName={firstName}
          key={`politician-${i}`}
          lastName={lastName}
        />
      ))}
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
