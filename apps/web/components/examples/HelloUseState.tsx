'use client';
import { useState } from 'react';

export const HelloUseState = () => {
  const [ignore, setIgnore] = useState(false);

  !ignore
    ? console.log('this log will be shown once')
    : setIgnore(true);

  return <>Hello useState component.</>;
};
