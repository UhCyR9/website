"use client";

import {
    useState,
    useRef,
    useEffect,
    type CSSProperties,
    type PointerEvent as ReactPointerEvent,
    type ReactNode,
} from "react";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import {
    ACCENT,
    COPY,
    STACK_GROUPS,
    PROJECTS,
    type Lang,
    type Theme,
} from "./portfolio.config";

const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(" ");



export default function HomePage() {
    const [lang, setLang] = useState<Lang>("en");
    const [theme, setTheme] = useState<Theme>("dark");

    const t = COPY[lang];
    const isDark = theme === "dark";

    
    const layout = {
        page: cn(
            "relative min-h-screen",
            isDark
                ? "bg-gradient-to-br from-neutral-950 via-neutral-950 to-black text-neutral-50"
                : "bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 text-neutral-900"
        ),
        header: cn(
            "sticky top-0 z-30 border-b backdrop-blur-md",
            isDark
                ? "bg-neutral-950/75 border-neutral-800/70 text-neutral-50"
                : "bg-white/75 border-neutral-200/80 text-neutral-900"
        ),
        shell: cn(
            "relative mx-auto w-full max-w-5xl rounded-[32px] border bg-clip-padding backdrop-blur-sm px-6 md:px-10 py-8 md:py-10",
            isDark
                ? "backdrop-brightness-125 border-white/15 bg-neutral-900/18 shadow-[0_18px_80px_rgba(0,0,0,0.80)]"
                : "border-white/70 bg-white/28 shadow-[0_18px_55px_rgba(15,23,42,0.22)]"
        ),
        section: "scroll-mt-32",
        sectionWithBorder: cn(
            "scroll-mt-32 pt-8 md:pt-10 border-t",
            isDark ? "border-neutral-800/70" : "border-neutral-200/80"
        ),
    };

    
    const text = {
        heroDesc: isDark ? "text-neutral-200/90" : "text-neutral-700",
        sectionSubtitle: isDark ? "text-neutral-300" : "text-neutral-600",
        stackItem: isDark ? "text-neutral-100/90" : "text-neutral-800",
        projectDesc: isDark ? "text-neutral-100/90" : "text-neutral-800",
        meta: isDark ? "text-neutral-300" : "text-neutral-500",
    };

    
    const cardBase =
        "rounded-3xl border p-7 md:p-9 shadow-[0_0_30px_rgba(0,0,0,0.25)] transition-colors duration-200";

    const stackCard = cn(
        cardBase,
        "min-h-[220px] md:min-h-[260px]",
        isDark
            ? "bg-neutral-900 border-neutral-700/80 hover:bg-neutral-900"
            : "bg-white border-neutral-200/80 hover:bg-white"
    );

    const projectCard = cn(
        cardBase,
        "group overflow-hidden relative min-h-[230px] md:min-h-[280px]",
        isDark
            ? "bg-neutral-900 border-neutral-700/80 hover:bg-neutral-900"
            : "bg-white border-neutral-200/90 hover:bg-white"
    );

    const projectHoverOverlay = isDark
        ? "bg-gradient-to-br from-[#EB150C33] via-transparent to-black/60"
        : "bg-gradient-to-br from-[#EB150C26] via-transparent to-neutral-900/10";

    
    const controls = cn(
        "flex overflow-hidden rounded-full backdrop-blur text-xs font-medium",
        isDark
            ? "border-[rgba(235,21,12,0.6)] bg-neutral-900/80 text-white"
            : "border-[rgba(235,21,12,0.6)] bg-neutral-100/95 text-neutral-900 shadow-[0_2px_6px_rgba(15,23,42,0.18)]"
    );

    
    const navLink =
        "hover:text-[var(--accent-color)] transition-colors text-xs uppercase tracking-[0.2em] text-neutral-400";

    return (
        <div
            className={layout.page}
            style={{ "--accent-color": ACCENT } as CSSProperties}
        >
            
            <ParticleBackground isDark={isDark} />

            
            <header className={layout.header}>
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    
                    <a
                        href="#hero"
                        className="flex items-center gap-2 text-sm font-semibold"
                    >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-current/40">
              PR
            </span>
                        <span className="hidden sm:inline">Piotr Ryczek</span>
                    </a>

                    
                    <nav className="hidden gap-6 md:flex">
                        <a href="#hero" className={navLink}>
                            {t.navIntro}
                        </a>
                        <a href="#stack" className={navLink}>
                            {t.navStack}
                        </a>
                        <a href="#projects" className={navLink}>
                            {t.navProjects}
                        </a>
                    </nav>

                    
                    <div className="flex items-center gap-2">
                        
                        <div className={controls}>
                            <button
                                onClick={() => setLang("en")}
                                className={cn(
                                    "px-3 py-1",
                                    lang === "en"
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "text-[var(--accent-color)] hover:bg-[var(--accent-color)]/15"
                                )}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLang("pl")}
                                className={cn(
                                    "px-3 py-1",
                                    lang === "pl"
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "text-[var(--accent-color)] hover:bg-[var(--accent-color)]/15"
                                )}
                            >
                                PL
                            </button>
                        </div>

                        
                        <div className={controls}>
                            <button
                                onClick={() => setTheme("dark")}
                                className={cn(
                                    "px-3 py-1",
                                    isDark
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "text-[var(--accent-color)] hover:bg-[var(--accent-color)]/15"
                                )}
                                aria-label="Dark mode"
                            >
                                🌙
                            </button>
                            <button
                                onClick={() => setTheme("light")}
                                className={cn(
                                    "px-3 py-1",
                                    !isDark
                                        ? "bg-[var(--accent-color)] text-white"
                                        : "text-[var(--accent-color)] hover:bg-[var(--accent-color)]/15"
                                )}
                                aria-label="Light mode"
                            >
                                ☀️
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            
            <main className="relative z-10 px-4 py-6 md:py-8">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={layout.shell}
                >
                    <div className="space-y-14 md:space-y-16">
                        
                        <section
                            id="hero"
                            aria-labelledby="hero-title"
                            className={layout.section}
                        >
                            <div className="relative flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
                                
                                <motion.div
                                    initial={{ opacity: 0, x: -32, scale: 0.96 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 18,
                                    }}
                                    className="relative shrink-0"
                                >
                                    <div
                                        className="pointer-events-none absolute inset-[-8%] -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,#EB150CCC,transparent_70%)] blur-3xl"
                                        aria-hidden="true"
                                    />
                                    <Image
                                        src="/face.png"
                                        alt="Portrait photo of Piotr Ryczek"
                                        width={1024}
                                        height={1536}
                                        unoptimized
                                        className="relative z-0 h-auto w-[260px] sm:w-[300px] md:w-[340px] rounded-[32px] object-cover"
                                        priority
                                    />
                                </motion.div>

                                
                                <motion.div
                                    initial={{ opacity: 0, x: 32 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.1,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 20,
                                    }}
                                    className="space-y-6 text-center lg:flex-1 lg:text-left"
                                >
                                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent-color)]">
                                        {t.roleLabel}
                                    </p>
                                    <h1
                                        id="hero-title"
                                        className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[2.6rem]"
                                    >
                                        {t.heroTitle}
                                        <br />
                                        <span className="text-[var(--accent-color)]">
                      {t.heroSubtitle}
                    </span>
                                    </h1>
                                    <p
                                        className={cn(
                                            "mx-auto max-w-xl text-sm md:text-base lg:mx-0",
                                            text.heroDesc
                                        )}
                                    >
                                        {t.heroDesc}
                                    </p>

                                    <div
                                        className={cn(
                                            "flex flex-wrap items-center justify-center gap-4 pt-1 text-xs lg:justify-start",
                                            text.meta
                                        )}
                                    >
                    <span className="uppercase tracking-[0.25em] text-[var(--accent-color)]">
                      {t.seeMore}
                    </span>
                                        <span className="animate-bounce">↓</span>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        
                        <section
                            id="stack"
                            aria-labelledby="stack-heading"
                            className={layout.sectionWithBorder}
                        >
                            <div className="flex flex-col gap-8">
                                <div className="max-w-2xl space-y-3">
                                    <h2
                                        id="stack-heading"
                                        className="text-2xl font-semibold tracking-tight md:text-3xl"
                                    >
                                        {t.stackTitle}
                                    </h2>
                                    <p
                                        className={cn(
                                            "text-sm md:text-base",
                                            text.sectionSubtitle
                                        )}
                                    >
                                        {t.stackSubtitle}
                                    </p>
                                </div>

                                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                                    {STACK_GROUPS.map((group, idx) => (
                                        <TiltCard
                                            key={group.label}
                                            intensity={4}
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            className={stackCard}
                                        >
                                            <div className="flex items-center justify-between">
        <span className="text-sm md:text-base font-semibold">
          {group.label}
        </span>
                                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                                            </div>
                                            <ul
                                                className={cn(
                                                    "space-y-2.5 md:space-y-3 text-sm md:text-base",
                                                    text.stackItem
                                                )}
                                            >
                                                {group.items.map((item) => (
                                                    <li key={item} className="flex items-center gap-2.5">
                                                        <span className="h-1 w-6 rounded-full bg-[var(--accent-color)]/80" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </TiltCard>
                                    ))}
                                </div>


                            </div>
                        </section>

                        
                        <section
                            id="projects"
                            aria-labelledby="projects-heading"
                            className={layout.sectionWithBorder}
                        >
                            <div className="flex flex-col gap-8">
                                <div className="max-w-2xl space-y-3">
                                    <h2
                                        id="projects-heading"
                                        className="text-2xl font-semibold tracking-tight md:text-3xl"
                                    >
                                        {t.projectsTitle}
                                    </h2>
                                    <p
                                        className={cn(
                                            "text-sm md:text-base",
                                            text.sectionSubtitle
                                        )}
                                    >
                                        {t.projectsSubtitle}
                                    </p>
                                </div>

                                <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                                    {PROJECTS.map((p, idx) => (
                                        <TiltCard
                                            key={p.title}
                                            intensity={4}
                                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                                            className={projectCard}
                                        >
                                            <div
                                                className={cn(
                                                    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                                    projectHoverOverlay
                                                )}
                                            />
                                            <div className="relative space-y-3 md:space-y-4">
                                                <h3 className="text-sm md:text-lg font-semibold">{p.title}</h3>
                                                <p className={cn("text-xs md:text-sm", text.projectDesc)}>{p.desc}</p>
                                                <div
                                                    className={cn(
                                                        "flex items-center justify-between text-[11px] md:text-xs",
                                                        text.meta
                                                    )}
                                                >
        <span className="rounded-full border border-[var(--accent-color)]/60 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[var(--accent-color)] md:text-[11px]">
          coming soon
        </span>
                                                    <span className="opacity-0 transition-opacity group-hover:opacity-100">
          ⇢
        </span>
                                                </div>
                                            </div>
                                        </TiltCard>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}



type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseVx: number; 
    baseVy: number; 
    size: number;
    alpha: number;
    color: string; 
};

type ParticleBackgroundProps = {
    isDark: boolean;
};

function ParticleBackground({ isDark }: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        const dpr = window.devicePixelRatio || 1;

        const resize = () => {
            width = document.documentElement.clientWidth;
            height = document.documentElement.scrollHeight;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const darkPalette = ["235,21,12", "248,250,252", "59,130,246"];
        const lightPalette = ["185,28,28", "15,23,42", "37,99,235"];

        const palette = isDark ? darkPalette : lightPalette;

        const area = width * height;
        const particleCount = Math.round(area / 13000);
        const baseAlpha = isDark ? 0.9 : 0.95;

        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dirX = Math.cos(angle);
            const dirY = Math.sin(angle);
            const speed = 0.04 + Math.random() * 0.2; 

            const color = palette[Math.floor(Math.random() * palette.length)];
            const rawAlpha = baseAlpha * (0.6 + Math.random() * 0.4);

            const baseVx = dirX * speed;
            const baseVy = dirY * speed;

            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: baseVx,
                vy: baseVy,
                baseVx,
                baseVy,
                size: isDark
                    ? 2.2 + Math.random() * 2.8
                    : 3.0 + Math.random() * 3.5,
                alpha: Math.min(1, rawAlpha),
                color,
            });
        }

        const mouse = { x: width / 2, y: height / 2, active: false };

        const handleMove = (e: PointerEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY + window.scrollY;
            mouse.active = true;
        };
        const handleLeave = () => {
            mouse.active = false;
        };

        window.addEventListener("pointermove", handleMove);
        window.addEventListener("pointerleave", handleLeave);

        const radius = 60;
        const radiusSq = radius * radius;

        
        const relaxFactor = 0.03;

        const tick = () => {
            ctx.clearRect(0, 0, width, height);

            for (const p of particles) {
                
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < radiusSq && distSq > 0.0001) {
                        const dist = Math.sqrt(distSq);
                        const force = (radius - dist) / radius;
                        const push = force * 0.5; 

                        const nx = dx / dist;
                        const ny = dy / dist;

                        p.vx += nx * push;
                        p.vy += ny * push;
                    }
                }

                
                p.vx += (p.baseVx - p.vx) * relaxFactor;
                p.vy += (p.baseVy - p.vy) * relaxFactor;

                
                p.x += p.vx;
                p.y += p.vy;

                
                if (p.x < -20) p.x = width + 20;
                else if (p.x > width + 20) p.x = -20;
                if (p.y < -20) p.y = height + 20;
                else if (p.y > height + 20) p.y = -20;

                
                ctx.beginPath();
                ctx.shadowBlur = isDark ? 14 : 22;
                ctx.shadowColor = `rgba(${p.color},${p.alpha})`;
                ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.shadowBlur = 0;
                ctx.shadowColor = "transparent";
            }

            animationFrameId = window.requestAnimationFrame(tick);
        };

        tick();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("pointerleave", handleLeave);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0"
        />
    );
}

type TiltCardProps = {
    children: ReactNode;
    
    intensity?: number;
} & React.ComponentProps<typeof motion.div>;

function TiltCard({
                      children,
                      intensity = 10,
                      className,
                      ...motionProps
                  }: TiltCardProps) {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    
    const tiltX = useSpring(rotateX, {
        stiffness: 480,
        damping: 26,
        mass: 0.4,
    });
    const tiltY = useSpring(rotateY, {
        stiffness: 480,
        damping: 26,
        mass: 0.4,
    });

    const updateTilt = (event: ReactPointerEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateYValue = ((x - centerX) / centerX) * intensity;
        const rotateXValue = ((centerY - y) / centerY) * intensity;

        rotateX.set(rotateXValue);
        rotateY.set(rotateYValue);
    };

    const handlePointerLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div className="relative [perspective:900px]">
            <motion.div
                {...motionProps}
                className={cn(
                    "will-change-transform [transform-style:preserve-3d]",
                    className
                )}
                style={{
                    rotateX: tiltX,
                    rotateY: tiltY,
                }}
                onPointerMove={updateTilt}
                onPointerEnter={updateTilt}
                onPointerLeave={handlePointerLeave}
                whileHover={{ scale: 1.01 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

