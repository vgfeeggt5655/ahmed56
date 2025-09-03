import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        {title}
        <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-4 rounded"></span>
      </h2>
      {children}
    </section>
  );
};

export default Section;