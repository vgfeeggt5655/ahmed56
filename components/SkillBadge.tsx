import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-3 bg-slate-800 py-3 px-5 rounded-lg shadow-md transition-all duration-300 hover:bg-cyan-500 hover:shadow-cyan-500/30 transform hover:-translate-y-1">
      <div className="w-6 h-6">{icon}</div>
      <span className="font-semibold text-lg">{name}</span>
    </div>
  );
};

export default SkillBadge;