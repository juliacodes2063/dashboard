import React from 'react';

interface SkeletonBlockProps {
  className?: string;
}

const SkeletonBlock: React.FC<SkeletonBlockProps> = ({ className }) => (
  <div className={`bg-primary rounded-md animate-pulse ${className ?? ''}`} />
);

export default SkeletonBlock;
