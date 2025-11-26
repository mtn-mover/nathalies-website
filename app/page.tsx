'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  IconEinzel,
  IconFuehrung,
  IconTeam,
  IconOrganisation,
  IconSystemisch,
  IconAutorita,
  IconAufstellung,
  IconFallberatung,
  IconWerte,
  IconTeamtraining
} from '@/components/Icons'

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
        <div
          className="absolute inset-0 bg-gradient-to-b from-sand-light/30 to-white"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <Image
                src="/images/Logo neu.jpg"
                alt="Nathalie Stocker Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-gray-900 mb-6 text-balance">
            Raum für Reflexion und Entwicklung
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-12 font-light">
            Supervision • Coaching • Organisationsberatung
          </p>

          <a
            href="#kontakt"
            className="inline-block px-8 py-4 bg-sand text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 font-medium"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Über mich / Haltung Section */}
      <section id="ueber-mich" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8 text-center">
            Mein Beratungsansatz
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-500 leading-relaxed mb-12 text-center">
              Ich begleite Menschen, Teams und Organisationen in Entwicklungs- und Veränderungsprozessen.
              Dazu biete ich einen geschützten Raum für Reflexion und Entwicklung.
            </p>

            {/* Profile Image */}
            <div className="mb-16 flex justify-center">
              <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/nathalie1.png"
                  alt="Nathalie Stocker in einem Coaching-Gespräch"
                  width={800}
                  height={533}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Schwerpunkte</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start">
                    <span className="text-sand mr-2">•</span>
                    <span>Gestaltung von erfolgreichen Kommunikations- und Kooperationsprozessen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sand mr-2">•</span>
                    <span>Umgang mit Veränderung, Krisen und Konflikten</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sand mr-2">•</span>
                    <span>Entwicklung von Führungskompetenzen, Motivation und Gesundheit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sand mr-2">•</span>
                    <span>Nachhaltige Personal-, Team- und Organisationsentwicklung</span>
                  </li>
                </ul>
              </div>

              <div className="bg-sand-light/50 p-8 rounded-lg border border-sand/30">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Meine Haltung</h3>
                <p className="text-gray-500 leading-relaxed">
                  Meine Arbeit beruht auf einer systemischen und ressourcenorientierten Haltung,
                  ergänzt durch die Prinzipien der Neuen Autorität nach Haim Omer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebote Section */}
      <section id="angebote" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-16 text-center">
            Meine Angebote
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Einzelsupervision */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-gray-900 mr-4">
                  <IconEinzel className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Einzelsupervision & Coaching
                </h3>
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Reflexion beruflicher Rollen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Umgang mit Veränderung, Krisen und Konflikten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Ziel- und Visionsarbeit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Kommunikation, Beziehung, Netzwerk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Gesundheit und Selbstwirksamkeit</span>
                </li>
              </ul>
            </div>

            {/* Führungskräfte */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-gray-900 mr-4">
                  <IconFuehrung className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Führungskräfte-Supervision & Coaching
                </h3>
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Entwicklung von Führungskompetenzen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Rollenklärung und -bewusstsein</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Systemische Präsenz und Selbstkontrolle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Werte und Vision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Netzwerkbildung</span>
                </li>
              </ul>
            </div>

            {/* Team-Supervision */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-gray-900 mr-4">
                  <IconTeam className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Team-Supervision & Coaching
                </h3>
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Teamentwicklung und Zusammenarbeit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Umgang mit Konflikten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Förderung von Teamkohäsion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Kommunikation und Feedback-Kultur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Erfahrungsorientierte Methoden</span>
                </li>
              </ul>
            </div>

            {/* Organisationsberatung */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-gray-900 mr-4">
                  <IconOrganisation className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900">
                  Organisationsberatung
                </h3>
              </div>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Personal-, Team- und Organisationsentwicklung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Entwicklung von Führungskultur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Klärung von Beziehungen zu Kund*innen und Mitarbeiter*innen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand mr-2">→</span>
                  <span>Vision und Zielarbeit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methoden Section */}
      <section id="methoden" className="py-24 px-4 bg-sand-light/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-16 text-center">
            Methoden
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg">
              <div className="text-gray-900 flex justify-center mb-4">
                <IconSystemisch className="w-14 h-14" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Systemisch & Lösungsorientiert</h3>
              <p className="text-gray-500 text-sm">Ganzheitliche Betrachtung von Zusammenhängen</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg">
              <div className="text-gray-900 flex justify-center mb-4">
                <IconAutorita className="w-14 h-14" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Neue Autorität</h3>
              <p className="text-gray-500 text-sm">Systemische Präsenz nach Haim Omer</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg">
              <div className="text-gray-900 flex justify-center mb-4">
                <IconAufstellung className="w-14 h-14" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Aufstellungsarbeit</h3>
              <p className="text-gray-500 text-sm">Visualisierung komplexer Systeme</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg">
              <div className="text-gray-900 flex justify-center mb-4">
                <IconTeamtraining className="w-14 h-14" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Teamtraining</h3>
              <p className="text-gray-500 text-sm">Erfahrungsorientierte Methoden</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg">
              <div className="text-gray-900 flex justify-center mb-4">
                <IconFallberatung className="w-14 h-14" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Fallberatung</h3>
              <p className="text-gray-500 text-sm">Strukturierte Reflexion von Fällen</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg">
              <div className="text-gray-900 flex justify-center mb-4">
                <IconWerte className="w-14 h-14" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Wertearbeit</h3>
              <p className="text-gray-500 text-sm">Klärung persönlicher und organisationaler Werte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Arbeitsweise Section */}
      <section id="arbeitsweise" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-12 text-center">
            Meine Arbeitsweise
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

            <div className="space-y-12">
              <div className="relative md:flex md:justify-end md:pr-12">
                <div className="bg-gray-50 p-6 rounded-lg md:w-1/2">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-sand text-gray-900 rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      1
                    </div>
                    <h3 className="font-serif text-xl text-gray-900">Auftragsklärung</h3>
                  </div>
                  <p className="text-gray-500">Gemeinsame Definition der Ziele und Erwartungen</p>
                </div>
              </div>

              <div className="relative md:flex md:pl-12">
                <div className="bg-gray-50 p-6 rounded-lg md:w-1/2">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-sand text-gray-900 rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      2
                    </div>
                    <h3 className="font-serif text-xl text-gray-900">Situations- und Ressourcenanalyse</h3>
                  </div>
                  <p className="text-gray-500">Erfassung der aktuellen Situation und vorhandener Stärken</p>
                </div>
              </div>

              <div className="relative md:flex md:justify-end md:pr-12">
                <div className="bg-gray-50 p-6 rounded-lg md:w-1/2">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-sand text-gray-900 rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      3
                    </div>
                    <h3 className="font-serif text-xl text-gray-900">Begleitung</h3>
                  </div>
                  <p className="text-gray-500">Prozessbegleitung mit passenden Methoden und Interventionen</p>
                </div>
              </div>

              <div className="relative md:flex md:pl-12">
                <div className="bg-gray-50 p-6 rounded-lg md:w-1/2">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-sand text-gray-900 rounded-full flex items-center justify-center font-serif font-bold mr-3">
                      4
                    </div>
                    <h3 className="font-serif text-xl text-gray-900">Evaluation</h3>
                  </div>
                  <p className="text-gray-500">Reflexion und Bewertung der Ergebnisse</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-sand-light/50 rounded-lg border border-sand/30">
            <p className="text-gray-500 text-center mb-4">
              Als Supervisorin bso arbeite ich nach den Qualitätsstandards des Berufsverbandes.
            </p>
            <p className="text-gray-900 text-center font-medium">
              Vertraulichkeit und Berufsethik sind selbstverständlich.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Lassen Sie uns ins Gespräch kommen
          </h2>

          <p className="text-xl mb-12 text-gray-300">
            Vereinbaren Sie ein kostenloses Orientierungsgespräch
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-xl mb-2">Nathalie Stocker</h3>
              <p className="text-gray-400 text-sm">Supervisorin bso</p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-2">Telefon</h3>
              <button
                onClick={() => window.location.href = 'tel:' + ['+41', '77', '511', '12', '49'].join('')}
                className="text-sand hover:text-white transition-colors cursor-pointer"
              >
                +41 77 511 12 49
              </button>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-2">E-Mail</h3>
              <button
                onClick={() => window.location.href = ['mail', 'to:', 'n.', 'stocker', '@', 'gmx', '.net'].join('')}
                className="text-sand hover:text-white transition-colors cursor-pointer"
              >
                {'n.stocker'}
                <span style={{ display: 'none' }}>REMOVE</span>
                {'@'}
                <span style={{ display: 'none' }}>SPAM</span>
                {'gmx.net'}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = 'tel:' + ['+41', '77', '511', '12', '49'].join('')}
              className="inline-block px-8 py-4 bg-sand text-gray-900 rounded-full hover:bg-white transition-colors duration-300 font-medium cursor-pointer"
            >
              Anrufen
            </button>
            <button
              onClick={() => window.location.href = ['mail', 'to:', 'n.', 'stocker', '@', 'gmx', '.net'].join('')}
              className="inline-block px-8 py-4 bg-transparent border-2 border-sand text-sand rounded-full hover:bg-sand hover:text-gray-900 transition-colors duration-300 font-medium cursor-pointer"
            >
              E-Mail schreiben
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Nathalie Stocker | Supervision & Coaching
          </p>
        </div>
      </footer>
    </main>
  )
}
