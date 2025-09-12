/**
 * Navigation Utilities
 * 
 * Helper functions for navigation and smooth scrolling across the application.
 * Handles routing to home page sections from any page.
 */

/**
 * Scrolls to a specific section on the home page
 * If not on home page, navigates to home first then scrolls
 * @param sectionId - The ID of the section to scroll to
 * @param navigate - React Router navigate function (optional)
 */
export function scrollToSection(sectionId: string, navigate?: (path: string) => void) {
  // If we're not on the home page and navigate function is provided
  if (window.location.pathname !== '/' && navigate) {
    // Navigate to home page first
    navigate('/');
    // Wait for navigation to complete, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    // We're on home page, scroll directly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

/**
 * Scrolls to contact section with special handling for quote form
 * @param navigate - React Router navigate function (optional)
 */
export function scrollToContact(navigate?: (path: string) => void) {
  if (window.location.pathname !== '/' && navigate) {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

/**
 * Scrolls to services section
 * @param navigate - React Router navigate function (optional)
 */
export function scrollToServices(navigate?: (path: string) => void) {
  scrollToSection('services', navigate);
}

/**
 * Gets current page name for navigation highlighting
 */
export function getCurrentPageName(): string {
  const pathname = window.location.pathname;
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/insights')) return 'insights';
  return 'home';
}