import { Slide } from '@/app/animation/Slide';
import { hexToRgb } from '@/app/utils/hexToRgb';
import { skills } from '../../data/data';


type CSSPropertiesWithCustomVars = React.CSSProperties & {
    '--skill-color'?: string;
    '--border-color'?: string;
};

export default function SkillsList() {
    return (
        <section className="mt-32">
            <Slide delay={0.16}>
                <h2 className="font-incognito text-4xl mb-12 font-bold tracking-tight">
                    Skills and Tools
                </h2>
            </Slide>
            <Slide delay={0.18}>
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill) => {
                        const Icon = skill.icon;
                        const rgbaColor = hexToRgb(skill.color, 0.12, true);
                        const borderColor = hexToRgb(skill.color, 1, true);
                        return (
                            <div
                                key={skill.name}
                                className="flex items-center space-x-2 p-2 border rounded-3xl group transition-transform transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[rgba(var(--skill-color))] hover:border-[rgba(var(--border-color))]"
                                style={{ '--skill-color': rgbaColor, '--border-color': borderColor } as CSSPropertiesWithCustomVars}
                            >
                                <Icon className="w-6 h-6" style={{ color: 'var(--lang-color)' }} aria-hidden="true" />
                                <span style={{ color: 'var(--lang-color)' }}>{skill.name}</span>
                            </div>
                        );
                    })}
                </div>
            </Slide>
        </section>
    );
}