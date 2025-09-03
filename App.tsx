import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import SkillBadge from './components/SkillBadge';
import ProjectCard from './components/ProjectCard';
import SocialLink from './components/SocialLink';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, ReactIcon, TypeScriptIcon, NodeIcon, TailwindIcon } from './components/IconComponents';
import type { Project } from './types';

const App: React.FC = () => {

  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
  ];

  const projects: Project[] = [
    {
      title: 'المشروع الأول',
      description: 'وصف موجز للمشروع الأول. يوضح هذا المشروع قدرتي على بناء تطبيقات ويب تفاعلية وحديثة.',
      imageUrl: 'https://picsum.photos/seed/project1/400/300',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'المشروع الثاني',
      description: 'وصف للمشروع الثاني. يركز هذا المشروع على تصميم واجهات مستخدم جذابة وسهلة الاستخدام.',
      imageUrl: 'https://picsum.photos/seed/project2/400/300',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      title: 'المشروع الثالث',
      description: 'هذا المشروع يستعرض خبرتي في التعامل مع البيانات والواجهات الخلفية.',
      imageUrl: 'https://picsum.photos/seed/project3/400/300',
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-12">
        <Section title="عني">
          <p className="text-lg text-slate-400 max-w-3xl mx-auto text-center leading-relaxed">
            مطور واجهات أمامية شغوف ببناء تجارب مستخدم جميلة وتفاعلية. لدي خبرة في استخدام أحدث التقنيات لإنشاء تطبيقات ويب سريعة الاستجابة وفعالة. أسعى دائمًا لتعلم المزيد وتطوير مهاراتي.
          </p>
        </Section>

        <Section title="مهاراتي">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </Section>

        <Section title="مشاريعي">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        <Section title="تواصل معي">
          <div className="flex justify-center items-center space-x-6 space-x-reverse">
              <SocialLink href="#" ariaLabel="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink href="#" ariaLabel="LinkedIn">
                <LinkedinIcon />
              </SocialLink>
              <SocialLink href="#" ariaLabel="Twitter">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="mailto:email@example.com" ariaLabel="Email">
                <MailIcon />
              </SocialLink>
          </div>
          <p className="text-slate-400 mt-6 text-center">لا تتردد في التواصل معي!</p>
        </Section>
      </main>

      <footer className="text-center py-6 border-t border-slate-800">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} اسمك هنا. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default App;