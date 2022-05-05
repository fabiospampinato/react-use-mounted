
/* IMPORT */

import {useEffect, useRef} from 'react';
import type {RefObject} from 'react';

/* MAIN */

const useMounted = (): RefObject<boolean> => {

  const mounted = useRef ( false );

  useEffect ( () => {

    mounted.current = true;

    return () => {

      mounted.current = false;

    };

  }, [] );

  return mounted;

};

/* EXPORT */

export default useMounted;
