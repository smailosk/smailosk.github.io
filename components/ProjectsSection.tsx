'use client'

import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBarChart2,
  FiExternalLink,
  FiFolder,
  FiGithub,
  FiHeart,
  FiMessageCircle,
  FiMonitor,
  FiShoppingCart,
  FiSmartphone,
  FiX,
} from 'react-icons/fi'
import { SiApple, SiFigma, SiGoogleplay } from 'react-icons/si'
import DeviceMockupCarousel from './DeviceMockupCarousel'
import { useAccessibleDialog } from '@/hooks/useAccessibleDialog'
import { useIsMobile } from '@/hooks/useIsMobile'

const taskFlowScreensMobile = [
  { name: 'Start Screen', image: '/taskflow-screens/Start-Page.png', category: 'auth' as const },
  { name: 'Tasks Overview', image: '/taskflow-screens/Tasks-Page.png', category: 'main' as const },
  { name: 'Projects', image: '/taskflow-screens/Project-Page.png', category: 'main' as const },
  { name: 'Add New Task', image: '/taskflow-screens/Add-New-Task-Page.png', category: 'task' as const },
]

const taskFlowScreensDesktop = [
  { name: 'Start Screen', image: '/taskflow-screens/Start-Page.png', category: 'auth' as const },
  { name: 'Login', image: '/taskflow-screens/Login-Page.png', category: 'auth' as const },
  { name: 'Tasks Overview', image: '/taskflow-screens/Tasks-Page.png', category: 'main' as const },
  { name: 'Projects', image: '/taskflow-screens/Project-Page.png', category: 'main' as const },
  { name: 'Calendar View', image: '/taskflow-screens/Calendar-Page.png', category: 'main' as const },
  { name: 'Add New Task', image: '/taskflow-screens/Add-New-Task-Page.png', category: 'task' as const },
  { name: 'Profile', image: '/taskflow-screens/Profile-new-Page.png', category: 'profile' as const },
]

const featuredProjects = [
  {
    id: 0,
    title: 'Famedly',
    label: 'Healthcare messaging · team contribution',
    longDescription: 'Famedly is a secure healthcare messenger for communication across organisations and devices.',
    contribution: 'As part of Famedly’s product team, I contributed to the Flutter client and Matrix-based messaging experience, focusing on reliable cross-platform delivery.',
    value: 'Work on a security-sensitive product where privacy, maintainability, and dependable communication are central product requirements.',
    technologies: ['Flutter', 'Dart', 'Matrix', 'Encrypted messaging', 'Cross-platform delivery'],
    github: 'https://github.com/famedly',
    external: 'https://www.famedly.com/produkt',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.famedly.talk',
    appStore: 'https://apps.apple.com/de/app/famedly/id1459847644',
    figmaPrototype: null,
    category: 'Healthcare',
    color: 'from-blue-500 to-cyan-500',
    icon: <FiMessageCircle className="h-6 w-6" />,
    visual: 'famedly' as const,
  },
  {
    id: 1,
    title: 'TaskFlow',
    label: 'End-to-end product case study',
    longDescription: 'A task-management mobile app with customisable workflows, reminders, progress tracking, and gesture controls, created as a bachelor-thesis project.',
    contribution: 'Owned the full lifecycle: UX research, user mapping, Figma prototyping, product design, and Flutter implementation. The thesis received a 1.3 grade.',
    value: 'Shows the ability to carry a product from an early user problem through a working, maintainable mobile application.',
    technologies: ['Flutter', 'Figma', 'Clean Architecture', 'BLoC', 'Firebase', 'UX/UI Design'],
    github: 'https://github.com/smailosk/task_flow',
    external: null,
    googlePlay: null,
    appStore: null,
    figmaPrototype: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNDmF0csWXO3rGo1P0EpZPC%2FPA-Task-Management-App%3Fpage-id%3D0%253A1%26node-id%3D5-5272%26p%3Df%26viewport%3D471%252C-450%252C0.1%26t%3DLvpDHXzQqGmAYC0h-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed',
    category: 'Productivity',
    color: 'from-purple-500 to-pink-500',
    icon: <FiFolder className="h-6 w-6" />,
    visual: 'taskflow' as const,
  },
  {
    id: 2,
    title: 'Change4Charity',
    label: 'University mobile prototype · team-led',
    longDescription: 'A university mobile prototype designed around helping people track habit goals while connecting progress with charitable giving.',
    contribution: 'Led a four-person team through brainstorming, UML, wireframes, Figma design, and Flutter development in collaboration with Adesso Dortmund.',
    value: 'Combines mobile delivery, product thinking, and team leadership around a clear social-impact use case.',
    technologies: ['Flutter', 'Firebase', 'Payment APIs', 'Figma', 'GitHub', 'Agile'],
    github: 'https://github.com/smailosk/change4charity',
    external: null,
    googlePlay: null,
    appStore: null,
    figmaPrototype: null,
    category: 'Social Impact',
    color: 'from-green-500 to-teal-500',
    icon: <FiHeart className="h-6 w-6" />,
    visual: 'change4charity' as const,
  },
]

const publishedApps = [
  {
    id: 'currency-converter',
    title: 'Currency Converter Calculator',
    eyebrow: 'PrimeCode Solutions · published product',
    summary: 'Fast currency conversion for 140+ currencies, with a built-in calculator and offline access to saved rates.',
    description: 'A fast converter for 140+ currencies with a built-in calculator, daily rates, saved offline rates, and multi-currency comparison.',
    contribution: 'Built and published as a PrimeCode Solutions consumer product, shaping the experience around quick everyday conversion.',
    value: 'Combines conversion and calculation in one focused workflow while keeping recently saved rates useful offline.',
    technologies: ['Android', 'iOS', 'Google Play', 'App Store'],
    googlePlay: 'https://play.google.com/store/apps/details?id=solutions.primecode.currency_converter',
    appStore: 'https://apps.apple.com/de/app/currency-converter-calculator/id6761583993',
    screenshots: [
      { src: '/projects/primecode/currency-converter/overview.png', alt: 'Currency Converter Calculator marketing screen showing a multi-currency conversion', width: 273, height: 592 },
      { src: '/projects/primecode/currency-converter/calculator.png', alt: 'Currency Converter Calculator marketing screen showing the built-in calculator', width: 273, height: 592 },
    ],
    formFactor: 'phone' as const,
    accent: 'from-orange-500/25 to-amber-400/10',
  },
  {
    id: 'beam-mobile',
    title: 'IPTV Player - BEAM',
    eyebrow: 'PrimeCode Solutions · published product',
    summary: 'A mobile IPTV player for browsing your own media library, saving favourites, and controlling playback on a paired TV.',
    description: 'A mobile media-service and IPTV player for organising a library, favourites, history, and resume progress, with optional authenticated phone-to-TV control.',
    contribution: 'Built and published as the mobile half of the BEAM experience, connecting personal media browsing with secure TV playback control.',
    value: 'Lets people browse comfortably on a phone and continue on the largest screen without losing playback context.',
    technologies: ['Android', 'Mobile media', 'Phone-to-TV', 'Google Play'],
    googlePlay: 'https://play.google.com/store/apps/details?id=solutions.primecode.beam',
    appStore: null,
    screenshots: [
      { src: '/projects/primecode/beam-mobile/library.png', alt: 'BEAM mobile marketing screen showing phone-to-TV playback', width: 296, height: 592 },
      { src: '/projects/primecode/beam-mobile/player.png', alt: 'BEAM mobile marketing screen showing playback controls', width: 296, height: 592 },
    ],
    formFactor: 'phone' as const,
    accent: 'from-amber-500/20 to-slate-950/20',
  },
  {
    id: 'beam-tv',
    title: 'BEAM IPTV for TV',
    eyebrow: 'PrimeCode Solutions · Android TV companion',
    summary: 'The living-room companion to the BEAM phone app, built for paired playback on Android TV and Google TV. It plays users’ own media rather than supplying content.',
    description: 'An Android TV and Google TV companion that pairs with the BEAM mobile app and securely controls VLC playback. It does not supply media.',
    contribution: 'Built and published the TV-side companion, keeping the phone and television roles deliberately separate and easy to understand.',
    value: 'Turns a phone into the browsing and control surface while the television handles playback through a focused living-room experience.',
    technologies: ['Android TV', 'Google TV', 'VLC playback', 'Google Play'],
    googlePlay: 'https://play.google.com/store/apps/details?id=solutions.primecode.beam.tv',
    appStore: null,
    screenshots: [
      { src: '/projects/primecode/beam-tv/home.png', alt: 'BEAM IPTV television companion marketing screen showing automatic playback setup', width: 1052, height: 592 },
      { src: '/projects/primecode/beam-tv/remote.png', alt: 'BEAM IPTV television companion marketing screen showing phone pairing', width: 1052, height: 592 },
    ],
    formFactor: 'tv' as const,
    accent: 'from-amber-500/25 to-black/20',
  },
  {
    id: 'personalised-dua',
    title: 'Personalised Dua : Allah Names',
    eyebrow: 'PrimeCode Solutions · published product',
    summary: 'An offline-friendly faith app combining the 99 Names of Allah with personalised duas and morning and evening adhkar.',
    description: 'A faith-focused app with the 99 Names of Allah, personalised duas, morning and evening adhkar, saved content, and offline access.',
    contribution: 'Built and published the Android product through PrimeCode Solutions. The verified iOS release is distributed by OnlyFounders Ventures Limited.',
    value: 'Brings reflective daily practices and personalised guidance into a calm experience that remains available offline.',
    technologies: ['Android', 'iOS', 'Offline access', 'Google Play', 'App Store'],
    googlePlay: 'https://play.google.com/store/apps/details?id=solutions.primecode.allah99names',
    appStore: 'https://apps.apple.com/de/app/personalised-dua-allah-names/id6759212063',
    screenshots: [
      { src: '/projects/primecode/personalised-dua/names.png', alt: 'Personalised Dua marketing screen showing the personalised dua finder', width: 272, height: 592 },
      { src: '/projects/primecode/personalised-dua/dua.png', alt: 'Personalised Dua marketing screen showing the 99 Names experience', width: 272, height: 592 },
    ],
    formFactor: 'phone' as const,
    accent: 'from-emerald-500/20 to-teal-300/10',
  },
]

const otherProjects = [
  {
    id: 3,
    title: 'Production Flutter Apps at It-Objects',
    description: 'Cross-platform Flutter applications delivered within a production team.',
    contribution: 'Built Flutter features using BLoC and clean architecture, integrated local storage and REST APIs, and collaborated in Agile delivery.',
    value: 'Demonstrates sustained delivery across maintainable mobile codebases—not a single isolated prototype.',
    technologies: ['Flutter', 'BLoC', 'Clean Architecture', 'REST APIs', 'Agile/Scrum'],
    deliveryPath: ['Flutter UI', 'REST & local data', 'Agile delivery'],
    external: null,
    icon: <FiSmartphone className="h-5 w-5" />,
    category: 'Mobile Apps',
  },
  {
    id: 4,
    title: 'Fraunhofer Healthcare Interfaces',
    description: 'Responsive React interfaces and interactive data visualisations for healthcare research.',
    contribution: 'Developed and maintained the web applications with research teams, making complex healthcare data easier to explore.',
    value: 'Shows how I translate complex domain information into usable, accessible interfaces.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Data Visualisation'],
    deliveryPath: ['Research data', 'React interface', 'Clear exploration'],
    external: 'https://www.isst.fraunhofer.de',
    icon: <FiMonitor className="h-5 w-5" />,
    category: 'Healthcare',
  },
  {
    id: 5,
    title: 'Custom Shopify Storefronts',
    description: 'Customer-facing Shopify stores with tailored themes and storefront experiences.',
    contribution: 'Handled visual design and frontend theme development using Shopify tooling, Liquid, JavaScript, CSS, and Photoshop.',
    value: 'Demonstrates practical commercial work connecting brand presentation with a functioning online shop.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Photoshop'],
    deliveryPath: ['Brand design', 'Liquid theme', 'Storefront'],
    external: null,
    icon: <FiShoppingCart className="h-5 w-5" />,
    category: 'E-Commerce',
  },
  {
    id: 6,
    title: 'Expense Tracker Mobile App',
    description: 'A personal-finance mobile app with budget tracking and chart-based overviews.',
    contribution: 'Built the Flutter application with local SQLite persistence and visual summaries for spending and budgets.',
    value: 'Shows focused mobile delivery, local data handling, and clear visual feedback.',
    technologies: ['Flutter', 'SQLite', 'Charts'],
    deliveryPath: ['SQLite data', 'Budget logic', 'Chart feedback'],
    external: null,
    icon: <FiBarChart2 className="h-5 w-5" />,
    category: 'Productivity',
  },
]

function StoreLinks({ title, googlePlay, appStore }: { title: string; googlePlay: string | null; appStore: string | null }) {
  return (
    <div className="flex flex-wrap gap-2">
      {googlePlay && (
        <a
          href={googlePlay}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on Google Play`}
          className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-gray-700 bg-gray-950 px-3.5 py-2 text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:border-gray-500"
        >
          <SiGoogleplay className="h-5 w-5 text-emerald-400" />
          <span className="text-left text-sm font-semibold">Google Play</span>
        </a>
      )}
      {appStore && (
        <a
          href={appStore}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on the Apple App Store`}
          className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-gray-700 bg-gray-950 px-3.5 py-2 text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:border-gray-500"
        >
          <SiApple className="h-5 w-5" />
          <span className="text-left text-sm font-semibold">App Store</span>
        </a>
      )}
    </div>
  )
}

function DeliveryPath({ stages }: { stages: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium theme-text-secondary" aria-label={`Delivery path: ${stages.join(', ')}`}>
      {stages.map((stage, index) => (
        <span key={stage} className="inline-flex items-center gap-2">
          <span>{stage}</span>
          {index < stages.length - 1 && <FiArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-emerald-neon" />}
        </span>
      ))}
    </div>
  )
}

function FamedlyPreview() {
  return (
    <figure className="relative w-full max-w-2xl">
      <div className="absolute inset-4 rounded-[2rem] bg-blue-500/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-blue-200/30 bg-white p-2 shadow-2xl dark:border-blue-400/20 dark:bg-gray-900">
        <Image
          src="/projects/famedly/conversations.png"
          alt="Famedly product screen showing the conversation list and new chat view"
          width={847}
          height={592}
          sizes="(max-width: 1024px) 92vw, 50vw"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </figure>
  )
}

function Change4CharityPreview() {
  return (
    <figure className="relative mx-auto flex min-h-[560px] w-full items-center justify-center py-4 sm:min-h-[630px]">
      <div className="absolute inset-y-16 left-1/2 w-[min(72vw,360px)] -translate-x-1/2 rounded-full bg-emerald-neon/15 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-8 w-56 -translate-x-1/2 rounded-full bg-black/50 blur-xl" />
      <div
        role="img"
        aria-label="Stylized Change4Charity mobile prototype"
        className="relative aspect-[14/29] w-[min(68vw,250px)] sm:w-[280px]"
      >
        <div className="absolute inset-0 rounded-[3rem] bg-gray-950 shadow-2xl ring-1 ring-white/10">
          <div className="absolute -right-1 top-28 h-16 w-1 rounded-r bg-gray-800" />
          <div className="absolute inset-3 overflow-hidden rounded-[2.2rem] bg-gray-800">
            <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center justify-center bg-black/50">
              <div className="h-4 w-20 rounded-full bg-black" />
            </div>
            <div className="absolute inset-x-0 bottom-0 top-6 bg-linear-to-b from-green-600 to-teal-600">
              <div className="bg-black/20 p-5">
                <h4 className="text-lg font-bold text-white">Change4Charity</h4>
                <p className="text-xs text-white/80">Break habits, help charities</p>
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-2xl bg-white/18 p-4 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">Habit progress</p>
                  <p className="mt-2 text-sm font-semibold text-white">Today’s goal</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-2/3 rounded-full bg-white/75" />
                  </div>
                </div>
                <div className="rounded-2xl bg-emerald-950/35 p-4 ring-1 ring-white/15 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">Giving connection</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18">
                      <FiHeart aria-hidden="true" className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2 w-4/5 rounded bg-white/40" />
                      <div className="h-2 w-3/5 rounded bg-white/25" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">Portrait presentation of the Change4Charity university mobile prototype.</figcaption>
    </figure>
  )
}

function PublishedAppVisual({ app }: { app: (typeof publishedApps)[number] }) {
  if (app.formFactor === 'tv') {
    return (
      <figure className={`relative flex h-full min-h-[340px] flex-col justify-center overflow-hidden bg-linear-to-br ${app.accent} p-5 sm:min-h-[400px] sm:p-7`}>
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl border-[7px] border-gray-950 bg-black shadow-2xl">
          <Image src={app.screenshots[0].src} alt={app.screenshots[0].alt} fill sizes="(max-width: 768px) 92vw, 44vw" className="object-contain" />
        </div>
        <div className="mx-auto h-3 w-20 rounded-b-lg bg-gray-800" />
        <div className="mx-auto h-2 w-36 rounded-full bg-gray-900/80" />
        <div className="absolute bottom-5 right-5 w-[38%] overflow-hidden rounded-lg border-2 border-gray-700 bg-black shadow-xl">
          <Image
            src={app.screenshots[1].src}
            alt={app.screenshots[1].alt}
            width={app.screenshots[1].width}
            height={app.screenshots[1].height}
            sizes="(max-width: 768px) 38vw, 180px"
            className="h-auto w-full"
          />
        </div>
      </figure>
    )
  }

  return (
    <figure className={`relative flex h-full min-h-[360px] items-center justify-center gap-3 overflow-hidden bg-linear-to-br ${app.accent} px-5 py-7 sm:min-h-[430px] sm:gap-5`}>
      {app.screenshots.map((screen, index) => (
        <div
          key={screen.src}
          className={`w-[42%] max-w-[172px] overflow-hidden rounded-[1.75rem] border-[5px] border-gray-900 bg-gray-950 shadow-2xl ${index === 0 ? '-rotate-2' : 'rotate-2'}`}
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            sizes="(max-width: 768px) 42vw, 172px"
            className="h-auto w-full"
          />
        </div>
      ))}
    </figure>
  )
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showPrototypeModal, setShowPrototypeModal] = useState(false)
  const [currentPrototype, setCurrentPrototype] = useState<string | null>(null)
  const isMobile = useIsMobile()

  const closePrototype = () => {
    setShowPrototypeModal(false)
    setCurrentPrototype(null)
  }

  const { triggerRef: prototypeTriggerRef, closeButtonRef: prototypeCloseRef } = useAccessibleDialog(
    showPrototypeModal,
    closePrototype,
    'taskflow-prototype-dialog',
  )

  const taskFlowScreens = isMobile ? taskFlowScreensMobile : taskFlowScreensDesktop
  const categories = ['All', 'Published Products', 'Healthcare', 'Productivity', 'Social Impact', 'Mobile Apps', 'E-Commerce']
  const visibleFeaturedProjects = featuredProjects.filter((project) => selectedCategory === 'All' || project.category === selectedCategory)
  const visibleOtherProjects = otherProjects.filter((project) => selectedCategory === 'All' || project.category === selectedCategory)
  const showPublishedApps = selectedCategory === 'All' || selectedCategory === 'Published Products'

  return (
    <section id="projects" className="section theme-bg">
      <div className="container-width">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <div className="mb-16 text-center">
            <p className="mb-2 font-mono text-sm text-emerald-neon">{'<Projects />'}</p>
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">Products and projects, <span className="gradient-text">clearly explained.</span></h2>
            <p className="mx-auto max-w-3xl text-lg theme-text-secondary">Published apps, professional team contributions, and independent case studies—with the work and ownership made explicit.</p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-2" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${selectedCategory === category ? 'bg-emerald-neon text-white' : 'border theme-card theme-border theme-text-secondary hover:border-emerald-neon/50 hover:text-emerald-neon'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {showPublishedApps && (
            <div id="published-apps" className="mb-24 scroll-mt-24">
              <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h3 className="text-3xl font-bold theme-text">Published Products</h3>
                  <p className="mt-2 max-w-2xl theme-text-secondary">Four public apps spanning everyday utility, media playback, and guided reflection.</p>
                </div>
                <a href="https://play.google.com/store/apps/developer?id=PrimeCode+Solutions" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-semibold text-emerald-neon hover:text-emerald-600">
                  PrimeCode Solutions on Google Play <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-7">
                {publishedApps.map((app, index) => (
                  <motion.article
                    key={app.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="grid overflow-hidden rounded-2xl border theme-card theme-border lg:grid-cols-[minmax(380px,0.9fr)_minmax(0,1.1fr)]"
                  >
                    <PublishedAppVisual app={app} />
                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-emerald-neon">{app.eyebrow}</p>
                      <h4 className="mb-3 text-2xl font-bold theme-text">{app.title}</h4>
                      <p className="mb-5 text-base leading-relaxed theme-text-secondary">{app.description}</p>

                      <div className="mb-5 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-neon">My contribution</p>
                          <p className="text-sm leading-relaxed theme-text-secondary">{app.contribution}</p>
                        </div>
                        <div>
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-neon">Why it matters</p>
                          <p className="text-sm leading-relaxed theme-text-secondary">{app.value}</p>
                        </div>
                      </div>

                      <div className="mb-5 flex flex-wrap gap-2">
                        {app.technologies.map((technology) => (
                          <span key={technology} className="rounded-full bg-emerald-neon/10 px-3 py-1 font-mono text-xs text-emerald-neon">{technology}</span>
                        ))}
                      </div>
                      <StoreLinks title={app.title} googlePlay={app.googlePlay} appStore={app.appStore} />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {visibleFeaturedProjects.length > 0 && (
            <div className="mb-24 space-y-24">
              {visibleFeaturedProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="grid items-center gap-10 lg:grid-cols-2"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-4 flex items-center gap-3">
                      <div className={`rounded-lg bg-linear-to-r p-2 text-white ${project.color}`}>{project.icon}</div>
                      <span className="font-mono text-sm text-emerald-neon">{project.label}</span>
                    </div>
                    <h3 className="mb-4 text-3xl font-bold theme-text">{project.title}</h3>

                    <div className="rounded-xl border p-6 theme-card theme-border">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-neon">What was built</p>
                      <p className="mb-6 leading-relaxed theme-text-secondary">{project.longDescription}</p>
                      <div className="mb-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border p-4 theme-bg theme-border">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-neon">My contribution</p>
                          <p className="text-sm leading-relaxed theme-text-secondary">{project.contribution}</p>
                        </div>
                        <div className="rounded-lg border p-4 theme-bg theme-border">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-neon">Why it matters</p>
                          <p className="text-sm leading-relaxed theme-text-secondary">{project.value}</p>
                        </div>
                      </div>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="rounded-full bg-emerald-neon/10 px-3 py-1 font-mono text-xs text-emerald-neon">{technology}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {project.figmaPrototype && (
                          <motion.button
                            ref={prototypeTriggerRef}
                            onClick={() => {
                              setCurrentPrototype(project.figmaPrototype)
                              setShowPrototypeModal(true)
                            }}
                            aria-haspopup="dialog"
                            aria-expanded={showPrototypeModal}
                            aria-controls="taskflow-prototype-dialog"
                            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-purple-300 bg-purple-100 px-4 py-2.5 font-medium text-purple-700 transition-colors hover:bg-purple-200 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <SiFigma className="h-4 w-4" /> Figma prototype
                          </motion.button>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2.5 font-medium text-gray-700 transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800/40 dark:text-gray-300">
                            <FiGithub className="h-4 w-4" /> {project.id === 0 ? 'Engineering on GitHub' : 'View code'}
                          </a>
                        )}
                        {project.external && (
                          <a href={project.external} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2.5 font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-neon/30 dark:bg-emerald-neon/10 dark:text-emerald-neon">
                            <FiExternalLink className="h-4 w-4" /> Product site
                          </a>
                        )}
                      </div>
                      {(project.googlePlay || project.appStore) && (
                        <div className="mt-3"><StoreLinks title={project.title} googlePlay={project.googlePlay} appStore={project.appStore} /></div>
                      )}
                    </div>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`absolute inset-0 bg-linear-to-r ${project.color} opacity-20 blur-3xl`} />
                    <div className="relative flex justify-center">
                      {project.visual === 'famedly' && <FamedlyPreview />}
                      {project.visual === 'taskflow' && (
                        <DeviceMockupCarousel screens={taskFlowScreens} title={project.title} autoPlay={!isMobile} interval={isMobile ? 5000 : 4000} />
                      )}
                      {project.visual === 'change4charity' && <Change4CharityPreview />}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {visibleOtherProjects.length > 0 && (
            <div>
              <div className="mb-10 border-l-2 border-emerald-neon pl-5">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-emerald-neon">Broader delivery experience</p>
                <h3 className="text-3xl font-bold theme-text md:text-4xl">More ways I help teams ship</h3>
                <p className="mt-3 max-w-3xl leading-relaxed theme-text-secondary">Production mobile apps, healthcare interfaces, commerce storefronts, and focused product tools—showing how I contribute across different delivery contexts.</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {visibleOtherProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="flex h-full flex-col rounded-2xl border p-6 theme-card theme-border hover:border-emerald-neon/50 sm:p-7"
                  >
                    <div className="mb-5 border-b pb-5 theme-border">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-emerald-neon">
                          <span aria-hidden="true">{project.icon}</span>
                          <span className="font-mono text-xs uppercase tracking-[0.12em]">{project.category}</span>
                        </div>
                        {project.external && (
                          <a href={project.external} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-emerald-neon hover:text-emerald-600">
                            Organisation site <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                      <DeliveryPath stages={project.deliveryPath} />
                    </div>
                    <h4 className="mb-2 text-xl font-semibold theme-text">{project.title}</h4>
                    <p className="mb-5 text-sm leading-relaxed theme-text-secondary">{project.description}</p>
                    <div className="mb-5 grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-neon">My contribution</p>
                        <p className="text-sm leading-relaxed theme-text-secondary">{project.contribution}</p>
                      </div>
                      <div>
                        <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-neon">Why it matters</p>
                        <p className="text-sm leading-relaxed theme-text-secondary">{project.value}</p>
                      </div>
                    </div>
                    <div className="mb-5 mt-auto flex flex-wrap gap-x-3 gap-y-2">
                      {project.technologies.map((technology) => <span key={technology} className="font-mono text-xs theme-text-muted">{technology}</span>)}
                    </div>
                    <a href="#contact-form" className="inline-flex items-center gap-2 self-start text-sm font-semibold text-emerald-neon hover:text-emerald-600">Start a project <FiArrowUpRight className="h-4 w-4" /></a>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border p-7 theme-card theme-border md:flex-row md:p-9"
          >
            <div className="text-center md:text-left">
              <p className="mb-2 font-mono text-sm text-emerald-neon">Have a product challenge?</p>
              <h3 className="mb-2 text-2xl font-bold theme-text md:text-3xl">Let’s map the right next step.</h3>
              <p className="max-w-xl theme-text-secondary">Share what you are building, where it is stuck, or what needs to improve.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#contact-form" className="btn-primary inline-flex items-center gap-2">Start a project <FiArrowUpRight className="h-5 w-5" /></a>
              <a href="https://github.com/smailosk" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold text-emerald-neon hover:text-emerald-600">More on GitHub <FiGithub className="h-5 w-5" /></a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showPrototypeModal && currentPrototype && (
          <>
            <motion.div aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closePrototype} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center md:p-6 lg:p-8"
            >
              <div id="taskflow-prototype-dialog" role="dialog" aria-modal="true" aria-labelledby="taskflow-prototype-title" className="pointer-events-auto flex h-full w-full flex-col shadow-2xl theme-card md:h-[calc(100vh-3rem)] md:max-w-6xl md:rounded-2xl lg:h-[calc(100vh-4rem)] xl:max-w-7xl">
                <div className="flex items-center justify-between border-b p-4 theme-border md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-purple-500 to-pink-500"><SiFigma className="h-5 w-5 text-white" /></div>
                    <div>
                      <h2 id="taskflow-prototype-title" className="text-lg font-bold theme-text md:text-2xl">TaskFlow interactive prototype</h2>
                      <p className="mt-0.5 text-xs theme-text-secondary md:text-sm">Navigate through the app design</p>
                    </div>
                  </div>
                  <button ref={prototypeCloseRef} onClick={closePrototype} className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Close TaskFlow prototype"><FiX className="h-6 w-6 theme-text" /></button>
                </div>
                <div className="relative flex-1 overflow-hidden bg-gray-50 dark:bg-gray-900">
                  <div className="absolute inset-0 p-2 md:p-4">
                    <div className="h-full w-full overflow-hidden rounded-lg bg-white">
                      <iframe src={currentPrototype} className="h-full w-full border-0" title="TaskFlow Figma prototype" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                    </div>
                  </div>
                </div>
                <div className="border-t bg-gray-50 p-4 theme-border dark:bg-gray-900"><p className="text-center text-sm theme-text-secondary">Click and drag to navigate. Use the close button above to return to the portfolio.</p></div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
