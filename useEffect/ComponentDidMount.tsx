import React, { useEffect } from 'react';

export default function ComponentDidMount() {
  useEffect(() => {
    // after de component load
    // After all renders
    // I can use Jquey here it is safe :)
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
