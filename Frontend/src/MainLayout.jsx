import {useState} from 'react';
import {Navbar} from './common/components/navbar';
import {AboutSection} from './common/components/aboutSection';
import {ProjectSection} from './common/components/project';
import {ContactSection} from './common/components/contact';
import {HeroSection} from './common/components/heroSection';
export default function MainLayout() {
    const [activeSection, setActiveSection] = useState('Home');

    console.log("Active section:", activeSection);

    return (
        <>
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
            <main>
                {activeSection === 'Home' && <HeroSection />}
                {activeSection === 'About' && <AboutSection />}
                {activeSection === 'Projects' && <ProjectSection />}
                {activeSection === 'Contact' && <ContactSection />}
            </main>
        </>
    );
}
