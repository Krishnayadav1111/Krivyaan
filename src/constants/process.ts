import type { ProcessStep } from '@/types'

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Discovery',
    description:
      'We start with a deep-dive consultation to understand your business, goals, target audience, and competitive landscape.',
    icon: 'Search',
    color: 'blue',
  },
  {
    id: '2',
    step: 2,
    title: 'Planning',
    description:
      'We map out the sitemap, define the tech stack, set clear milestones, and deliver a detailed project proposal.',
    icon: 'FileText',
    color: 'indigo',
  },
  {
    id: '3',
    step: 3,
    title: 'Design',
    description:
      'Our designers create stunning wireframes and high-fidelity mockups aligned with your brand identity.',
    icon: 'Palette',
    color: 'violet',
  },
  {
    id: '4',
    step: 4,
    title: 'Development',
    description:
      'We build your website using clean, scalable code with performance and accessibility as top priorities.',
    icon: 'Code2',
    color: 'sky',
  },
  {
    id: '5',
    step: 5,
    title: 'Testing',
    description:
      'Rigorous cross-browser testing, speed audits, and quality assurance ensure a flawless user experience.',
    icon: 'TestTube',
    color: 'cyan',
  },
  {
    id: '6',
    step: 6,
    title: 'Launch',
    description:
      'We deploy your website, configure DNS, set up analytics, and ensure everything goes live smoothly.',
    icon: 'Rocket',
    color: 'emerald',
  },
  {
    id: '7',
    step: 7,
    title: 'Support',
    description:
      'Ongoing maintenance, updates, and dedicated support keep your website fast, secure, and up-to-date.',
    icon: 'HeartHandshake',
    color: 'green',
  },
]
