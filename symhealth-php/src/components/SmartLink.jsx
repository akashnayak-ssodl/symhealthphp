import { Link } from 'react-router-dom';

function isExternal(path) {
  return /^(https?:|mailto:|tel:)/i.test(path);
}

export default function SmartLink({ to, children, className, ...props }) {
  if (isExternal(to)) {
    return (
      <a
        className={className}
        href={to}
        target={to.startsWith('http') ? '_blank' : undefined}
        rel={to.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return <Link className={className} to={to} {...props}>{children}</Link>;
}
