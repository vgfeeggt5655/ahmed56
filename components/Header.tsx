import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-800/20 backdrop-blur-sm pt-24 pb-16 text-center">
      <div className="container mx-auto px-6">
        <img
          src="https://picsum.photos/id/237/200"
          alt="صورة شخصية"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-500 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-white leading-tight">اسمك هنا</h1>
        <p className="text-2xl text-cyan-400 mt-2">مطور واجهات أمامية</p>
        <p className="text-slate-300 max-w-2xl mx-auto mt-4 text-lg">
          أقوم بتحويل الأفكار إلى واقع رقمي ملموس من خلال كود أنيق وفعال.
        </p>
      </div>
    </header>
  );
};

export default Header;