import Link from 'next/link';

const footerNavigation = {
  explore: [
    { name: 'Why Morocco', href: '/benefits' },
    { name: 'Visa Requirements', href: '/visa' },
    { name: 'Carte de Séjour', href: '/carte-de-sejour' },
  ],
  services: [
    { name: 'Our Services', href: '/services' },
    { name: 'Free Consultation', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-atlas-900 text-sand-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">New Life Morocco</h3>
            <p className="text-sand-300 max-w-md">
              Helping Americans discover the beauty and opportunity of life in Morocco.
              Expert guidance for your relocation journey.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerNavigation.explore.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sand-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sand-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-atlas-800">
          <p className="text-sand-400 text-sm text-center">
            &copy; {new Date().getFullYear()} New Life Morocco. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
