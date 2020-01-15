import anime from 'animejs';
import config from '~/js/utils/animations/config';

export function iniAnimations () {
    const easing = config.easing;
    const elementsHeader = document.querySelectorAll('[data-animate="main-header"]');
    const elementsTitles = document.querySelectorAll('[data-animate="listings-title"]');
    const elementsNetworkListings = document.querySelectorAll('[data-animate="listings-network-links"]');
    const elementsJobListings = document.querySelectorAll('[data-animate="listings-jobs"]');
    const elementsSkillsListings = document.querySelectorAll('[data-animate="listings-skills"]');
    // Header animation
    anime.set(elementsHeader, {
        opacity: 0,
        translateY: -50,
    });
    anime({
        targets: elementsHeader,
        opacity: 1,
        translateY: 0,
        easing,
        delay: anime.stagger(600),
        duration: 1500,
    });
    // Titles animation
    anime({
        targets: elementsTitles,
        opacity: 1,
        easing,
        delay: anime.stagger(600),
        duration: 1500,
    });
    // Skills animation
    let skillsDelay = 800;
    const observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) {
            skillsDelay = 0;
            return;
        }
        observer.disconnect();
        anime({
            targets: elementsSkillsListings,
            opacity: 1,
            translateX: 0,
            easing,
            delay: anime.stagger(600, {start: skillsDelay}),
            duration: 1000,
        });
    });
    observer.observe(elementsSkillsListings[0]);
    // Networks animation
    anime.set(elementsNetworkListings, {
        opacity: 0,
        translateX: 50,
    });
    anime({
        targets: elementsNetworkListings,
        opacity: 1,
        translateX: 0,
        easing,
        delay: anime.stagger(600, {start: 400}),
        duration: 1000,
    });
    // Job listings animation
    anime.set(elementsJobListings, {
        opacity: 0,
        translateY: 100,
    });
    anime({
        targets: elementsJobListings,
        opacity: 1,
        translateY: 0,
        easing,
        delay: 200,
        duration: 1000,
    });
    anime.set(elementsSkillsListings, {
        opacity: 0,
        translateX: 100,
    });
}
