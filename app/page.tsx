'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-b from-copper/10 to-beige"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <Image
                src="/images/Logo neu2_zugesch.jpg"
                alt="Nathalie Stocker Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-brown mb-6 text-balance">
            Raum für Reflexion und Entwicklung
          </h1>

          <p className="text-xl md:text-2xl text-brown-light mb-12 font-light">
            Supervision • Coaching • Organisationsberatung
          </p>

          <a
            href="#kontakt"
            className="inline-block px-8 py-4 bg-copper text-beige rounded-full hover:bg-brown transition-colors duration-300 font-medium"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Über mich / Haltung Section */}
      <section id="ueber-mich" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-8 text-center">
            Mein Beratungsansatz
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-brown-light leading-relaxed mb-8 text-center">
              Ich begleite Menschen, Teams und Organisationen in Entwicklungs- und Veränderungsprozessen.
              Dazu biete ich einen geschützten Raum für Reflexion und Entwicklung.
            </p>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl text-brown mb-4">Schwerpunkte</h3>
                <ul className="space-y-3 text-brown-light">
                  <li className="flex items-start">
                    <span className="text-copper mr-2">•</span>
                    <span>Gestaltung von erfolgreichen Kommunikations- und Kooperationsprozessen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-copper mr-2">•</span>
                    <span>Umgang mit Veränderung, Krisen und Konflikten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-copper mr-2">•</span>
                    <span>Entwicklung von Führungskompetenzen, Motivation und Gesundheit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-copper mr-2">•</span>
                    <span>Nachhaltige Personal-, Team- und Organisationsentwicklung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-copper/5 p-8 rounded-lg border border-copper/20">
                <h3 className="font-serif text-2xl text-brown mb-4">Meine Haltung</h3>
                <p className="text-brown-light leading-relaxed">
                  Meine Arbeit beruht auf einer systemischen und ressourcenorientierten Haltung,
                  ergänzt durch die Prinzipien der Neuen Autorität nach Haim Omer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebote Section */}
      <section id="angebote" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-16 text-center">
            Meine Angebote
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Einzelsupervision */}
            <div className="bg-beige p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-brown mb-4">
                Einzelsupervision & Coaching
              </h3>
              <ul className="space-y-2 text-brown-light">
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Reflexion beruflicher Rollen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Umgang mit Veränderung, Krisen und Konflikten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Ziel- und Visionsarbeit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Kommunikation, Beziehung, Netzwerk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Gesundheit und Selbstwirksamkeit</span>
                </li>
              </ul>
            </div>

            {/* Führungskräfte */}
            <div className="bg-beige p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-brown mb-4">
                Führungskräfte-Supervision & Coaching
              </h3>
              <ul className="space-y-2 text-brown-light">
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Entwicklung von Führungskompetenzen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Rollenklärung und -bewusstsein</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Systemische Präsenz und Selbstkontrolle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Werte und Vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Netzwerkbildung</span>
                </li>
              </ul>
            </div>

            {/* Team-Supervision */}
            <div className="bg-beige p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-brown mb-4">
                Team-Supervision & Coaching
              </h3>
              <ul className="space-y-2 text-brown-light">
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Teamentwicklung und Zusammenarbeit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Umgang mit Konflikten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Förderung von Teamkohäsion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Kommunikation und Feedback-Kultur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Erfahrungsorientierte Methoden</span>
                </li>
              </ul>
            </div>

            {/* Organisationsberatung */}
            <div className="bg-beige p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-serif text-2xl text-brown mb-4">
                Organisationsberatung
              </h3>
              <ul className="space-y-2 text-brown-light">
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Personal-, Team- und Organisationsentwicklung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Entwicklung von Führungskultur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Klärung von Beziehungen zu Kund*innen und Mitarbeiter*innen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-copper mr-2">→</span>
                  <span>Vision und Zielarbeit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methoden Section */}
      <section id="methoden" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-16 text-center">
            Methoden
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-copper rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Systemisch & Lösungsorientiert</h3>
              <p className="text-brown-light text-sm">Ganzheitliche Betrachtung von Zusammenhängen</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-copper rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Neue Autorität</h3>
              <p className="text-brown-light text-sm">Systemische Präsenz nach Haim Omer</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-copper rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Aufstellungsarbeit</h3>
              <p className="text-brown-light text-sm">Visualisierung komplexer Systeme</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-copper rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Teamtraining</h3>
              <p className="text-brown-light text-sm">Erfahrungsorientierte Methoden</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-copper rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Fallberatung</h3>
              <p className="text-brown-light text-sm">Strukturierte Reflexion von Fällen</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-copper/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-copper rounded-full"></div>
              </div>
              <h3 className="font-serif text-xl text-brown mb-2">Wertearbeit</h3>
              <p className="text-brown-light text-sm">Klärung persönlicher und organisationaler Werte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise Section */}
      <section id="arbeitsweise" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-brown mb-12 text-center">
            Meine Arbeitsweise
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-copper/30 hidden md:block"></div>

            <div className="space-y-12">
              <div className="relative md:flex md:justify-end md:pr-12">
                <div className="bg-beige p-6 rounded-lg md:w-1/2 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-copper text-beige rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      1
                    </div>
                    <h3 className="font-serif text-xl text-brown">Auftragsklärung</h3>
                  </div>
                  <p className="text-brown-light">Gemeinsame Definition der Ziele und Erwartungen</p>
                </div>
              </div>

              <div className="relative md:flex md:pl-12">
                <div className="bg-beige p-6 rounded-lg md:w-1/2 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-copper text-beige rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      2
                    </div>
                    <h3 className="font-serif text-xl text-brown">Situations- und Ressourcenanalyse</h3>
                  </div>
                  <p className="text-brown-light">Erfassung der aktuellen Situation und vorhandener Stärken</p>
                </div>
              </div>

              <div className="relative md:flex md:justify-end md:pr-12">
                <div className="bg-beige p-6 rounded-lg md:w-1/2 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-copper text-beige rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      3
                    </div>
                    <h3 className="font-serif text-xl text-brown">Begleitung</h3>
                  </div>
                  <p className="text-brown-light">Prozessbegleitung mit passenden Methoden und Interventionen</p>
                </div>
              </div>

              <div className="relative md:flex md:pl-12">
                <div className="bg-beige p-6 rounded-lg md:w-1/2 shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-copper text-beige rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      4
                    </div>
                    <h3 className="font-serif text-xl text-brown">Evaluation</h3>
                  </div>
                  <p className="text-brown-light">Reflexion und Bewertung der Ergebnisse</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-copper/5 rounded-lg border border-copper/20">
            <p className="text-brown-light text-center mb-4">
              Als Supervisorin bso arbeite ich nach den Qualitätsstandards des Berufsverbandes.
            </p>
            <p className="text-brown-light text-center font-medium">
              Vertraulichkeit und Berufsethik sind selbstverständlich.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 px-4 bg-brown text-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Lassen Sie uns ins Gespräch kommen
          </h2>

          <p className="text-xl mb-12 text-beige/90">
            Vereinbaren Sie ein kostenloses Orientierungsgespräch
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-xl mb-2">Nathalie Stocker</h3>
              <p className="text-beige/80 text-sm">Supervisorin bso</p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-2">Telefon</h3>
              <a href="tel:+41775111249" className="text-copper hover:text-beige transition-colors">
                +41 77 511 12 49
              </a>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-2">E-Mail</h3>
              <a href="mailto:n.stocker@gmx.net" className="text-copper hover:text-beige transition-colors">
                n.stocker@gmx.net
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41775111249"
              className="inline-block px-8 py-4 bg-copper text-beige rounded-full hover:bg-beige hover:text-brown transition-colors duration-300 font-medium"
            >
              Anrufen
            </a>
            <a
              href="mailto:n.stocker@gmx.net"
              className="inline-block px-8 py-4 bg-transparent border-2 border-copper text-copper rounded-full hover:bg-copper hover:text-beige transition-colors duration-300 font-medium"
            >
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown-light text-beige py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-beige/80 text-sm">
            © {new Date().getFullYear()} Nathalie Stocker | Supervision & Coaching
          </p>
        </div>
      </footer>
    </main>
  )
}
