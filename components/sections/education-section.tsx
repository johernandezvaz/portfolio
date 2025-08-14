'use client';

import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const EducationSection = () => {
  const { t } = useLanguage();
  
  const education = [
    {
      degree: t.education.degrees.engineering.degree,
      institution: t.education.degrees.engineering.institution,
      location: "Chihuahua, México",
      period: "Enero 2022 - Julio 2026 (previsto)",
      description: t.education.degrees.engineering.description,
      achievements: t.education.degrees.engineering.achievements,
      status: "current"
    },
    {
      degree: t.education.degrees.license.degree,
      institution: t.education.degrees.license.institution,
      location: "Francia",
      period: "Septiembre 2020 - Junio 2021",
      description: t.education.degrees.license.description,
      achievements: t.education.degrees.license.achievements,
      status: "completed"
    },
    {
      degree: t.education.degrees.tsu.degree,
      institution: t.education.degrees.tsu.institution,
      location: "Chihuahua, México",
      period: "Septiembre 2018 - Agosto 2020",
      description: t.education.degrees.tsu.description,
      achievements: t.education.degrees.tsu.achievements,
      status: "completed"
    }
  ];

  return (
    <section id="trayectoria" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={t.education.title}
            subtitle={t.education.subtitle}
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A192F] via-[#C5A880] to-[#0A192F] hidden md:block"></div>

            <div className="space-y-12">
              {education.map((item, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Content Card */}
                  <Card className={`w-full md:ml-16 group hover:shadow-xl transition-all duration-300 ${
                    item.status === 'current' ? 'border-dashed border-[#C5A880]' : ''
                  }`}>
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex items-start justify-between flex-wrap gap-4">
                            <div>
                              <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                                {item.degree}
                              </h3>
                              <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                                <div className="flex items-center space-x-1">
                                  <GraduationCap className="w-4 h-4" />
                                  <span className="font-medium">{item.institution}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>{item.period}</span>
                                {item.status === 'current' && (
                                  <span className="ml-2 px-2 py-1 bg-[#C5A880]/10 text-[#C5A880] rounded-full text-xs">
                                    {t.education.current}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground flex items-center space-x-2">
                            <Award className="w-4 h-4 text-[#C5A880]" />
                            <span>{t.education.keyPoints}</span>
                          </h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start space-x-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: t.education.stats.yearsOfStudy, value: '6+' },
              { label: t.education.stats.institutions, value: '3' },
              { label: t.education.stats.languagesMastered, value: '3' },
              { label: t.education.stats.projectsCompleted, value: '20+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-playfair font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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

export default EducationSection;