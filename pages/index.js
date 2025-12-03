import Head from "next/head";
import styles from "../styles/Home.module.css";

const heroStats = [
  {
    title: "AI Co-Pilot Builds",
    description: "Launch intelligent websites that adapt content, offers, and UX in real time."
  },
  {
    title: "Conversion-First Design",
    description: "Blend human creativity and AI-driven testing to capture more qualified leads."
  },
  {
    title: "End-to-End Delivery",
    description: "From strategy to deployment, I handle everything with reliable automation."
  }
];

const services = [
  {
    badge: "Premium",
    title: "Launch-Ready Websites",
    description: "Next.js experiences engineered for speed, SEO, and perfect responsiveness across every device."
  },
  {
    badge: "AI-Driven",
    title: "Intelligent Landing Pages",
    description: "Chat-enabled funnels, AI copywriting, and adaptive CTAs informed by live customer signals."
  },
  {
    badge: "Automation",
    title: "Workflow Integration",
    description: "Connect CRMs, payment providers, analytics, and custom AI agents without fragile glue code."
  }
];

const aiCapabilities = [
  {
    title: "AI Content Studio",
    description:
      "Ship on-brand copy, blog posts, and campaigns in minutes with models fine-tuned on your voice and offers."
  },
  {
    title: "Custom Chat Agents",
    description:
      "Deploy guided product advisors that qualify leads, route inquiries, and reduce support load instantly."
  },
  {
    title: "Predictive Personalization",
    description:
      "Serve dynamic hero messaging, case studies, and pricing tiers guided by machine learning insights."
  }
];

const process = [
  {
    step: "01",
    title: "Strategy Sprint",
    description: "Audit your positioning, map success metrics, and architect a high-impact launch roadmap."
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Craft immersive visuals paired with AI-assisted UX flows before we commit to code."
  },
  {
    step: "03",
    title: "Build & Automate",
    description: "Develop pixel-perfect interfaces, wire AI integrations, and automate the boring ops."
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Deploy to Vercel, monitor performance, and iterate with data-informed experiments."
  }
];

const testimonials = [
  {
    quote:
      "Our inbound pipeline transformed after we launched. The AI lead assistant qualifies prospects 24/7 and the new site looks incredible.",
    name: "Sasha Patel",
    role: "Founder, Lumen Analytics"
  },
  {
    quote:
      "Traffic to trial conversion jumped 62%. The blend of custom UI and automation unlocked growth without increasing headcount.",
    name: "Jordan Kim",
    role: "Head of Growth, Horizon SaaS"
  },
  {
    quote:
      "We finally have a site that's easy to manage, lightning fast, and pairs perfectly with our marketing ops stack.",
    name: "Melissa Carter",
    role: "COO, Silverline Ventures"
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Web Development Studio</title>
        <meta
          name="description"
          content="Next-level website development services blending human creativity with AI-driven automation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3.5L21 8l-9 4.5L3 8l9-4.5Zm0 17L3 16.5l3.5-1.75L12 17l5.5-2.25L21 16.5 12 20.5Zm0-4.5L3 11l3.5-1.75L12 12l5.5-2.75L21 11l-9 4Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              AI Web Studio
            </span>
            <h1 className={styles.title}>
              Bespoke websites engineered to convert, enhanced by intelligent automation.
            </h1>
            <p className={styles.description}>
              I build premium Next.js experiences that blend cutting-edge design with AI copilots, chat agents, and
              personalization systems. Every project is crafted to tell your story, streamline ops, and grow revenue.
            </p>
            <div className={styles.ctaGroup}>
              <a className={styles.primaryCta} href="mailto:hello@aistudio.dev">
                Book a discovery call
              </a>
              <a className={styles.secondaryCta} href="#process">
                Explore the process
              </a>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelGrid}>
              {heroStats.map((item) => (
                <div key={item.title} className={styles.panelCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="services">
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Services</span>
              <h2>High-impact builds trusted by founders, marketers, and product teams.</h2>
              <p>
                From launch-ready marketing sites to AI-driven customer journeys, I deliver battle-tested systems that are
                as beautiful as they are performant.
              </p>
            </div>

            <div className={`${styles.grid} ${styles.gridCols3}`}>
              {services.map((service) => (
                <article key={service.title} className={styles.card}>
                  <span className={styles.badge}>{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="ai-options">
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>AI Options</span>
              <h2>AI integrations that make every visitor feel understood.</h2>
              <p>
                Unlock adaptive copy, conversational funnels, and predictive insights. Each engagement blends custom models with
                best-in-class tooling to extend your in-house capabilities.
              </p>
            </div>
            <div className={styles.aiShowcase}>
              <div className={styles.aiRow}>
                {aiCapabilities.map((capability) => (
                  <div key={capability.title} className={styles.aiCard}>
                    <strong>{capability.title}</strong>
                    <p>{capability.description}</p>
                  </div>
                ))}
              </div>
              <div className={styles.process}>
                <h3>Plugins, pipelines, and proprietary copilots tailored to your stack.</h3>
                <p>
                  Whether you need GPT-4 powered sales acceleration or lightweight no-code flows, every automation is crafted with
                  maintainability, security, and measurable ROI baked in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="process">
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Process</span>
              <h2>Clarity, velocity, and craftsmanship at every milestone.</h2>
              <p>
                I partner with you as an embedded product team to deliver outcomes fast—without the chaos. Expect async updates,
                weekly demos, and transparent timelines.
              </p>
            </div>

            <div className={styles.processSteps}>
              {process.map((item) => (
                <div key={item.title} className={styles.step}>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="testimonials">
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.badge}>Testimonials</span>
              <h2>Teams rely on my builds to launch faster and sell smarter.</h2>
              <p>
                Real operators, real results. Every project is anchored in measurable outcomes that move your business forward.
              </p>
            </div>
            <div className={styles.testimonials}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className={styles.testimonialMeta}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaSectionInner}>
            <span className={styles.badge}>Ready to launch?</span>
            <h2>Let&apos;s build the website your brand deserves.</h2>
            <p>
              Share your goals, timeline, and target audience. I&apos;ll come prepared with a roadmap, pricing options, and AI
              enhancements tailored to your needs.
            </p>
            <a className={styles.primaryCta} href="https://cal.com/ai-web-studio" target="_blank" rel="noreferrer">
              Reserve a project slot
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <strong>AI Web Studio</strong>
            <p className={styles.description}>
              Full-stack web development and AI integration services for ambitious teams ready to scale.
            </p>
          </div>
          <div className={styles.footerMeta}>
            <span>hello@aistudio.dev</span>
            <div className={styles.socials}>
              <a className={styles.socialLink} href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.5 21.5c8.3 0 12.8-6.9 12.8-12.8 0-.2 0-.4 0-.5A9.2 9.2 0 0 0 22 5a9 9 0 0 1-2.6.7 4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.9 1.1 4.5 4.5 0 0 0-7.6 4.1A12.9 12.9 0 0 1 3.1 4.2a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 2 19.5a12.8 12.8 0 0 0 5.5 1.3Z" />
                </svg>
              </a>
              <a className={styles.socialLink} href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M5.1 3.5A2 2 0 1 1 3 5.6 2 2 0 0 1 5.1 3.5Zm-.9 4H7v13.1H4.2Zm6 0h2.8v1.8h.1a3.1 3.1 0 0 1 2.8-1.5c3 0 3.6 2 3.6 4.6v8.2H17V13c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v7.7h-2.8Z" />
                </svg>
              </a>
              <a className={styles.socialLink} href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-3 .7-3.6-1.5-3.6-1.5a2.8 2.8 0 0 0-1.2-1.5c-1-.7.1-.7.1-.7a2.2 2.2 0 0 1 1.6 1 2.2 2.2 0 0 0 3 1 2.2 2.2 0 0 1 .7-1.4c-2.4-.3-4.9-1.2-4.9-5.4a4.2 4.2 0 0 1 1.1-2.9 3.9 3.9 0 0 1 .1-2.8s.9-.3 2.9 1.1a9.8 9.8 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1a3.9 3.9 0 0 1 .1 2.8 4.2 4.2 0 0 1 1.1 2.9c0 4.2-2.5 5.1-4.9 5.4a2.5 2.5 0 0 1 .7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
          <span>© {new Date().getFullYear()} AI Web Studio. Crafted with strategy, design, and automation.</span>
        </div>
      </footer>
    </>
  );
}
