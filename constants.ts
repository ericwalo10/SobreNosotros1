import { Program, Testimonial, Feature } from './types';

export const PROGRAMS: Program[] = [
  { id: '1', title: 'Análisis fundamental de criptomonedas', description: 'Aprende a valorar proyectos reales.' },
  { id: '2', title: 'Mercados financieros', description: 'Comprensión global de la economía.' },
  { id: '3', title: 'Trading', description: 'Niveles inicial, intermedio y avanzado.' },
  { id: '4', title: 'Análisis técnico', description: 'Lectura de gráficos y patrones.' },
  { id: '5', title: 'Temáticas complementarias', description: 'DeFi, finanzas personales y educación financiera integral.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', text: 'Pasé de no entender nada de criptomonedas o trading a poder leer gráficos, analizar proyectos y comprender mejor los mercados.', author: 'Estudiante de Finanflix' },
  { id: 't2', text: 'Ahora manejo mis finanzas personales con más claridad y puedo organizar mis objetivos financieros.', author: 'Estudiante de Finanflix' },
  { id: 't3', text: 'La forma de explicar es clara y sencilla, equilibran teoría, práctica y gestión del riesgo.', author: 'Estudiante de Finanflix' },
  { id: 't4', text: 'El acompañamiento del equipo y la comunidad es fundamental; puedo preguntar y aprender de las experiencias de otros.', author: 'Estudiante de Finanflix' },
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    id: 1,
    title: 'Programas especializados y progresivos',
    description: 'Diseñados para aprender desde cero hasta niveles avanzados.',
  },
  {
    id: 2,
    title: 'Educación financiera real',
    description: 'Enfoque en criterio propio y gestión del riesgo, sin promesas de ganancias rápidas.',
  },
  {
    id: 3,
    title: 'Soporte constante',
    description: 'Clases en vivo, soporte docente y mentoría continua.',
  },
  {
    id: 4,
    title: 'Comunidad sólida',
    description: 'Un entorno que permite interactuar, preguntar y compartir avances.',
  }
];