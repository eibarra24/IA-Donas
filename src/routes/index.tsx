import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  Clock,
  GraduationCap,
  Heart,
  Package,
  PartyPopper,
  Sparkles,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/whatsapp";
import heroPhoto from "@/assets/donas_surtidas_plato.png";
import glazingPhoto from "@/assets/donas_glaseando_manos.jpg";
import boxPhoto from "@/assets/caja_docena_donas.jpg";
import posadaPhoto from "@/assets/donas_posada.jpg";
import {
  BULK_DISCOUNT_PERCENT,
  BULK_THRESHOLD,
  STUDENT_DISCOUNT_PERCENT,
} from "@/lib/promos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Donas La tentación de hoy | Pide por WhatsApp" },
      {
        name: "description",
        content:
          "Donas hechas a mano y glaseadas al momento: chocolate, fresa, vainilla y limón. Haz tu pedido por WhatsApp.",
      },
      { property: "og:title", content: "Donas La tentación de hoy" },
      {
        property: "og:description",
        content: "Donas hechas a mano y glaseadas al momento. Pide las tuyas por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const flavors = [
  {
    name: "Chocolate con chispas",
    note: "Cobertura de chocolate y una lluvia de chispas de chocolate.",
    swatch: "bg-chocolate",
  },
  {
    name: "Fresa rosa",
    note: "Glaseado de fresa con grageas blancas.",
    swatch: "bg-primary",
  },
  {
    name: "Vainilla rayada",
    note: "Glaseado blanco de vainilla con rayas de chocolate.",
    swatch: "bg-card border-2 border-chocolate",
  },
  {
    name: "Limón con chispas",
    note: "Glaseado amarillo de limón con chispas de chocolate.",
    swatch: "bg-accent",
  },
];

const steps = [
  { title: "Escoge tus sabores", text: "Mira nuestras donas y arma tu antojo, una pieza o una caja completa." },
  { title: "Escríbenos por WhatsApp", text: "Cuéntanos cuántas quieres y para cuándo. Te respondemos personalmente." },
  { title: "Disfruta la tentación", text: "Acordamos la entrega y tú solo te preocupas por compartir (o no)." },
];

function WhatsAppButton({ label, message }: { label: string; message?: string }) {
  return (
    <Button asChild variant="whatsapp" size="xl">
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {label}
      </a>
    </Button>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="flex items-baseline gap-2">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Donas
            </span>
            <span className="font-display text-xl font-bold italic">La tentación de hoy</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#historia" className="hover:text-primary">Nuestra historia</a>
            <a href="#sabores" className="hover:text-primary">Sabores</a>
            <a href="#promociones" className="hover:text-primary">Promociones</a>
            <a href="#posadas" className="hover:text-primary">Posadas</a>
            <a href="#pedido" className="hover:text-primary">Cómo pedir</a>
          </nav>
          <Button asChild variant="whatsapp" size="sm" className="h-9 px-4">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Pedir
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative sprinkles">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
              <Sparkles className="size-4" /> Hechas a mano, glaseadas al momento
            </span>
            <h1 className="mt-6 text-5xl font-black leading-[0.95] md:text-7xl">
              Ceder a la tentación
              <span className="block italic text-primary">nunca supo tan rico.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Donas esponjositas con glaseados de chocolate, fresa, vainilla y limón. Cada pieza
              lleva su historia: la de una cocina donde todo se hace con cariño, una por una.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton label="Pide por WhatsApp" />
              <Button asChild variant="cream" size="xl">
                <a href="#sabores">Ver sabores</a>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Escríbenos al <span className="font-semibold text-foreground">{WHATSAPP_DISPLAY}</span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-accent/60 blur-3xl" aria-hidden />
            <img
              src={heroPhoto}
              alt="Plato con donas de chocolate, fresa, vainilla rayada y limón"
              width={554}
              height={554}
              className="relative aspect-square w-full rounded-[2.5rem] border-4 border-foreground object-cover shadow-pop animate-float-slow"
            />
            <div className="absolute -bottom-5 -left-3 rotate-[-6deg] rounded-2xl bg-primary px-5 py-3 font-display text-lg font-bold italic text-primary-foreground shadow-pop md:-left-8">
              ¡Recién hechas!
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="historia" className="bg-chocolate text-chocolate-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <img
            src={glazingPhoto}
            alt="Manos bañando donas recién hechas con chocolate"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Nuestra historia
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Un antojo que se volvió <span className="italic text-primary">tradición</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed opacity-85">
              Todo empezó en casa, con una receta, una cacerola y las ganas de endulzarle el día
              a alguien. Hoy seguimos igual: amasamos, freímos y bañamos cada dona a mano, sin
              prisas, para que llegue a tu mesa suave por dentro y brillante por fuera.
            </p>
            <p className="mt-4 text-lg leading-relaxed opacity-85">
              Porque la tentación de hoy no se deja para mañana.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Heart, label: "Hechas con cariño" },
                { icon: Clock, label: "Preparadas al día" },
                { icon: PartyPopper, label: "Para cualquier ocasión" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-2xl bg-background/10 p-4 text-sm font-medium">
                  <Icon className="size-5 shrink-0 text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flavors */}
      <section id="sabores" className="mx-auto max-w-6xl px-5 py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Sabores
          </p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Elige tu tentación favorita</h2>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-4">
            {flavors.map((f) => (
              <article
                key={f.name}
                className="flex items-start gap-5 rounded-3xl border-2 border-foreground bg-card p-6 transition-transform hover:-translate-y-1 hover:shadow-pop"
              >
                <span className={`mt-1 size-10 shrink-0 rounded-full ${f.swatch}`} aria-hidden />
                <div>
                  <h3 className="text-2xl font-bold">{f.name}</h3>
                  <p className="mt-1 text-muted-foreground">{f.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="relative">
            <img
              src={boxPhoto}
              alt="Caja rosa con una docena de donas surtidas"
              width={1200}
              height={1200}
              loading="lazy"
              className="aspect-square w-full rounded-[2.5rem] object-cover shadow-soft"
            />
            <div className="absolute inset-x-6 bottom-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-background/95 p-5 shadow-soft backdrop-blur">
              <div>
                <p className="font-display text-xl font-bold">¿Una caja surtida?</p>
                <p className="text-sm text-muted-foreground">Arma la tuya con tus sabores favoritos.</p>
              </div>
              <Button asChild variant="sprinkle" size="lg" className="h-11">
                <a
                  href={whatsappUrl("¡Hola! Quiero pedir una caja de donas surtidas 🍩")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Pedir caja
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section id="promociones" className="bg-accent/40">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Promociones
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Más donas, más ahorro</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-3xl border-2 border-foreground bg-card p-8 shadow-pop">
              <GraduationCap className="size-9 text-primary" />
              <p className="mt-5 font-display text-6xl font-black text-primary">
                {STUDENT_DISCOUNT_PERCENT}%
              </p>
              <h3 className="mt-2 text-2xl font-bold">Descuento para estudiantes</h3>
              <p className="mt-2 flex-1 text-muted-foreground">
                Presenta tu credencial de estudiante vigente y obtén {STUDENT_DISCOUNT_PERCENT}% de
                descuento en tu pedido.
              </p>
              <Button asChild variant="sprinkle" size="lg" className="mt-6 h-11 self-start">
                <a
                  href={whatsappUrl(
                    `¡Hola! Soy estudiante y quiero hacer un pedido con el ${STUDENT_DISCOUNT_PERCENT}% de descuento 🎓🍩`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Pedir con descuento
                </a>
              </Button>
            </article>

            <article className="flex flex-col rounded-3xl border-2 border-foreground bg-card p-8 shadow-pop">
              <Package className="size-9 text-primary" />
              <p className="mt-5 font-display text-6xl font-black text-primary">
                {BULK_DISCOUNT_PERCENT}%
              </p>
              <h3 className="mt-2 text-2xl font-bold">Pedidos de más de {BULK_THRESHOLD} donas</h3>
              <p className="mt-2 flex-1 text-muted-foreground">
                Si tu pedido es de más de {BULK_THRESHOLD} donas, te damos {BULK_DISCOUNT_PERCENT}% de
                descuento. Ideal para fiestas, reuniones y antojos en grande.
              </p>
              <Button asChild variant="sprinkle" size="lg" className="mt-6 h-11 self-start">
                <a
                  href={whatsappUrl(
                    `¡Hola! Quiero un pedido de más de ${BULK_THRESHOLD} donas con el ${BULK_DISCOUNT_PERCENT}% de descuento 🍩`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Pedir en grande
                </a>
              </Button>
            </article>

            <article className="flex flex-col rounded-3xl border-2 border-foreground bg-chocolate p-8 text-chocolate-foreground shadow-pop">
              <Building2 className="size-9 text-accent" />
              <p className="mt-5 font-display text-4xl font-black italic text-accent">Empresas</p>
              <h3 className="mt-2 text-2xl font-bold">Pedidos y entregas especiales</h3>
              <p className="mt-2 flex-1 opacity-85">
                Armamos pedidos para tu empresa con un combinado de sabores a tu gusto y
                coordinamos entregas especiales para juntas, eventos y celebraciones.
              </p>
              <Button asChild variant="sprinkle" size="lg" className="mt-6 h-11 self-start">
                <a
                  href={whatsappUrl(
                    "¡Hola! Me interesa un pedido especial de donas para mi empresa con sabores combinados 🏢🍩",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon /> Cotizar para empresa
                </a>
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* Posadas */}
      <section id="posadas" className="relative overflow-hidden bg-chocolate text-chocolate-foreground">
        <img
          src={posadaPhoto}
          alt="Mesa de posada con donas de colores, piñata, papel picado y ponche"
          width={1280}
          height={960}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-linear-to-r from-chocolate via-chocolate/80 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-28">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
              <Star className="size-4" /> Temporada de posadas
            </span>
            <h2 className="mt-6 text-5xl font-black leading-[1.02] md:text-6xl">
              En tus posadas que no falte
              <span className="block italic text-primary">el sabor y la diversión.</span>
            </h2>
            <p className="mt-6 text-lg opacity-90">
              Lleva donas surtidas a tu posada familiar, de la oficina o con los amigos. Arma tu
              pedido con los sabores que más les gustan y nosotros nos encargamos del antojo.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                label="Pedir para mi posada"
                message="¡Hola! Quiero hacer un pedido de donas para mi posada 🎉🍩"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section id="pedido" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="text-center text-4xl font-bold md:text-5xl">Pedir es así de fácil</h2>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-card p-8 shadow-soft">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary font-display text-xl font-black text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="sprinkles">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center">
          <h2 className="text-5xl font-black leading-tight md:text-6xl">
            ¿Se te antojó? <span className="italic text-primary">Escríbenos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Mándanos un mensaje por WhatsApp y con gusto tomamos tu pedido.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppButton label={`Chatear al ${WHATSAPP_DISPLAY}`} />
          </div>
        </div>
      </section>

      <footer className="bg-chocolate text-chocolate-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm md:flex-row">
          <p className="font-display text-lg font-bold italic">Donas La tentación de hoy</p>
          <p className="opacity-75">© {new Date().getFullYear()} · Hechas a mano con cariño</p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-glow animate-wa-pulse transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="size-8" />
      </a>
    </div>
  );
}
