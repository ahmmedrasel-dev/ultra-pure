import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Loader from './components/Shared/Loader/Loader';
import router from './routes/routes';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <RouterProvider router={router}></RouterProvider>}
      <Toaster />
    </>
  );
}

export default App;
