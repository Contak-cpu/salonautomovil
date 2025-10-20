import React from 'react';
import { Typography, TypographyKey, getTypographyClass } from '../../constants/typography';

interface TextProps {
  variant: TypographyKey;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Text: React.FC<TextProps> = ({ 
  variant, 
  children, 
  className = '', 
  as: Component = 'p' 
}) => {
  const baseClasses = getTypographyClass(variant);
  const classes = `${baseClasses} ${className}`;

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default Text;
