export const getRoleBadgeStyles = (role: 'owner' | 'admin' | 'user') => {
  const map = {
    owner: 'bg-violet-100 text-violet-700',
    admin: 'bg-blue-100 text-blue-700',
    user: 'bg-slate-100 text-slate-700',
  };

  return map[role] || map.user;
};

export type UserRole = 'owner' | 'admin' | 'user';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
};

export const defaultUser: UserProfile = {
  id: 'owner-1',
  name: 'Jordan Rivers',
  email: 'owner@hybridhq.app',
  role: 'owner',
  avatar: 'JR',
};
