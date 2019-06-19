# React - useMounted

React hook for checking if the component is mounted.

## Install

```sh
npm install --save react-use-mounted
```

## Usage

```ts
import {useState} from 'react';
import useMounted from 'react-use-mounted';

function MyComponent () {

  const [foo, setFoo] = useState ( false );
  const mounted = useMounted ();

  useWhatever ( () => {
    if ( !mounted.current ) return; // Not mounted, avoiding calling `setFoo`
    setFoo ( true );
  });

}
```

## License

MIT © Fabio Spampinato
