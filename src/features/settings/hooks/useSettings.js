import { useState, useEffect } from 'react';

const dummySettings = {
  theme: 'light',
  language: 'en',
};

export function useSettings() {
  const [settings, setSettings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      setSettings(dummySettings);
      setIsLoading(false);
    }, 1000);

    // Cleanup function
    return () => clearTimeout(delay);
  }, []);

  return { settings, isLoading, error };
}
