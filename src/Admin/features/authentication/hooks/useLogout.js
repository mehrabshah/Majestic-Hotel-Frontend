import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('MajesticUser');
    toast.success('Logged out successfully');
    navigate('/login', { replace: true });
  };
  const isLoading = false;

  return { logout, isLoading };
}
