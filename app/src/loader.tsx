'use client';

import CircularProgress from '@mui/material/CircularProgress';

export default function Progress() {
  return (
    <div className='flex flex-col items-center w-full h-full z-10 my-100'>
      <CircularProgress />
    </div>
  );
}