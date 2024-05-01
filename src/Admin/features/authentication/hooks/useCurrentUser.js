export function useCurrentUser() {
  const user = JSON.parse(localStorage.getItem('MajesticUser'));
  if(!user) return {isAuthenticated:null,isAdmin:false,user:null}
  const isAuthenticated = user;
  const isAdmin = user?.role === 'ADMIN';

  return { isLoading: false, user, isAuthenticated, isAdmin };
}
