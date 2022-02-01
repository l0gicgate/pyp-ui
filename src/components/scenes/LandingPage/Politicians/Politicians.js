import React, { forwardRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
const CanadaMap = dynamic(import('react-canada-map'), { ssr: false });
import { Icon } from '../../../ui';
import { PoliticianList } from './PoliticianList';
import './Politicians.scss';

export const Politicians = forwardRef(({ className }, ref) => {
  const classNames = classnames('politicians', className);

  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleClickMap = useCallback(
    (nextSelectedProvince) => setSelectedProvince(nextSelectedProvince),
    []
  );

  const customMapStyle = selectedProvince
    ? { [selectedProvince]: { fillColor: '#E5322D' } }
    : null;

  return (
    <section className={classNames} ref={ref}>
      <div className="politicians__left">
        <h2>Select Your Province</h2>
        <CanadaMap
          className="select-your-province__map"
          customize={customMapStyle}
          onClick={handleClickMap}
          onHoverColor="#E5322D"
        />
      </div>
      <div className="politicians__right">
        <div className="right__search">
          <Icon size={32} type="search" />
          <input placeholder="Search by name..." type="text" />
        </div>
        <div className="right__politician-list">
          <PoliticianList province={selectedProvince} />
        </div>
      </div>
    </section>
  );
});

Politicians.propTypes = {
  className: PropTypes.string,
};

Politicians.defaultProps = {
  className: null,
};
