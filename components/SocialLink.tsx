import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
    >
      <div className="w-8 h-8">{children}</div>
    </a>
  );
};

export default SocialLink;