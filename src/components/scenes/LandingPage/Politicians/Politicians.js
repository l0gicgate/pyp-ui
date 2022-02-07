import React, { forwardRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import { Icon } from '../../../ui';
import { PoliticianList } from './PoliticianList';
import styles from './Politicians.module.scss';

const CanadaMap = dynamic(import('react-canada-map'), { ssr: false });

export const Politicians = forwardRef(({ className }, ref) => {
  const classNames = classnames(styles.politicians, className);

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
      <div className={styles.politicians__left}>
        <h2>Select a Province</h2>
        <div className={styles.left__map}>
          <CanadaMap
            customize={customMapStyle}
            onClick={handleClickMap}
            onHoverColor="#E5322D"
          />
        </div>
      </div>
      <div className={styles.politicians__right}>
        <div className={styles.right__search}>
          <Icon size={32} type="search" />
          <input placeholder="Search by name..." type="text" />
        </div>
        <div className={styles.right__politicians}>
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
