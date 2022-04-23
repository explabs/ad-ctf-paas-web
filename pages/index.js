import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import * as THREE from 'three';
import gsap from 'gsap';
import Layout from '../components/Layout';

export default function HomePage() {
  const user = useSelector(({ auth }) => auth.user);
  const router = useRouter();
  const ref = useRef(null);
  useEffect(() => {
    if (user.id === 'Гость') {
      router.push('/login');
    } else {
      router.push('/scoreboard');
    }
  }, [user]);

  return (
    <Layout>
      <div ref={ref} />
      <style jsx>
        {`
      body {
  color: white;
  margin: 0;
  text-align: center;
  background-color: black;
  cursor: crosshair;
}
canvas {
  display: block;
  width: 100%;
  height: 100%;
}
p {
  color: rgba(255,255,255, 0.5)
}
.header {
  top: 42%;
}
.header-content {
  padding: 50px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
}
.footer {
  bottom:3%;
}
.description {
  color: gray;
  padding-top: 50px;
}
a, a:hover, a:visited {
  color: white;
  text-decoration: none;
} 
.disable-selection {
     -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}
h1 {
text-align: center;
}
h2::after {
  content: '2';
  font-size: 12px;
  position:absolute;
  top: 14px;
  padding-left: 5px;
}

.btn {
  border-radius: 100px;
  padding: 10px 25px;
}
  
`}
      </style>
    </Layout>
  );
}
