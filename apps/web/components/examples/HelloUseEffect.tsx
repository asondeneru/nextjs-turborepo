'use client';
import { useEffect } from 'react';

export const HelloUseEffect = () => {
  useEffect(() => {
    let ignore = false;

    if (!ignore) console.log('this log will be shown once');

    return () => {
      ignore = true;
    };
  }, []);

  return <>Hello useEffect component.</>;
};
