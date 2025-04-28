import { NavButtons } from '../Molecules/NavBarButtons';

export const Navbar = () => (
  <nav
    className="p-4 flex justify-between items-center w-full"
    style={{
      backgroundColor: 'var(--color-primary)',
      color: 'var(--text-color)',
    }}
  >
    <h1 className="text-xl font-bold text-white">User Management</h1>
    <NavButtons />
  </nav>
); 
