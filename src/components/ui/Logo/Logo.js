import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Logo.scss';

export const Logo = ({ className, size }) => {
  const classNames = classnames('logo', className);
  const width = (768.3 / 196.9) * size;
  const textColor = '#FFF';
  return (
    <span className={classNames} style={{ height: size }}>
      <svg viewBox="0 0 768.3 196.9" width={width}>
        <g>
          <g>
            <g>
              <path
                d="M75.6,46.1c5.8,3.2,5.2,6,1.3,18.8l26.4-38.6c2.5-3.9-22.2-19.6-24.4-15.9L61.8,38.9L75.6,46.1z"
                fill="#E5322D"
              />
              <path
                d="M40.4,141.7l-6,55.2h74v-47.2l19.6-39.6c2.7-5.5,4.6-11.7,4.6-23.7l-22.6,23.4c-1.4,1.5-3.7,1.8-5.5,0.7
				c0,0-10.7-5.8-16.1-10.2c-0.2-0.1-8.5,35.4-8.5,35.4l-12.5-33.4l-32-28.6l6-11.5C68.4,76.6,77.9,52,73.6,50L32,29.5
				c-3.5-1.7-5.6-1.6-7.8,1.8l-22,38.9c-2.5,4-3.1,6.8-0.4,10.7L40.4,141.7z M75.6,150.4l3.8-4l1.7,4.2c0.2,0.7,0.9,1.1,1.6,1.1
				c3.1-0.1,6.4-0.6,10.4-1.4l-9,6.4c-1.9,1.3-3.2,3.3-3.7,5.6l-5.5,26.9l-1-26.3c-0.1-3.1-1.4-6-3.6-8.2l-8.1-8.2
				c4.6,2.1,8.3,3.5,11.8,4.3C74.7,150.9,75.2,150.8,75.6,150.4z"
                fill="#E5322D"
              />
              <path
                d="M72.3,13.1c2.4-4-21.8-16.3-24-12.3L34.3,26l23.5,11.1L72.3,13.1z"
                fill="#E5322D"
              />
              <path
                d="M107.7,103.5l30.9-27.7c2.6-2.4-11-19.4-13.2-17L95.6,90.8C93.8,92.8,105.8,105.1,107.7,103.5z"
                fill="#E5322D"
              />
              <path
                d="M92.7,88.1l32.2-35.6c3.3-3.6-18.1-22.6-20.2-19.7L75.8,72.7C74.2,74.8,91.2,89.7,92.7,88.1z"
                fill="#E5322D"
              />
            </g>
          </g>
          <g>
            <path
              d="M182.4,82.6V38h17c3.8,0,7.2,1.3,10.1,4c2.9,2.7,4.4,6.2,4.4,10.5c0,4.2-1.5,7.6-4.4,10.4c-2.9,2.8-6.3,4.1-10.1,4.1h-9
			v15.6H182.4z M190.4,59.7h8.6c3.6,0,7-2.6,7-7.2c0-4.7-3.4-7.3-7-7.3h-8.6V59.7z"
              fill={textColor}
            />
            <path
              d="M221.1,82.6V38h17.3c4,0,7.4,1.3,10.2,4.1c2.8,2.7,4.2,6,4.2,10c0,5.8-3.3,10.6-8.1,12.7l10.8,17.8h-9l-9.5-15.9h-0.1
			h-7.8v15.9H221.1z M229.1,59.5h8.5c4.4,0,7.4-3,7.4-7.3c0-4.1-2.9-7-6.7-7h-9.2V59.5z"
              fill={textColor}
            />
            <path
              d="M261.8,82.6V38h28.4v7.2h-20.4v10.6H289V63h-19.1v12.3h20.9v7.2H261.8z"
              fill={textColor}
            />
            <path
              d="M296.7,70.2c4,4,8.9,6,14.5,6c5.4,0,8.6-2.5,8.6-5.5c0-1.9-0.7-3.3-2.1-4.4c-1.3-1.1-4-2.4-7.9-4
			c-7.7-3.3-11.8-6.8-11.8-13.2c0-3.6,1.4-6.5,4.2-8.6c2.8-2.2,6.4-3.3,10.8-3.3c4.2,0,7.8,1,10.8,3.1v8.1c-3-2.6-6.5-3.9-10.6-3.9
			c-4.5,0-7.2,1.9-7.2,4.6c-0.3,1.5,1.1,2.8,2.2,3.7c0.6,0.5,2.6,1.5,3.3,1.8l2.1,1c1,0.4,1.7,0.7,2,0.9c4.3,1.9,7.4,3.8,9.3,6
			s2.9,4.9,2.9,8.3c0,3.6-1.4,6.7-4.2,9.1c-2.8,2.4-6.8,3.6-11.8,3.6c-5.7,0-10.7-1.5-14.9-4.5V70.2z"
              fill={textColor}
            />
            <path
              d="M332.6,70.2c4,4,8.9,6,14.5,6c5.4,0,8.6-2.5,8.6-5.5c0-1.9-0.7-3.3-2.1-4.4c-1.3-1.1-4-2.4-7.9-4
			c-7.7-3.3-11.8-6.8-11.8-13.2c0-3.6,1.4-6.5,4.2-8.6c2.8-2.2,6.4-3.3,10.8-3.3c4.2,0,7.8,1,10.8,3.1v8.1c-3-2.6-6.5-3.9-10.6-3.9
			c-4.5,0-7.2,1.9-7.2,4.6c-0.3,1.5,1.1,2.8,2.2,3.7c0.6,0.5,2.6,1.5,3.3,1.8l2.1,1c1,0.4,1.7,0.7,2,0.9c4.3,1.9,7.4,3.8,9.3,6
			s2.9,4.9,2.9,8.3c0,3.6-1.4,6.7-4.2,9.1c-2.8,2.4-6.8,3.6-11.8,3.6c-5.7,0-10.7-1.5-14.9-4.5V70.2z"
              fill={textColor}
            />
            <path
              d="M370.5,38h8v26.7c0,7.7,3.8,11.4,10.1,11.4c6.2,0,10-3.7,10-11.4V38h8v27.5c0,5.7-1.7,10.1-5.1,13.2
			c-3.4,3.1-7.7,4.6-13,4.6s-9.7-1.5-13.1-4.6c-3.4-3.1-5.1-7.5-5.1-13.2V38z"
              fill={textColor}
            />
            <path
              d="M416.1,82.6V38h17.3c4,0,7.4,1.3,10.2,4.1c2.8,2.7,4.2,6,4.2,10c0,5.8-3.3,10.6-8.1,12.7l10.8,17.8h-9l-9.5-15.9H432h-7.8
			v15.9H416.1z M424.1,59.5h8.5c4.4,0,7.4-3,7.4-7.3c0-4.1-2.9-7-6.7-7h-9.2V59.5z"
              fill={textColor}
            />
            <path
              d="M456.8,82.6V38h28.4v7.2h-20.4v10.6H484V63h-19.1v12.3h20.9v7.2H456.8z"
              fill={textColor}
            />
            <path
              d="M194.7,154.6v-17.3L178.6,110h8.6l11.5,19.6l11.4-19.6h8.6l-16.1,27.3v17.3H194.7z"
              fill={textColor}
            />
            <path
              d="M226.2,148.8c-4.5-4.4-6.8-9.9-6.8-16.4s2.3-12,6.8-16.4c4.5-4.5,10.1-6.7,16.7-6.7c6.6,0,12.2,2.2,16.7,6.7
			c4.6,4.4,6.9,9.9,6.9,16.4s-2.3,12-6.8,16.4c-4.5,4.4-10.2,6.7-16.8,6.7C236.3,155.5,230.7,153.2,226.2,148.8z M231.7,143.7
			c3,3,6.8,4.5,11.2,4.5c4.4,0,8.1-1.5,11.1-4.5c3-3.1,4.5-6.8,4.5-11.3s-1.5-8.3-4.5-11.3c-3-3.1-6.7-4.6-11.1-4.6
			c-4.4,0-8.2,1.5-11.2,4.6c-3,3.1-4.5,6.8-4.5,11.3C227.2,136.9,228.7,140.7,231.7,143.7z"
              fill={textColor}
            />
            <path
              d="M273.6,110h8v26.7c0,7.7,3.8,11.4,10.1,11.4c6.2,0,10-3.7,10-11.4V110h8v27.5c0,5.7-1.7,10.1-5.1,13.2
			c-3.4,3.1-7.7,4.6-13,4.6s-9.7-1.5-13.1-4.6c-3.4-3.1-5.1-7.5-5.1-13.2V110z"
              fill={textColor}
            />
            <path
              d="M319.3,154.6V110h17.3c4,0,7.4,1.3,10.2,4.1c2.8,2.7,4.2,6,4.2,10c0,5.8-3.3,10.6-8.1,12.7l10.8,17.8h-9l-9.5-15.9h-0.1
			h-7.8v15.9H319.3z M327.3,131.5h8.5c4.4,0,7.4-3,7.4-7.3c0-4.1-2.9-7-6.7-7h-9.2V131.5z"
              fill={textColor}
            />
            <path
              d="M385.2,154.6V110h17c3.8,0,7.2,1.3,10.1,4c2.9,2.7,4.4,6.2,4.4,10.5c0,4.2-1.5,7.6-4.4,10.4c-2.9,2.8-6.3,4.1-10.1,4.1h-9
			v15.6H385.2z M393.2,131.7h8.6c3.6,0,7-2.6,7-7.2c0-4.7-3.4-7.3-7-7.3h-8.6V131.7z"
              fill={textColor}
            />
            <path
              d="M428.4,148.8c-4.5-4.4-6.8-9.9-6.8-16.4s2.3-12,6.8-16.4c4.5-4.5,10.1-6.7,16.7-6.7c6.6,0,12.2,2.2,16.7,6.7
			c4.6,4.4,6.9,9.9,6.9,16.4s-2.3,12-6.8,16.4c-4.5,4.4-10.2,6.7-16.8,6.7C438.5,155.5,433,153.2,428.4,148.8z M433.9,143.7
			c3,3,6.8,4.5,11.2,4.5c4.4,0,8.1-1.5,11.1-4.5c3-3.1,4.5-6.8,4.5-11.3s-1.5-8.3-4.5-11.3c-3-3.1-6.7-4.6-11.1-4.6
			c-4.4,0-8.2,1.5-11.2,4.6c-3,3.1-4.5,6.8-4.5,11.3C429.5,136.9,430.9,140.7,433.9,143.7z"
              fill={textColor}
            />
            <path
              d="M476.2,154.6V110h8v37.4h17.7v7.2H476.2z"
              fill={textColor}
            />
            <path d="M509.1,154.6V110h8v44.6H509.1z" fill={textColor} />
            <path
              d="M535.8,154.6v-37.4h-12.1V110h32.2v7.2h-12.1v37.4H535.8z"
              fill={textColor}
            />
            <path d="M562.3,154.6V110h8v44.6H562.3z" fill={textColor} />
            <path
              d="M615.7,113.9v8.5c-3.9-4-8.5-6-13.9-6c-4.5,0-8.3,1.5-11.3,4.5s-4.5,6.8-4.5,11.3c0,4.5,1.5,8.3,4.5,11.3
			s6.8,4.5,11.3,4.5c5.4,0,10-2,13.9-6v8.5c-3.8,3.1-8.4,4.7-13.9,4.7c-6.6,0-12.2-2.2-16.8-6.5c-4.5-4.4-6.8-9.9-6.8-16.5
			c0-6.6,2.3-12.1,6.8-16.5c4.6-4.4,10.2-6.6,16.8-6.6C607.2,109.2,611.9,110.7,615.7,113.9z"
              fill={textColor}
            />
            <path d="M624.9,154.6V110h8v44.6H624.9z" fill={textColor} />
            <path
              d="M639.4,154.6l22.1-46.8l22,46.8H675l-4-8.6h-19.2l-4,8.6H639.4z M654.9,139H668l-6.6-14.5L654.9,139z"
              fill={textColor}
            />
            <path
              d="M689.7,154.6v-46.3l30.4,29.8V110h8v46.3l-30.4-29.7v28H689.7z"
              fill={textColor}
            />
            <path
              d="M735.7,142.2c4,4,8.9,6,14.5,6c5.4,0,8.6-2.5,8.6-5.5c0-1.9-0.7-3.3-2.1-4.4c-1.3-1.1-4-2.4-7.9-4
			c-7.7-3.3-11.8-6.8-11.8-13.2c0-3.6,1.4-6.5,4.2-8.6c2.8-2.2,6.4-3.3,10.8-3.3c4.2,0,7.8,1,10.8,3.1v8.1c-3-2.6-6.5-3.9-10.6-3.9
			c-4.5,0-7.2,1.9-7.2,4.6c-0.3,1.5,1.1,2.8,2.2,3.7c0.6,0.5,2.6,1.5,3.3,1.8l2.1,1c1,0.4,1.7,0.7,2,0.9c4.3,1.9,7.4,3.8,9.3,6
			c1.9,2.1,2.9,4.9,2.9,8.3c0,3.6-1.4,6.7-4.2,9.1c-2.8,2.4-6.8,3.6-11.8,3.6c-5.7,0-10.7-1.5-14.9-4.5V142.2z"
              fill={textColor}
            />
          </g>
        </g>
      </svg>
    </span>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Logo.defaultProps = {
  className: null,
  size: 64,
};
