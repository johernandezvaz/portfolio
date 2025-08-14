'use client';

import { Languages, Code, Settings, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import SectionTitle from '@/components/ui/section-title';
import { useLanguage } from '@/hooks/use-language';

const SkillsSection = () => {
  const { t } = useLanguage();
  
  const languages = [
    { name: t.skills.languages.spanish, level: 100, description: t.skills.languages.descriptions.spanish },
    { name: t.skills.languages.french, level: 85, description: t.skills.languages.descriptions.french },
    { name: t.skills.languages.english, level: 90, description: t.skills.languages.descriptions.english },
  ];

  const technicalSkills = [
    { name: 'Python', level: 95, category: 'Programación' },
    { name: 'JavaScript/TypeScript', level: 88, category: 'Desarrollo Web' },
    { name: 'React/Next.js', level: 85, category: 'Frontend' },
    { name: 'PyTorch/TensorFlow', level: 80, category: 'IA/ML' },
    { name: 'Node.js', level: 82, category: 'Backend' },
    { name: 'Django/Flask', level: 85, category: 'Frameworks Python' },
    { name: 'C/C++', level: 78, category: 'Sistemas Embebidos' },
    { name: 'MicroPython', level: 80, category: 'IoT' },
    { name: 'SQL/NoSQL', level: 75, category: 'Bases de datos' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Java', level: 70, category: 'Programación' },
    { name: 'Rust', level: 65, category: 'Sistemas' },
  ];

  const tools = [
    'Jupyter Notebook', 'VS Code', 'PyCharm', 'Figma', 'Git/GitHub',
    'Docker', 'Postman', 'Arduino IDE', 'Raspberry Pi', 'ESP32',
    'Matplotlib', 'Seaborn', 'NumPy', 'Scikit-Learn', 'PostgreSQL', 'Stripe', 'Supabase'
  ];

  const methodologies = [
    { name: t.skills.methodologies.list.iot.name, description: t.skills.methodologies.list.iot.description },
    { name: t.skills.methodologies.list.projectManagement.name, description: t.skills.methodologies.list.projectManagement.description },
    { name: t.skills.methodologies.list.optimization.name, description: t.skills.methodologies.list.optimization.description },
    { name: t.skills.methodologies.list.ai.name, description: t.skills.methodologies.list.ai.description },
  ];

  return (
    <section id="habilidades" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title={t.skills.title}
            subtitle={t.skills.subtitle}
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Languages */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Languages className="w-5 h-5 text-[#C5A880]" />
                  <span>{t.skills.languages.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{language.name}</span>
                      <span className="text-sm text-muted-foreground">{language.level}%</span>
                    </div>
                    <Progress value={language.level} className="h-2" />
                    <p className="text-sm text-muted-foreground">{language.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-[#C5A880]" />
                  <span>{t.skills.technical.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.slice(0, 8).map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tools & Technologies */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-[#C5A880]" />
                  <span>{t.skills.tools.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Methodologies */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#C5A880]" />
                  <span>{t.skills.methodologies.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {methodologies.map((method, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-foreground">{method.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Skills Summary */}
          <div className="mt-12 bg-gradient-to-r from-[#0A192F]/5 to-[#C5A880]/5 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Languages, label: t.skills.stats.languagesMastered, value: '3' },
                { icon: Code, label: t.skills.stats.technologies, value: '15+' },
                { icon: Settings, label: t.skills.stats.professionalTools, value: '15+' },
                { icon: TrendingUp, label: t.skills.stats.yearsExperience, value: '4+' },
              ].map((stat, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0A192F] to-[#C5A880] rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-playfair font-bold text-primary">
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
      </div>
    </section>
  );
};

export default SkillsSection;