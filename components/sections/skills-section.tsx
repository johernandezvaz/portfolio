'use client';

import { Languages, Code, Settings, Award, TrendingUp } from 'lucide-react';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const { t } = useLanguage();

  const languages = [
    { name: t.skills.languages.spanish, level: 100, description: t.skills.languages.descriptions.spanish },
    { name: t.skills.languages.french,  level: 85,  description: t.skills.languages.descriptions.french },
    { name: t.skills.languages.english, level: 90,  description: t.skills.languages.descriptions.english },
  ];

  const technicalSkills = [
    { name: 'Python',                level: 95, category: 'Programación' },
    { name: 'JavaScript/TypeScript', level: 88, category: 'Desarrollo Web' },
    { name: 'React/Next.js',         level: 85, category: 'Frontend' },
    { name: 'PyTorch/TensorFlow',    level: 80, category: 'IA/ML' },
    { name: 'Node.js',               level: 82, category: 'Backend' },
    { name: 'Django/Flask',          level: 85, category: 'Frameworks Python' },
    { name: 'C/C++',                 level: 78, category: 'Sistemas Embebidos' },
    { name: 'MicroPython',           level: 80, category: 'IoT' },
  ];

  const tools = [
    'Jupyter Notebook', 'VS Code', 'PyCharm', 'Figma', 'Git/GitHub',
    'Docker', 'Postman', 'Arduino IDE', 'Raspberry Pi', 'ESP32',
    'Matplotlib', 'Seaborn', 'NumPy', 'Scikit-Learn', 'PostgreSQL', 'Stripe', 'Supabase',
  ];

  const methodologies = [
    { name: t.skills.methodologies.list.iot.name,               description: t.skills.methodologies.list.iot.description },
    { name: t.skills.methodologies.list.projectManagement.name, description: t.skills.methodologies.list.projectManagement.description },
    { name: t.skills.methodologies.list.optimization.name,      description: t.skills.methodologies.list.optimization.description },
    { name: t.skills.methodologies.list.ai.name,                description: t.skills.methodologies.list.ai.description },
  ];

  const stats = [
    { icon: Languages,   label: t.skills.stats.languagesMastered, value: '3' },
    { icon: Code,        label: t.skills.stats.technologies,       value: '15+' },
    { icon: Settings,    label: t.skills.stats.professionalTools,  value: '15+' },
    { icon: TrendingUp,  label: t.skills.stats.yearsExperience,    value: '4+' },
  ];

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e2e7',
    borderRadius: '20px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    transition: 'border-color 0.2s ease',
  };

  const cardTitleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-display)',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: '#191c1f',
    margin: 0,
  };

  return (
    <section
      id="habilidades"
      style={{
        backgroundColor: '#ffffff',
        color: '#191c1f',
        padding: '88px 24px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionTitle
          title={t.skills.title}
          subtitle={t.skills.subtitle}
          mode="light"
        />

        <div
          className="grid lg:grid-cols-2"
          style={{ gap: '16px', marginBottom: '16px' }}
        >
          {/* Languages */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>
              <Languages style={{ width: '18px', height: '18px', color: '#494fdf' }} />
              {t.skills.languages.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {languages.map((language, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 600, color: '#191c1f' }}>
                      {language.name}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8d969e' }}>
                      {language.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: '4px',
                      backgroundColor: '#f4f4f4',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${language.level}%`,
                        backgroundColor: '#494fdf',
                        borderRadius: '9999px',
                      }}
                    />
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#505a63', margin: 0 }}>
                    {language.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>
              <Code style={{ width: '18px', height: '18px', color: '#494fdf' }} />
              {t.skills.technical.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {technicalSkills.map((skill, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#191c1f' }}>
                        {skill.name}
                      </span>
                      <span className="badge-tag" style={{ fontSize: '11px', padding: '2px 8px' }}>
                        {skill.category}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8d969e' }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: '3px',
                      backgroundColor: '#f4f4f4',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        backgroundColor: '#494fdf',
                        borderRadius: '9999px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="grid lg:grid-cols-2"
          style={{ gap: '16px' }}
        >
          {/* Tools */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>
              <Settings style={{ width: '18px', height: '18px', color: '#494fdf' }} />
              {t.skills.tools.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tools.map((tool, index) => (
                <span key={index} className="badge-tag">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Methodologies */}
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>
              <Award style={{ width: '18px', height: '18px', color: '#494fdf' }} />
              {t.skills.methodologies.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {methodologies.map((method, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: '#191c1f', margin: 0 }}>
                    {method.name}
                  </h4>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: 1.43, color: '#505a63', margin: 0 }}>
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div
          style={{
            backgroundColor: '#f4f4f4',
            borderRadius: '20px',
            padding: '48px 32px',
            marginTop: '16px',
          }}
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: '32px' }}
          >
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#191c1f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <stat.icon style={{ width: '20px', height: '20px', color: '#ffffff' }} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '32px',
                    fontWeight: 500,
                    lineHeight: 1.19,
                    letterSpacing: '-0.32px',
                    color: '#191c1f',
                    marginBottom: '6px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#505a63',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;