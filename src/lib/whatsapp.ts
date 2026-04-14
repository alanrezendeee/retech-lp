import { WHATSAPP_NUMBER } from 'astro:env/server';

type CtaSource =
  | 'navbar'
  | 'hero'
  | 'sobre'
  | 'servicos'
  | 'produtos'
  | 'tecnologias'
  | 'cta-final'
  | 'footer';

const messages: Record<CtaSource, string> = {
  navbar:
    'Olá! Encontrei a The Retech pelo site e gostaria de conversar sobre um projeto.',
  hero:
    'Olá! Vi a proposta da The Retech de transformar ideias em software escalável e quero saber mais.',
  sobre:
    'Olá! Li sobre a The Retech e o trabalho do Alan. Gostaria de entender como vocês podem ajudar minha empresa.',
  servicos:
    'Olá! Tenho interesse em um dos serviços da The Retech e gostaria de conversar com um especialista.',
  produtos:
    'Olá! Vi os produtos da The Retech no site e gostaria de saber mais.',
  tecnologias:
    'Olá! Fiquei interessado na stack técnica da The Retech. Gostaria de conversar sobre um projeto.',
  'cta-final':
    'Olá! Estou pronto para escalar minha empresa com tecnologia. Quero conversar com a equipe da The Retech.',
  footer:
    'Olá! Vi a The Retech no site e gostaria de falar com a equipe.',
};

export function waUrl(source: CtaSource): string {
  const msg = messages[source];
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
