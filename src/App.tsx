
import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Calendar,
  School,
  Database,
  Smartphone,
  Globe,
  Server
} from 'lucide-react'

type Project = {
  id: number
  titre: string
  type: 'personnel' | 'scolaire'
  techno: string[]
  resume: string
  description: string
  github: string
  lien?: string
}

// J'ai ajouté 5 nouveaux projets fictifs cohérents avec un profil ETNA/Reconversion
const initialProjects: Project[] = [
  {
    id: 1,
    titre: 'Portfolio React – ETNA',
    type: 'personnel',
    techno: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    resume: "Un portfolio immersif pour présenter mon parcours de reconversion.",
    description:
      "Ce portfolio met en avant ma reconversion depuis l'hôtellerie-restauration vers le développement d'applications. Il illustre ma capacité à créer des interfaces modernes, accessibles et responsive tout en racontant une histoire cohérente autour de mon profil.",
    github: 'https://github.com/ton-github/portfolio',
  },
  {
    id: 2,
    titre: 'API Gestion de Stock',
    type: 'scolaire',
    techno: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    resume: "Backend complet pour une application de gestion d'inventaire.",
    description:
      "Développement d'une API RESTful sécurisée permettant la gestion CRUD de produits. Mise en place de l'authentification JWT, validation des données avec Zod et conteneurisation de l'environnement de développement avec Docker.",
    github: 'https://github.com/ton-github/api-stock',
  },
  {
    id: 3,
    titre: 'Task Manager Mobile',
    type: 'personnel',
    techno: ['React Native', 'Expo', 'Firebase'],
    resume: "Application mobile de gestion de tâches quotidiennes.",
    description:
      "Création d'une application mobile cross-platform (iOS/Android) pour gérer la productivité. Utilisation de Firebase pour le temps réel et l'authentification. L'accent a été mis sur l'expérience utilisateur (UX) mobile.",
    github: 'https://github.com/ton-github/task-mobile',
  },
  {
    id: 4,
    titre: 'Dashboard E-commerce',
    type: 'scolaire',
    techno: ['Next.js', 'Prisma', 'PostgreSQL', 'Recharts'],
    resume: "Tableau de bord administrateur avec visualisation de données.",
    description:
      "Projet fullstack visant à créer un dashboard pour visualiser les ventes d'une boutique. Intégration de graphiques dynamiques, gestion des commandes et connexion à une base de données relationnelle via Prisma.",
    github: 'https://github.com/ton-github/dashboard',
  },
  {
    id: 5,
    titre: 'Clone Netflix (Front)',
    type: 'personnel',
    techno: ['React', 'Sass', 'TMDB API'],
    resume: "Reproduction de l'interface Netflix avec consommation d'API externe.",
    description:
      "Challenge d'intégration front-end. Utilisation de l'API The Movie Database pour récupérer les films populaires, gestion du scroll horizontal et lecture de bandes-annonces. Focus sur la fidélité visuelle et les animations CSS.",
    github: 'https://github.com/ton-github/netflix-clone',
  },
  {
    id: 6,
    titre: 'Site Vitrine Restaurant',
    type: 'personnel',
    techno: ['HTML5', 'CSS3', 'JavaScript Vanilla'],
    resume: "Site web statique optimisé SEO pour un restaurant local.",
    description:
      "Retour aux sources avec un site sans framework pour maîtriser le DOM. Intégration d'un formulaire de réservation, galerie photo responsive et optimisation des performances (Lighthouse score 100%). Clin d'œil à mon ancien métier.",
    github: 'https://github.com/ton-github/restaurant-site',
    lien: 'https://restaurant-demo.com'
  },
]

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

function App() {
  const projects = initialProjects
  const [selectedProject, setSelectedProject] = useState<Project | null>(initialProjects[0] ?? null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-purple-500/30">
      {/* Background gradient animé */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-purple-950/30 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale }}
        className="section-padding flex min-h-screen flex-col items-center justify-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
            En recherche d'alternance
          </motion.div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-white">De Koninck</span>{' '}
            <span className="gradient-text">Kévin</span>
          </h1>

          <p className="text-xl text-slate-300 md:text-2xl">
            Concepteur Développeur d'Applications
          </p>

          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            23 ans · En reconversion professionnelle · Bachelor CDA à l'ETNA · Recherche d'alternance
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a
              href="mailto:ton.email@exemple.com"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/50 transition hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60"
            >
              <Mail className="h-5 w-5" />
              Me contacter
            </a>
            <a
              href="https://github.com/ton-github"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-block"
            >
              <ArrowRight className="h-6 w-6 rotate-90 text-purple-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Section À propos */}
      <Section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="gradient-text">À propos</span>
            </h2>
            <div className="h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold">
                <Briefcase className="h-6 w-6 text-purple-400" />
                Mon parcours
              </h3>
              <p className="mb-4 text-slate-300 leading-relaxed">
                Après 5 ans dans l'hôtellerie-restauration où j'ai développé des compétences en relation client,
                gestion du stress et travail en équipe, je me suis lancé dans une reconversion professionnelle vers le
                développement d'applications.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Aujourd'hui en Bachelor{' '}
                <span className="font-semibold text-purple-300">Concepteur Développeur d'Applications</span> à l'ETNA
                d'Ivry-sur-Seine, je recherche une alternance pour approfondir mes compétences et poursuivre ensuite
                vers un Master dans le même domaine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="mb-4 flex items-center gap-3 text-2xl font-semibold">
                <School className="h-6 w-6 text-pink-400" />
                Pédagogie ETNA
              </h3>
              <p className="mb-4 text-slate-300 leading-relaxed">
                La pédagogie de l'ETNA est une <span className="font-semibold text-pink-300">pédagogie par projet</span>
                . Nous avons quelques cours pour comprendre la stack et l'utiliser légèrement, puis nous avons un projet
                à réaliser avec celle-ci.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Cette approche développe la rigueur, la curiosité et la capacité à apprendre rapidement en situation
                réelle.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 glass-card rounded-3xl p-8"
          >
            <h3 className="mb-6 text-xl font-semibold">Soft skills issus de l'hôtellerie</h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {['Relation client', 'Gestion du stress', 'Respect des délais', 'Travail en équipe', 'Sens du détail', 'Responsabilisation'].map(
                (skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-purple-500/20 bg-purple-500/5 px-4 py-3 text-center text-sm font-medium text-purple-200"
                  >
                    {skill}
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Section Expériences */}
      <Section className="section-padding bg-white/5">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="gradient-text">Expériences</span>
            </h2>
            <div className="h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
          </motion.div>

          <div className="space-y-6">
            {[
              {
                entreprise: 'La Villa Marinette',
                lieu: 'Gazeran',
                periode: '2020 - 2022',
                poste: 'Alternance cuisine',
                description: "2 ans d'alternance en cuisine dans le cadre du BTS MHR option cuisine : rigueur, cadence, organisation.",
                icon: Briefcase,
              },
              {
                entreprise: 'Hôtel Restaurant du Tribunal',
                lieu: 'Mortagne-au-Perche',
                periode: '2022 - 2024',
                poste: 'Alternance + Employé polyvalent',
                description:
                  "1 an en alternance (Bachelor Responsable d'établissement touristique) puis 2 ans comme employé polyvalent, dont 10 mois principalement à la réception avec des responsabilités accrues.",
                icon: Briefcase,
              },
            ].map((exp, index) => (
              <motion.div
                key={exp.entreprise}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group rounded-3xl p-6 transition hover:border-purple-500/30 md:p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <exp.icon className="h-5 w-5 text-purple-400" />
                      <h3 className="text-xl font-semibold">{exp.entreprise}</h3>
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.lieu}</span>
                      <span>·</span>
                      <Calendar className="h-4 w-4" />
                      <span>{exp.periode}</span>
                    </div>
                    <p className="mb-2 font-medium text-purple-300">{exp.poste}</p>
                    <p className="text-slate-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Formation */}
      <Section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="gradient-text">Formation</span>
            </h2>
            <div className="h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                diplome: 'Bachelor Concepteur Développeur d\'Applications',
                ecole: 'ETNA Ivry-sur-Seine',
                periode: '2025 - 2026',
                icon: GraduationCap,
                color: 'purple',
              },
              {
                diplome: 'Bachelor Responsable d\'établissement touristique',
                ecole: 'CFA Trajectoire, Guyancourt',
                periode: '2022 - 2023',
                icon: GraduationCap,
                color: 'pink',
              },
              {
                diplome: 'BTS MHR option B (cuisine)',
                ecole: 'Lycée d\'hôtellerie et de tourisme, Guyancourt',
                periode: '2020 - 2022',
                icon: GraduationCap,
                color: 'blue',
              },
              {
                diplome: 'Bac Pro Cuisine',
                ecole: 'Lycée d\'hôtellerie et de tourisme, Guyancourt',
                periode: '2017 - 2020',
                icon: GraduationCap,
                color: 'purple',
              },
            ].map((formation, index) => (
              <motion.div
                key={formation.diplome}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 transition hover:border-purple-500/30"
              >
                <div className="mb-3 flex items-center gap-3">
                  <formation.icon className={`h-6 w-6 ${
                    formation.color === 'purple' ? 'text-purple-400' :
                    formation.color === 'pink' ? 'text-pink-400' :
                    'text-blue-400'
                  }`} />
                  <h3 className="text-lg font-semibold">{formation.diplome}</h3>
                </div>
                <p className="mb-2 text-sm text-slate-400">{formation.ecole}</p>
                <p className="text-sm font-medium text-purple-300">{formation.periode}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Projets */}
      <Section className="section-padding bg-white/5">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              <span className="gradient-text">Projets</span>
            </h2>
            <div className="h-1 w-24 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Tous les projets</h3>
            
            {/* Grille de Projets optimisée */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((projet, index) => {
                const isSelected = selectedProject?.id === projet.id
                return (
                  <motion.div
                    key={projet.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedProject(projet)}
                    className={`group glass-card cursor-pointer flex flex-col justify-between rounded-3xl p-6 transition duration-300 ${
                      isSelected ? 'gradient-border border-2 bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <div>
                      <div className="mb-4 flex items-start justify-between">
                        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${
                          projet.type === 'scolaire' 
                            ? 'border-purple-500/30 bg-purple-500/10 text-purple-300'
                            : 'border-pink-500/30 bg-pink-500/10 text-pink-300'
                        }`}>
                          {projet.type === 'scolaire' ? 'École' : 'Perso'}
                        </span>
                        {/* Icone dynamique selon les technos principales (simplifié ici avec Code) */}
                        <Code className="h-5 w-5 text-slate-400 transition group-hover:text-purple-400" />
                      </div>
                      <h4 className="mb-2 text-xl font-semibold group-hover:text-purple-300 transition-colors">{projet.titre}</h4>
                      <p className="mb-4 line-clamp-2 text-sm text-slate-400">{projet.resume}</p>
                      
                      {projet.techno.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {projet.techno.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-300 border border-white/5"
                            >
                              {t}
                            </span>
                          ))}
                          {projet.techno.length > 3 && (
                            <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] text-slate-300 border border-white/5">
                              +{projet.techno.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    
                    <div className={`mt-auto flex items-center gap-2 text-sm font-medium transition ${
                      isSelected ? 'text-purple-300' : 'text-slate-400 group-hover:text-white'
                    }`}>
                      <span>Voir les détails</span>
                      <ArrowRight className={`h-4 w-4 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Détails du projet sélectionné */}
            {selectedProject && (
              <motion.div
                key={selectedProject.id} // Clé ajoutée pour relancer l'animation au changement
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-12 glass-card rounded-3xl p-8 border border-white/10 bg-black/20"
              >
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className={`mb-2 inline-block rounded-full border px-3 py-1 text-xs font-medium ${
                      selectedProject.type === 'scolaire' 
                        ? 'border-purple-500/30 bg-purple-500/10 text-purple-300'
                        : 'border-pink-500/30 bg-pink-500/10 text-pink-300'
                    }`}>
                      {selectedProject.type === 'scolaire' ? 'Projet d\'école' : 'Projet personnel'}
                    </span>
                    <h3 className="mt-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                      {selectedProject.titre}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                    {selectedProject.lien && (
                      <a
                        href={selectedProject.lien}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-4 py-2 font-semibold text-white shadow-lg shadow-purple-500/50 transition hover:scale-105"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Voir la démo
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">À propos du projet</h4>
                    <p className="text-lg text-slate-300 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/5 h-fit">
                    <p className="mb-4 font-semibold text-slate-200 flex items-center gap-2">
                      <Server className="w-4 h-4 text-purple-400"/> Stack technique
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techno.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="section-padding border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © 2025 De Koninck Kévin · Portfolio développé avec React, TypeScript et TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

