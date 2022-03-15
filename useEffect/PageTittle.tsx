import React, { useEffect } from 'react';

export default function PageTittle() {
  useEffect(() => {
    // after de component load
    // I can use Jquey here :)
    // I can connect to webserver here
  });

  return (
    <div>
      <p>
        By default, it runs both after the first render and after every update.{' '}
      </p>
    </div>
  );
}
