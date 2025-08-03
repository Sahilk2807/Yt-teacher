import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return <div className={`animate-pulse-fast bg-gray-dark rounded-md ${className}`} />;
};

export default Skeleton;