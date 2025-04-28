type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'logout' | 'icon' | 'edit' | 'delete' | 'login' | 'password';
};

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const variants = {
    primary: 'button-primary',
    logout: 'button-logout',
    icon: 'button-icon',
    edit: 'button-edit',
    delete: 'button-delete',
    login: 'button-login',
    password: 'button-password',
  };
 
  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};