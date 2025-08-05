import React from 'react';

interface ContactUsHeaderProps {
  title?: string;
}

const ContactUsHeader: React.FC<ContactUsHeaderProps> = ({
  title = 'Contact Us'
}) => {
  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      {/* Dark overlay with blur effect */}
      <div 
        className="absolute inset-0  backdrop-blur-sm"
        style={{
          backgroundImage: 'url("/images/bgimage.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default ContactUsHeader;
