import Hero from './Hero';
import FinalCTA from './FinalCTA';
import Testimonials from './Testimonials';
import FeatureShowcase from './FeatureShowCase';
import Proof from './Proof';

interface HomePageProps {
    onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
    return (
        <div className="pt-20">
            <Hero onNavigate={onNavigate} />
            <Proof onNavigate={onNavigate} />
            <FeatureShowcase onNavigate={onNavigate} />
            <Testimonials onNavigate={onNavigate} />
            <FinalCTA onNavigate={onNavigate} />
        </div>
    );
}
