import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PartyLabel } from './PartyLabel';
import { Icon } from '../../../../../ui';
import { politicianImageUrl } from '../../../../../../data/politicians';
import styles from './PoliticianListItem.module.scss';

export const PoliticianListItem = ({
  affiliation,
  className,
  constituency,
  email,
  faxNumber,
  firstName,
  lastName,
  phoneNumber,
  province,
  twitter,
}) => {
  const classNames = classnames(styles.politicianListItem, className);
  const fullName = `${firstName} ${lastName}`;
  const photoUrl = politicianImageUrl(firstName, lastName);

  return (
    <div className={classNames}>
      <div className={styles.politicianListItem__left}>
        <img alt={fullName} src={photoUrl} />
        <PartyLabel className={styles.left__partyLabel} party={affiliation} />
      </div>
      <div className={styles.politicianListItem__right}>
        <div className={styles.right__meta}>
          <h2 className={styles.meta__name}>{fullName}</h2>
          <p className={styles.meta__constituency}>
            <span>{constituency}</span>
            <span className={styles.constituency__separator}>&mdash;</span>
            <span>{province}</span>
          </p>
        </div>
        <div className={styles.right__contact}>
          {phoneNumber ? (
            <a className={styles.contact__item} href={`tel:${phoneNumber}`}>
              <Icon
                className={styles.item__icon}
                outlined
                size={20}
                type="phone"
              />
              <span className={styles.item__label}>{phoneNumber}</span>
            </a>
          ) : null}
          {faxNumber ? (
            <a className={styles.contact__item} href={`tel:${faxNumber}`}>
              <Icon
                className={styles.item__icon}
                outlined
                size={20}
                type="fax"
              />
              <span className={styles.item__label}>{faxNumber}</span>
            </a>
          ) : null}
          {email ? (
            <a className={styles.contact__item} href={`mailto:${email}`}>
              <Icon
                className={styles.item__icon}
                outlined
                size={20}
                type="email"
              />
              <span className={styles.item__label}>{email}</span>
            </a>
          ) : null}
          {twitter ? (
            <a
              className={styles.contact__item}
              href={`https://twitter.com/${twitter}`}
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="Twitter"
                className={styles.item__icon}
                height={20}
                src="/images/twitter.svg"
              />
              <span className={styles.item__label}>@{twitter}</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

PoliticianListItem.propTypes = {
  affiliation: PropTypes.string.isRequired,
  className: PropTypes.string,
  constituency: PropTypes.string.isRequired,
  email: PropTypes.string,
  faxNumber: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  province: PropTypes.string.isRequired,
  twitter: PropTypes.string,
};

PoliticianListItem.defaultProps = {
  className: null,
  email: null,
  faxNumber: null,
  phoneNumber: null,
  twitter: null,
};
