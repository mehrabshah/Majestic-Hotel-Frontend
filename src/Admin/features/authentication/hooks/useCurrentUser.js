export function useCurrentUser() {
  const user = JSON.parse(localStorage.getItem('MajesticUser'));

  const isAuthenticated = user;
  const isAdmin = user?.role === 'ADMIN';

  return { isLoading: false, user, isAuthenticated, isAdmin };
}
