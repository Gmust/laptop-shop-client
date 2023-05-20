'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUserAuthFx } from '@/sevices/api/auth';
import { setUser } from '@/context/user';

export const useRedirectByUserCheck = (isAuthPage = false) => {
  const [shouldLoadPage, setShouldLoadPage] = useState<boolean>(false);
  const router = useRouter();
  const shouldCheckAuth = useRef(true);

  useEffect(() => {
    if (shouldCheckAuth.current) {
      shouldCheckAuth.current = false;
      checkUser();
    }
  }, []);

  const checkUser = async () => {
    const user = await checkUserAuthFx('/users/login-check');

    if (isAuthPage) {
      if (!user) {
        setShouldLoadPage(true);
        return;
      }

      router.push('/');
      router.refresh();
    }
    if (user) {
      setUser(user);
      setShouldLoadPage(true);
      router.refresh();
      return;
    }
    router.refresh();
    router.push('/auth');
  };

  return { shouldLoadPage };
};



