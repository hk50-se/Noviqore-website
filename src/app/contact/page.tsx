import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { buildBreadcrumbSchema, buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/constants';
import { PageHero } from '@/components/ui/PageHero';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Book a free consultation with Noviqore to discuss custom software development, AI solutions, backend systems, and cloud architecture projects.',
  path: '/contact',
  keywords: ['software house in Lahore', 'AI solutions company', 'custom software development']
});

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' }
  ]);

  return (
    <>
      <PageHero
        eyebrow="Contact Noviqore"
        title="Let’s plan your software or AI project"
        description="Share your goals, timeline, and technical requirements. Noviqore will respond with a clear next-step plan."
      />

      <section className="section-space">
        <div className="container-shell grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Card className="border-white/12 bg-slate-950/65 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-white">Project Inquiry Form</h2>
            <p className="mt-2 text-sm text-slate-300">
              Tell us what you are building and where you need engineering support.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>

          <div className="grid gap-4">
            <Card className="border-white/12 bg-slate-950/65">
              <h3 className="text-lg font-semibold text-white">Direct Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-300" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-300" />
                  <span>{siteConfig.location}</span>
                </li>
                <li className="inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-emerald-300" />
                  <span>Consultation scheduling available after initial review</span>
                </li>
              </ul>
            </Card>

            <Card className="border-white/12 bg-slate-950/65">
              <h3 className="text-lg font-semibold text-white">Response Expectations</h3>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Initial response with project-fit feedback</li>
                <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Technical consultation scheduling</li>
                <li className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-2">Proposed scope, milestones, and delivery approach</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}




