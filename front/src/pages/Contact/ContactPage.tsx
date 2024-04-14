import AdditionalClassName from 'src/types/AdditionalClassName';

export interface ContactPageProps extends AdditionalClassName {}

export default function ContactPage({ className }: ContactPageProps) {
  return <div className={`contact-view ${className ?? ''}`}>Contact</div>;
}
