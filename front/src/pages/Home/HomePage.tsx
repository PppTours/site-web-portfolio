import AdditionalClassName from 'src/types/AdditionalClassName';

export interface HomePageProps extends AdditionalClassName {}

export default function HomePage({ className }: HomePageProps) {
  return <div className={`home-view ${className ?? ''}`}>Accueil</div>;
}
