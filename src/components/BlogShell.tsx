import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import logo from '@/assets/virginia-notary-logo.webp.asset.json';
import logoDark from '@/assets/virginia-notary-logo-dark.webp.asset.json';
export function BlogShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background text-foreground overflow-x-clip flex flex-col">
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <nav aria-label="Blog navigation" className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link to="/" aria-label="Virginia Notary home"><img src={logo.url} alt="Virginia Notary: RON & Mobile services" width={600} height={200} loading="eager" className="h-14 sm:h-16 w-auto max-w-[55vw] object-contain" /></Link>
        <Link to="/book"><Button className="bg-brand-action text-primary-foreground hover:bg-brand-action-end rounded-full px-5">Book Now</Button></Link>
      </nav>
    </header>
    <main className="flex-1">{children}</main>
    <footer className="bg-primary text-primary-foreground py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <Link to="/" aria-label="Virginia Notary home"><img src={logoDark.url} alt="Virginia Notary" width={600} height={200} loading="lazy" className="h-11 w-auto" /></Link>
        <p>© {new Date().getFullYear()} Virginia Notary. Powered by <a className="text-footer-link" href="https://opensked.com" target="_blank" rel="noopener noreferrer">OpenSked℠</a></p>
        <div className="flex flex-wrap justify-center gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/cookie-policy">Cookie Policy</Link></div>
      </div>
    </footer>
  </div>;
}
