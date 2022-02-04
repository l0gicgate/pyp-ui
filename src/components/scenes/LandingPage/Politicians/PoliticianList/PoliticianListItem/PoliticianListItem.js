import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './PoliticianListItem.scss';
import { PartyLabel } from './PartyLabel';
import { Icon } from '../../../../../ui';

export const PoliticianListItem = ({
  affiliation,
  className,
  constituency,
  firstName,
  lastName,
  province,
}) => {
  const classNames = classnames('politician-list-item', className);
  const fullName = `${firstName} ${lastName}`;
  const imgUriLastNameFragment = lastName
    .replace(' ', '')
    .replace("'", '')
    .replace('.', '');
  const imgUriFirstNameFragment = firstName
    .replace(' ', '')
    .replace("'", '')
    .replace('.', '');
  const imgUri = `${imgUriLastNameFragment}${imgUriFirstNameFragment}`;
  const photoUrl = `/images/parliamanterians/${imgUri}.jpg`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@parl.gc.ca`;
  return (
    <div className={classNames}>
      <div className="politician-list-item__left">
        <img alt={fullName} src={photoUrl} />
        <PartyLabel className="left__party-label" party={affiliation} />
      </div>
      <div className="politician-list-item__right">
        <div className="right__meta">
          <h2 className="meta__name">{fullName}</h2>
          <p className="meta__constituency">
            <span>{constituency}</span>
            <span className="constituency__separator">&mdash;</span>
            <span>{province}</span>
          </p>
        </div>
        <div className="right__contact">
          <a className="contact__item">
            <Icon className="item__icon" outlined size={20} type="phone" />
            <span className="item__label">(888)-888-8888</span>
          </a>
          <a className="contact__item">
            <Icon className="item__icon" outlined size={20} type="fax" />
            <span className="item__label">(888)-888-8888</span>
          </a>
          <a className="contact__item">
            <Icon className="item__icon" outlined size={20} type="email" />
            <span className="item__label">{email}</span>
          </a>
          <a className="contact__item">
            <img
              alt="Twitter"
              className="item__img-icon"
              height={20}
              src="/images/twitter.svg"
            />
            <span className="item__label">
              @{firstName}
              {lastName}MP
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

PoliticianListItem.propTypes = {
  affiliation: PropTypes.string.isRequired,
  className: PropTypes.string,
  constituency: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
};

PoliticianListItem.defaultProps = {
  className: null,
};
