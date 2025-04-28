type AvatarProps = {
  initials: string;
};

export const Avatar = ({ initials }: AvatarProps) => (
  <div className="avatar">
    {initials}
  </div>
);
