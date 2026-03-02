const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-heading font-bold text-xl text-primary-foreground">
              Easy<span className="text-secondary">Events</span> Group
            </span>
            <p className="text-primary-foreground/50 text-sm mt-1">
              Genève · Suisse romande
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#services" className="text-primary-foreground/60 hover:text-secondary transition-colors">Services</a>
            <a href="#targets" className="text-primary-foreground/60 hover:text-secondary transition-colors">Pour qui ?</a>
            <a href="#showcase" className="text-primary-foreground/60 hover:text-secondary transition-colors">Réalisations</a>
            <a href="#cta-final" className="text-primary-foreground/60 hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} EasyEvents Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
