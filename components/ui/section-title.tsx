interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  mode?: 'dark' | 'light';
}

const SectionTitle = ({
  title,
  subtitle,
  className = '',
  mode = 'light',
}: SectionTitleProps) => {
  const isDark = mode === 'dark';

  return (
    <div
      className={className}
      style={{ textAlign: 'center', marginBottom: '64px' }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 500,
          lineHeight: 1.21,
          letterSpacing: '-0.48px',
          color: isDark ? '#ffffff' : '#191c1f',
          marginBottom: subtitle ? '16px' : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: 1.56,
            letterSpacing: '-0.09px',
            color: isDark ? 'rgba(255,255,255,0.72)' : '#505a63',
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;