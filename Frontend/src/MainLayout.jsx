import { useEffect, useState } from 'react';
import { Navbar } from './common/components/navbar';
import { AboutSection } from './common/components/aboutSection';
import { ProjectSection } from './common/components/project';
import { ContactSection } from './common/components/contact';
import { HeroSection } from './common/components/heroSection';

export default function MainLayout() {
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = ['home', 'about', 'projects', 'contact'];
            let found = false;
            sectionIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120 && rect.bottom > 120) {
                        setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
                        found = true;
                    }
                }
            });
            if (!found) setActiveSection('Home');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar activeSection={activeSection} />
            <div style={{ marginTop: '80px' }}>
                <div id="home" style={{scrollMarginTop: 90}}><HeroSection /></div>
                <div id="about" style={{scrollMarginTop : 90, background : "#fafafa"}}><AboutSection /></div>
                <div id="projects" style={{scrollMarginTop: 90}}><ProjectSection /></div>
                <div id="contact" style={{scrollMarginTop: 90,  background : "#fafafa"}}><ContactSection /></div>
            </div>
        </>
    );
}