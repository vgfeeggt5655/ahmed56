import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-6">{project.description}</p>
        <div className="flex justify-end gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-600 transition-colors">
              المعاينة
            </a>
          )}
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 text-white py-2 px-4 rounded-md hover:bg-cyan-500 transition-colors">
              الكود المصدري
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;