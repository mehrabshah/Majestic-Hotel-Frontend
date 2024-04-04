export function useCurrentUser() {
  const user = JSON.parse(localStorage.getItem('MajesticUser'));

  const isAuthenticated = user?.role === 'authenticated';
  const isAdmin = user?.user_metadata.user_role === 'admin';

  return { isLoading: false, user, isAuthenticated, isAdmin };
}
