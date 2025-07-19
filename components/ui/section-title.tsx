interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-[#0A192F] to-[#C5A880] mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;