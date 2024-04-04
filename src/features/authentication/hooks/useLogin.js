import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login as loginApi } from '../../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const userData = await loginApi(data);
      localStorage.setItem('MajesticUser', JSON.stringify(userData));
      navigate('/dashboard', { replace: true });
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const isLoading = false;

  return { login, isLoading };
}
