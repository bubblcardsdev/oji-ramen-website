import FadeIn from "@/components/FadeIn";
import {
  addOns,
  business,
  desserts,
  fullAddress,
  menuNotes,
  ramen,
  type MenuItem,
} from "@/lib/business";

function Item({ item }: { item: MenuItem }) {
  return (
    <li className="py-3">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-base font-medium text-ink">
          {item.veg && (
            <span
              className="mr-2 inline-block h-2 w-2 rounded-full bg-green-600 align-middle"
              aria-label="Vegetarian"
            />
          )}
          {item.name}
          {item.isNew && (
            <span className="ml-2 rounded-full bg-ramen-red/15 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider text-ramen-red-dark">
              New
            </span>
          )}
        </h4>
        <span className="shrink-0 text-sm text-ink/80">&#8377;{item.price}</span>
      </div>
      {item.desc && <p className="mt-1 text-sm text-ink/60">{item.desc}</p>}
    </li>
  );
}

function Group({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div>
      <h3 className="font-display text-3xl text-ramen-red-dark">{title}</h3>
      <ul className="mt-3 divide-y divide-ink/10 border-t border-ink/10">
        {items.map((i) => (
          <Item key={i.name} item={i} />
        ))}
      </ul>
    </div>
  );
}

export default function RestaurantInfo() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name}, ${fullAddress}`,
  )}`;

  return (
    <>
      <section id="about" className="bg-cream px-6 py-20">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">About Oji Ramen</h2>
          <p className="mt-6 text-lg text-ink/70">{business.tagline}</p>
          <p className="mt-4 text-ink/70">
            Oji Ramen is a restaurant in Alwarpet, Chennai, serving ramen with
            home-made noodles, gyozas, add-ons and desserts, with vegetarian
            options across the menu.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-ink/70">
            {business.features.map((f) => (
              <li key={f} className="rounded-full border border-ink/15 px-4 py-1.5">
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      <section id="menu" className="bg-cream-soft px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-center font-display text-4xl text-ink sm:text-5xl">Menu</h2>
            <p className="mt-3 text-center text-sm text-ink/60">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-600 align-middle" />
              Vegetarian
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <FadeIn>
              <Group title="Ramen" items={ramen} />
            </FadeIn>
            <div className="flex flex-col gap-12">
              <FadeIn>
                <Group title="Add-ons" items={addOns} />
              </FadeIn>
              <FadeIn>
                <Group title="Desserts" items={desserts} />
              </FadeIn>
            </div>
          </div>
          <ul className="mt-10 space-y-1 text-center text-xs text-ink/50">
            {menuNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="visit" className="bg-cream px-6 py-20">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">Visit &amp; Contact</h2>
          <address className="mt-6 not-italic text-ink/70">
            <p className="font-medium text-ink">{business.name}</p>
            <p>{business.address.line1}</p>
            <p>
              {business.address.locality}, {business.address.city},{" "}
              {business.address.state} {business.address.postalCode}
            </p>
          </address>
          <p className="mt-4 text-ink/70">
            Phone:{" "}
            <a href={business.phoneHref} className="underline underline-offset-4 hover:text-ramen-red-dark">
              {business.phone}
            </a>
            <br />
            Email:{" "}
            <a href={`mailto:${business.email}`} className="underline underline-offset-4 hover:text-ramen-red-dark">
              {business.email}
            </a>
          </p>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ramen-red-dark"
          >
            Get directions
          </a>
        </FadeIn>
      </section>
    </>
  );
}
