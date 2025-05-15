import { FC } from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const emojiIcons: Record<string, string> = {
  '🎯': 'Custom Planning',
  '🏛️': 'Premium Venues',
  '👔': 'Expert Team',
  '🍽️': 'Catering Options',
  '📋': 'Full Coordination',
  '🌎': 'Global Network',
  '📅': 'Calendar',
  '👤': 'User',
  '✉️': 'Email',
  '📞': 'Phone',
};

export const Icon: FC<IconProps> = ({ name, className = '' }) => {
  const ariaLabel = emojiIcons[name] || 'Icon';
  
  return (
    <span 
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      {name}
    </span>
  );
};