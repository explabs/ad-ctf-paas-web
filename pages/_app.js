import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from 'services';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [jwt, setJwt] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  function checkJwt() {
    return true;
  }

  function authCheck(url) {
    setJwt(userService.jwtValue);
    const publicPaths = ['/login', '/signup'];
    const path = url.split('?')[0];
    if (publicPaths.includes(path) || (userService.jwtValue && checkJwt(userService.jwtValue))) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: { returnUrl: router.asPath },
      });
    }
  }

  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);

    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  });

  return (
    <>
      {authorized ? <Component {...pageProps} /> : (
        <>
          Загрузка...
          <style jsx global>
            {`
            body {
              background-color: #1f1f1f;
              color: white;
            }
          `}
          </style>
        </>
      )}
    </>
  );
}

export default App;
