import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const WEFLogo = ({ className, height }) => {
  const classNames = classnames('wef-logo', className);
  const width = (102 / 63) * height;
  return (
    <svg
      className={classNames}
      focusable="false"
      height={height}
      viewBox="0 0 102 63"
      width={width}
    >
      <mask height="63" maskUnits="userSpaceOnUse" width="102" x="0" y="0">
        <path
          clipRule="evenodd"
          d="m0 .447266h101.542v62.552734h-101.542z"
          fill="#fff"
          fillRule="evenodd"
        />
      </mask>
      <mask
        height="63"
        id="a"
        maskUnits="userSpaceOnUse"
        width="102"
        x="0"
        y="0"
      >
        <path
          clipRule="evenodd"
          d="m0 .447266h101.542v62.552734h-101.542z"
          fill="#fff"
          fillRule="evenodd"
        />
      </mask>
      <g clipRule="evenodd" fillRule="evenodd" mask="url(#a)">
        <path
          d="m81.618 54.25c-.0105.0083-.0209.0159-.0313.0242l-.2761-.3309c-5.6926 4.682-12.9235 7.2145-20.3855 7.2145-8.5388 0-16.5392-3.2234-22.5392-9.1336-6-5.8327-9.3084-13.6613-9.3084-21.951 0-6.3699 1.9235-12.5869 5.6926-17.8062 3.6928-5.14243 8.7699-8.97989 14.7699-11.20566l-.2304-.614074c-6.0777 2.302614-11.3081 6.216924-15.0009 11.436234-3.8462 5.3723-5.923 11.6661-5.923 18.1897 0 8.4427 3.3848 16.425 9.5388 22.4114.5787.5635 1.181 1.0945 1.7936 1.6096l-.7937.9235c6.0769 5.1425 13.9233 7.9823 22.0007 7.9823 7.9234 0 15.5387-2.763 21.6164-7.6749z"
          fill="#008cf0"
        />
        <g fill="currentColor">
          <path d="m35.0781 10.8857c-.1533-.5373-.2304-.99764-.2304-1.53487 0-2.30262 1.5384-4.37539 4.3076-4.37539.6155 0 1.154.07685 1.6154.23054.4614-.38354.9999-.76777 1.5383-1.07446-.9228-.53723-1.9997-.84392-3.1537-.84392-3.3847 0-6.231 2.68615-6.231 6.06323 0 1.15127.3851 2.30257.9229 3.22337.154-.2298.3081-.4604.4614-.6141.2311-.3842.5391-.767.7695-1.0744z" />
          <path d="m43.386 4.89893c-.5384.30669-.9999.61407-1.4613.99761.9999.76777 1.5383 2.07208 1.5383 3.45392 0 2.30264-1.6923 4.29784-4.3076 4.29784-1.462 0-2.6159-.6141-3.3847-1.6117-.154.2306-.3081.3842-.4621.6141-.2304.3074-.4608.6141-.6155.9208 1.1546 1.0751 2.693 1.766 4.4623 1.766 3.4611 0 6.2311-2.61 6.2311-5.98704 0-1.76538-.7695-3.37707-2.0005-4.45153z" />
          <path d="m32.3859 25.0078c0 1.8422-1.0769 3.4539-2.6923 4.068v.9976.8446c2.6152-.6909 4.615-2.9936 4.615-5.9102 0-2.0721-1.1532-3.9144-2.8456-5.0657-.2311.6141-.3851 1.1513-.6155 1.6886.9999.8446 1.5384 2.0727 1.5384 3.3771z" />
          <path d="m28.4624 29.3828h-.3845c-2.6152 0-4.3853-1.9953-4.3853-4.3747 0-2.2258 1.5391-4.2979 4.3853-4.2979.6155 0 1.231.0762 1.6917.3067.1548-.5379.3081-1.0744.5392-1.6117-.6925-.2305-1.462-.3842-2.2309-.3842-3.4617 0-6.231 2.6868-6.231 5.9871 0 3.4539 2.7693 6.0632 6.231 6.0632h.3845c0-.3067-.0771-.6909-.0771-.9976 0-.2305.0771-.4604.0771-.6909z" />
          <path d="m32.5394 36.5206c2.7693 0 4.3076 2.072 4.3076 4.2978 0 1.9952-1.2302 3.7606-3.1536 4.2217.3073.5372.6154.9976.9228 1.5349 2.3849-.844 4.1543-2.9936 4.1543-5.7566 0-3.3002-2.8463-5.9864-6.2311-5.9864-.8458 0-1.6923.1537-2.3841.4604.0763.5372.1533 1.1513.3074 1.6886.6154-.3067 1.3072-.4604 2.0767-.4604z" />
          <path d="m28.2313 40.8184c0-1.1513.3851-2.2258 1.1539-3.0697-.154-.6141-.3073-1.2281-.3844-1.8422-1.6153 1.0745-2.6922 2.9167-2.6922 4.9119 0 3.4546 2.7693 6.0632 6.231 6.0632.2304 0 .5385 0 .7695-.0761-.3081-.5372-.6925-1.0745-1.0005-1.6117-2.4612-.1537-4.0773-1.9959-4.0773-4.3754z" />
          <path d="m62.7713 35.0623v6.9846c0 1.6117-.5384 3.1466-2.6152 3.1466-2.0775 0-2.6159-1.5349-2.6159-3.1466v-6.9846h-1.9228v7.3682c0 2.5324 1.6154 4.4515 4.5387 4.4515s4.5379-1.9191 4.5379-4.4515v-7.3682z" />
          <path d="m64.3099 13.4954h5.2311v1.6117h-7.1545v-11.58928h1.9234z" />
          <path d="m0 19.2515h6.76947v1.6878h-4.84674v2.7637h4.76972v1.6885h-4.76972v3.7607h4.84674v1.6885h-6.76947z" />
          <path d="m38.2322 18.6375 8.0004 8.2121v-7.5981h1.9227v12.0496l-8.0004-8.0584v7.5981h-1.9227z" />
          <path d="m85.9263 19.2517h1.9234v11.5892h-1.9234z" />
          <path d="m18.6928 36.7508v2.763h4.1535v1.6124h-4.1535v5.5253h-1.9228v-11.5892h6.231v1.6885z" />
          <path d="m26.3854 10.7322h.077l1.8458-7.21455h1.8471l-3.2314 12.05035-4.0773-8.67328-4.0765 8.67328-3.3077-12.05035h1.9227l1.8464 7.21455 3.6151-7.44509z" />
          <path d="m70.8485 23.6261h-.077l-1.8464 7.2145h-1.8458l3.2307-12.0496 4.0773 8.7494 4.0772-8.7494 3.3077 12.0496h-1.9234l-1.8464-7.2145h-.0771l-3.538 7.5219z" />
          <path d="m71.8485 39.4371-1.8464 7.2145h-1.9228l3.2307-12.0503 4.1543 8.6733 4.0772-8.6733 3.23 12.0503h-1.9227l-1.8464-7.2145-3.5381 7.4451z" />
          <path d="m46.0016 35.0623c1.0769 0 2.3078 0 3.2307.5372 1.0005.5372 1.6153 1.6885 1.6153 2.763 0 1.6885-1.1532 3.0704-2.8463 3.2234l3.6928 5.0656h-2.1538l-3.4617-4.9119h-1.308v4.9119h-1.9227v-11.5892zm-1.231 5.1424h.8466c1.5383 0 3.3847.0762 3.3847-1.7654 0-1.8422-1.9234-1.7654-3.4618-1.7654h-.7695z" />
          <path d="m52.5401 3.51733c1.0769 0 2.3079 0 3.2307.53723 1.0006.53724 1.5384 1.68854 1.5384 2.763 0 1.68924-1.0762 3.07039-2.8456 3.22334l3.7691 5.0657h-2.1538l-3.5388-4.912h-1.2309v4.912h-1.9227v-11.58927zm-1.2309 5.14247h.8465c1.5384 0 3.3078.07684 3.3078-1.76539s-1.9235-1.76469-3.3848-1.76469h-.7695z" />
          <path d="m74.8487 13.4954h1.0769c2.5389 0 4.9231-.9215 4.9231-4.22173 0-3.37708-2.3842-4.14416-4.9231-4.14416h-1.0769zm-1.9234-9.97758h3.1537c3.6928 0 6.6931 1.76469 6.6931 5.75585 0 3.99113-2.9233 5.83343-6.6931 5.83343h-3.1537z" />
          <path d="m100.542 28.8455c-.6157.3836-1.3082.5373-2.154.5373-2.5389 0-4.3076-1.9191-4.3076-4.2986 0-2.3019 1.5383-4.3747 4.3076-4.3747.8458 0 1.5383.1537 2.154.4604l.923-1.3811c-.846-.4604-1.9231-.7678-3.077-.7678-3.3847 0-6.231 2.6868-6.231 6.0632 0 3.3778 2.8463 5.9871 6.231 5.9871 1.1539 0 2.231-.2305 3.154-.7678z" />
          <path d="m18.77 28.8455c-.6155.3836-1.308.5373-2.0768.5373-2.6159 0-4.3853-1.9191-4.3853-4.2986 0-2.3019 1.5383-4.3747 4.3853-4.3747.7688 0 1.4613.1537 2.0768.4604l.9998-1.3811c-.9228-.4604-2.0004-.7678-3.0766-.7678-3.4618 0-6.231 2.6868-6.231 6.0632 0 3.3778 2.7692 5.9871 6.231 5.9871 1.0762 0 2.1538-.2305 3.0766-.7678z" />
          <path d="m62.6944 25.0845c0-2.3026-1.5384-4.3747-4.3076-4.3747-2.8463 0-4.3853 2.0721-4.3853 4.3747 0 2.3794 1.7694 4.2978 4.3853 4.2978 2.5382 0 4.3076-1.9184 4.3076-4.2978zm1.9234 0c0 3.377-2.847 5.987-6.231 5.987-3.4618 0-6.231-2.61-6.231-5.987 0-3.3771 2.7692-6.0633 6.231-6.0633 3.384 0 6.231 2.6862 6.231 6.0633z" />
        </g>
      </g>
    </svg>
  );
};

WEFLogo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
};

WEFLogo.defaultProps = {
  className: null,
  height: 84,
};