import { NoviqoreExperience } from '@/components/home/NoviqoreExperience';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Build Smarter Software with Noviqore',
  description:
    'Noviqore is a premium software and AI solutions company delivering custom software development, backend engineering, AI automation, and cloud-native systems.',
  path: '/'
});

export default function HomePage() {
  return <NoviqoreExperience />;
}




