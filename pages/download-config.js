import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  async function getRequest() {
    try {
      axios.get(
        'http://api.potee.local/api/v1/team/vpn',
      ).then((res) => res.data)
        .then((data) => {
          const element = document.createElement('a');
          element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`);
          element.setAttribute('download', `${localStorage.getItem('login') || 'config'}.ovpn`);

          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
        }).then(() => {
          router.push('/');
        });
    } catch (e) {
      // ...
    }
  }

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      Скачивается...
    </>
  );
}
