'use client';

import { useRedirectByUserCheck } from '@hooks/useRedirectByUserCheck';

const Loading = () => {
  useRedirectByUserCheck();

  return (
    <div>
      Loading...
    </div>
  );
};

export default Loading;