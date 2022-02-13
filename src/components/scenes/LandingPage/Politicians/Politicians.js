import React, { forwardRef, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import classnames from 'classnames';
import debounce from 'lodash.debounce';
import { Icon } from '../../../ui';
import { PoliticianList } from './PoliticianList';
import styles from './Politicians.module.scss';

const CanadaMap = dynamic(import('react-canada-map'), { ssr: false });

export const Politicians = forwardRef(({ className }, ref) => {
  const classNames = classnames(styles.politicians, className);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const handleClickMap = useCallback(
    (nextSelectedProvince) => setSelectedProvince(nextSelectedProvince),
    []
  );

  const handleSearchInputChange = useCallback(
    debounce(
      (e) => {
        const nextValue = e.target.value.trim();
        setSearchQuery(nextValue || null);
      },
      { maxWait: 300 }
    ),
    []
  );

  const customMapStyle = selectedProvince
    ? { [selectedProvince]: { fillColor: '#E5322D' } }
    : null;

  return (
    <section className={classNames} ref={ref}>
      <div className={styles.politicians__left}>
        <h2>Find your representative</h2>
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
          <input
            onChange={handleSearchInputChange}
            placeholder="Search by name, region or affiliation..."
            type="text"
          />
        </div>
        <div className={styles.right__politicians}>
          <PoliticianList
            province={selectedProvince}
            searchQuery={searchQuery}
          />
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
