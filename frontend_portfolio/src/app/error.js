'use client'; 

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-red-50 text-red-800">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-6">{error?.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
