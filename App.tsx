import { useEffect, useMemo, useState } from "react";

type Page = "home" | "how" | "brands" | "find" | "profile" | "account";
type IconName =
  | "arrow"
  | "check"
  | "chevron"
  | "edit"
  | "mail"
  | "menu"
  | "search"
  | "shield"
  | "spark"
  | "user"
  | "x";

const brands = [
  {
    name: "ZARA",
    cats: ["T-shirts", "Shirts", "Jeans", "Trousers", "Jackets", "Dresses", "Tops"],
    verified: true,
  },
  {
    name: "H&M",
    cats: ["T-shirts", "Shirts", "Jeans", "Hoodies", "Dresses", "Tops"],
    verified: true,
  },
  { name: "UNIQLO", cats: ["T-shirts", "Shirts", "Jeans", "Trousers", "Jackets"], verified: true },
  { name: "Levi's", cats: ["T-shirts", "Shirts", "Jeans", "Jackets"], verified: true },
  { name: "NIKE", cats: ["T-shirts", "Trousers", "Jackets", "Hoodies"], verified: true },
  { name: "adidas", cats: ["T-shirts", "Trousers", "Jackets", "Hoodies"], verified: true },
  { name: "PUMA", cats: ["T-shirts", "Trousers", "Jackets", "Hoodies"], verified: true },
  { name: "GAP", cats: ["T-shirts", "Shirts", "Jeans", "Hoodies", "Dresses"], verified: true },
  {
    name: "TOMMY HILFIGER",
    cats: ["T-shirts", "Shirts", "Jeans", "Jackets", "Dresses"],
    verified: true,
  },
  { name: "ALLEN SOLLY", cats: ["Shirts", "Trousers", "Jackets", "Tops"], verified: true },
  { name: "VAN HEUSEN", cats: ["Shirts", "Trousers", "Jackets", "Dresses"], verified: true },
  { name: "PETER ENGLAND", cats: ["Shirts", "Trousers", "Jackets"], verified: true },
  { name: "U.S. POLO ASSN.", cats: ["T-shirts", "Shirts", "Jeans", "Jackets"], verified: true },
  {
    name: "JACK & JONES",
    cats: ["T-shirts", "Shirts", "Jeans", "Jackets", "Hoodies"],
    verified: true,
  },
  { name: "CALVIN KLEIN", cats: ["T-shirts", "Shirts", "Jeans", "Tops"], verified: true },
  { name: "BIBA", cats: ["Dresses", "Tops", "Trousers"], verified: false },
  { name: "FABINDIA", cats: ["Shirts", "Trousers", "Dresses", "Tops"], verified: true },
  { name: "W FOR WOMAN", cats: ["Dresses", "Tops", "Trousers"], verified: false },
  { name: "DECATHLON", cats: ["T-shirts", "Trousers", "Jackets", "Hoodies"], verified: true },
  { name: "PEPE JEANS", cats: ["T-shirts", "Shirts", "Jeans", "Jackets"], verified: true },
  { name: "BONKERS CORNER", cats: ["T-shirts", "Hoodies", "Tops"], verified: false },
];

const categories = [
  { name: "T-shirts", glyph: "T" },
  { name: "Shirts", glyph: "S" },
  { name: "Jeans", glyph: "J" },
  { name: "Trousers", glyph: "TR" },
  { name: "Jackets", glyph: "JK" },
  { name: "Hoodies", glyph: "H" },
  { name: "Dresses", glyph: "D" },
  { name: "Tops", glyph: "TP" },
];

const measurements = {
  "Upper body": [
    ["Chest", "96"],
    ["Bust", "94"],
    ["Shoulder width", "44"],
    ["Neck", "38"],
    ["Sleeve length", "62"],
    ["Arm circumference", "31"],
  ],
  "Lower body": [
    ["Waist", "81"],
    ["Hips", "98"],
    ["Thigh", "57"],
    ["Inseam", "79"],
    ["Outseam", "104"],
  ],
  "General profile": [
    ["Height", "178"],
    ["Weight", "72"],
  ],
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14M14 6l6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    edit: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1-5 4-7 8-7s7 2 8 7" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <button className="logo" onClick={() => navigate("home")} aria-label="Universal Fit home">
      <span className="logo-mark">
        <i />
        <i />
        <i />
      </span>
      <span>
        UNIVERSAL <b>FIT</b>
      </span>
    </button>
  );
}

let navigate: (page: Page) => void = () => {};

function Header({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  navigate = (p) => {
    setPage(p);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const links: [string, Page][] = [
    ["Home", "home"],
    ["How It Works", "how"],
    ["Brands", "brands"],
    ["Find My Size", "find"],
  ];
  return (
    <header>
      <Logo />
      <nav className={open ? "open" : ""} aria-label="Primary navigation">
        {links.map(([label, id]) => (
          <button key={id} className={page === id ? "active" : ""} onClick={() => navigate(id)}>
            {label}
          </button>
        ))}
        <button className={page === "account" ? "active" : ""} onClick={() => navigate("account")}>
          Account
        </button>
      </nav>
      <div className="header-actions">
        <button className="text-button hide-mobile" onClick={() => navigate("account")}>
          Log in
        </button>
        <button className="dark-button compact hide-mobile" onClick={() => navigate("account")}>
          Create profile <Icon name="arrow" />
        </button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Icon name={open ? "x" : "menu"} size={22} />
        </button>
      </div>
    </header>
  );
}

function Mannequin({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`mannequin-scene ${small ? "small" : ""}`}
      aria-label="3D mannequin with measurement guides"
      role="img"
    >
      <div className="ambient-orb" />
      <div className="figure">
        <div className="head" />
        <div className="neck" />
        <div className="torso" />
        <div className="arm left" />
        <div className="arm right" />
        <div className="leg left" />
        <div className="leg right" />
        <div className="measure-ring ring-1">
          <span>CHEST</span>
        </div>
        <div className="measure-ring ring-2">
          <span>WAIST</span>
        </div>
        <div className="measure-ring ring-3">
          <span>HIPS</span>
        </div>
      </div>
      {!small && (
        <>
          <div className="float-card metric-card one">
            <span>Chest</span>
            <strong>
              96.2 <small>cm</small>
            </strong>
            <i>Within range</i>
          </div>
          <div className="float-card metric-card two">
            <span>Perfect fit</span>
            <strong>94%</strong>
            <i>Profile confidence</i>
          </div>
          <div className="float-card scan-card">
            <Icon name="spark" />
            <span>
              Profile scan
              <br />
              <b>12 measures saved</b>
            </span>
          </div>
        </>
      )}
      <div className="pedestal" />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>INTELLIGENT SIZING, SIMPLIFIED</Eyebrow>
          <h1>
            One Profile.
            <br />
            Every Brand.
            <br />
            <em>Your Perfect Fit.</em>
          </h1>
          <p>
            Save your measurements once and discover your perfect size across the brands you love.
          </p>
          <div className="button-row">
            <button className="dark-button" onClick={() => navigate("find")}>
              Find My Size <Icon name="arrow" />
            </button>
            <button className="outline-button" onClick={() => navigate("how")}>
              How It Works
            </button>
          </div>
          <div className="trust-row">
            <span>
              <Icon name="check" /> 20+ brands
            </span>
            <span>
              <Icon name="shield" /> Private by design
            </span>
            <span>
              <Icon name="spark" /> Verified charts
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-label">UF / BODY PROFILE 01</div>
          <Mannequin />
          <div className="orbit-label">
            PRECISION
            <br />
            MEASUREMENT
          </div>
        </div>
      </section>

      <section className="brand-strip">
        <p>ACCURATE SIZING ACROSS THE BRANDS YOU LOVE</p>
        <div>
          {["ZARA", "H&M", "UNIQLO", "Levi's", "NIKE", "adidas"].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </section>

      <section className="section how-preview">
        <div className="section-head">
          <div>
            <Eyebrow>EFFORTLESS BY DESIGN</Eyebrow>
            <h2>
              Your size, decoded
              <br />
              in three simple steps.
            </h2>
          </div>
          <p>
            No more guessing between size charts. Your profile translates seamlessly from one brand
            to the next.
          </p>
        </div>
        <div className="steps-grid">
          {[
            [
              "01",
              "Create your profile",
              "Add your measurements once. They stay private, secure and ready to use.",
            ],
            [
              "02",
              "Choose any brand",
              "Explore verified size charts from leading global and local fashion brands.",
            ],
            [
              "03",
              "Meet your perfect fit",
              "Receive an instant recommendation with confidence and fit guidance.",
            ],
          ].map((s, i) => (
            <article className={`step-card s${i + 1}`} key={s[0]}>
              <span>{s[0]}</span>
              <div className="step-visual">
                {i === 0 ? (
                  <div className="mini-rings">
                    <i />
                    <i />
                    <i />
                  </div>
                ) : i === 1 ? (
                  <div className="brand-stack">
                    <b>Z</b>
                    <b>U</b>
                    <b>L</b>
                  </div>
                ) : (
                  <div className="size-orb">
                    M<small>94% MATCH</small>
                  </div>
                )}
              </div>
              <h3>{s[1]}</h3>
              <p>{s[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="measure-once">
        <div className="texture-panel">
          <div className="glass-stat">
            <strong>12</strong>
            <span>
              measurements
              <br />
              one universal profile
            </span>
          </div>
          <div className="chrome-sphere" />
        </div>
        <div className="measure-copy">
          <Eyebrow>MEASURE ONCE. USE EVERYWHERE.</Eyebrow>
          <h2>
            Your body doesn't change between brands. <em>Their sizing does.</em>
          </h2>
          <p>
            Universal Fit translates your unique measurements into brand-specific recommendations,
            so you can choose with confidence every time.
          </p>
          <ul>
            <li>
              <Icon name="check" /> Precise recommendations, not generic guesses
            </li>
            <li>
              <Icon name="check" /> Your preferred fit, always considered
            </li>
            <li>
              <Icon name="check" /> Verified and regularly reviewed size charts
            </li>
          </ul>
          <button className="text-link" onClick={() => navigate("profile")}>
            Build your measurement profile <Icon name="arrow" />
          </button>
        </div>
      </section>

      <section className="section benefits">
        <div className="section-head">
          <div>
            <Eyebrow>WHY UNIVERSAL FIT</Eyebrow>
            <h2>Confidence in every choice.</h2>
          </div>
        </div>
        <div className="benefit-grid">
          {[
            [
              "01",
              "Fewer fit surprises",
              "Know how an item is designed to fit before choosing your size.",
            ],
            [
              "02",
              "Less time comparing",
              "No more opening tabs and decoding inconsistent size tables.",
            ],
            [
              "03",
              "A lighter footprint",
              "Accurate sizing means fewer avoidable returns and less waste.",
            ],
            [
              "04",
              "You stay in control",
              "Your body profile is private and can be changed or removed anytime.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="cta-ring" />
      <Eyebrow>YOUR FIT, EVERYWHERE</Eyebrow>
      <h2>
        Stop guessing.
        <br />
        <em>Start knowing.</em>
      </h2>
      <p>Create your Universal Fit profile in under three minutes.</p>
      <button className="light-button" onClick={() => navigate("profile")}>
        Create My Fit Profile <Icon name="arrow" />
      </button>
    </section>
  );
}

function FindSize() {
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState(brands[0]);
  const [category, setCategory] = useState("T-shirts");
  const [search, setSearch] = useState("");
  const visible = brands.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()));
  const chooseBrand = (b: (typeof brands)[number]) => {
    setBrand(b);
    setCategory(b.cats[0]);
    setStep(2);
  };
  return (
    <main className="inner-page find-page">
      <div className="page-title">
        <Eyebrow>PERSONAL FIT FINDER</Eyebrow>
        <h1>Find your size.</h1>
        <p>Three steps. One precise recommendation.</p>
      </div>
      <div className="progress">
        {[1, 2, 3].map((n) => (
          <button
            className={step >= n ? "done" : ""}
            key={n}
            onClick={() => n <= step && setStep(n)}
          >
            <span>{step > n ? <Icon name="check" /> : n}</span>
            <b>{["Choose brand", "Select category", "Your fit"][n - 1]}</b>
          </button>
        ))}
      </div>
      <div className="finder-shell">
        {step === 1 && (
          <section className="finder-content">
            <div className="finder-heading">
              <div>
                <span>STEP 01</span>
                <h2>Which brand are you exploring?</h2>
              </div>
              <label className="search">
                <Icon name="search" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search brands"
                />
              </label>
            </div>
            <div className="brand-grid">
              {visible.map((b) => (
                <button key={b.name} onClick={() => chooseBrand(b)} className="brand-card">
                  <span className="brand-word">{b.name}</span>
                  <i className={b.verified ? "verified" : ""}>
                    {b.verified ? "VERIFIED CHART" : "IN PREPARATION"}
                  </i>
                  <Icon name="arrow" />
                </button>
              ))}
            </div>
          </section>
        )}
        {step === 2 && (
          <section className="finder-content">
            <button className="back-link" onClick={() => setStep(1)}>
              ← Change brand
            </button>
            <div className="finder-heading">
              <div>
                <span>STEP 02 · {brand.name}</span>
                <h2>What are you sizing?</h2>
              </div>
            </div>
            <div className="category-grid">
              {categories
                .filter((c) => brand.cats.includes(c.name))
                .map((c) => (
                  <button
                    key={c.name}
                    className={category === c.name ? "selected" : ""}
                    onClick={() => setCategory(c.name)}
                  >
                    <div className={`garment garment-${c.glyph.length}`}>{c.glyph}</div>
                    <span>{c.name}</span>
                    <i>
                      <Icon name="check" />
                    </i>
                  </button>
                ))}
            </div>
            <div className="finder-footer">
              <p>Using your saved profile · Regular fit</p>
              <button className="dark-button" onClick={() => setStep(3)}>
                Get My Size <Icon name="arrow" />
              </button>
            </div>
          </section>
        )}
        {step === 3 && (
          <Recommendation brand={brand.name} category={category} onReset={() => setStep(1)} />
        )}
      </div>
    </main>
  );
}

function Recommendation({
  brand,
  category,
  onReset,
}: {
  brand: string;
  category: string;
  onReset: () => void;
}) {
  return (
    <section className="result">
      <div className="result-top">
        <div>
          <span className="verified-pill">
            <Icon name="check" /> CHART VERIFIED
          </span>
          <p>
            {brand} · {category} · Regular fit
          </p>
          <h2>Your best fit is</h2>
        </div>
        <button className="close-result" onClick={onReset}>
          Start over
        </button>
      </div>
      <div className="result-grid">
        <div className="size-display">
          <div className="size-halo" />
          <span>RECOMMENDED SIZE</span>
          <strong>M</strong>
          <div className="confidence">
            <b>94%</b>
            <span>match confidence</span>
          </div>
        </div>
        <div className="fit-notes">
          <Eyebrow>FIT INTELLIGENCE</Eyebrow>
          <h3>Designed to feel just right.</h3>
          <p>
            Size M aligns closely with your chest and shoulder profile. Expect a clean, regular
            silhouette with comfortable movement through the body.
          </p>
          <div className="alternative">
            <span>Prefer a different feel?</span>
            <div>
              <button>
                S <small>Closer fit</small>
              </button>
              <button>
                L <small>Relaxed fit</small>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="comparison">
        <div>
          <h3>Your measurements vs. {brand}</h3>
          <p>Values shown in centimeters</p>
        </div>
        <div className="comparison-table">
          {[
            ["Chest", "96", "94–99", "Ideal"],
            ["Waist", "81", "80–84", "Ideal"],
            ["Shoulders", "44", "43–45", "Ideal"],
          ].map((r) => (
            <div key={r[0]}>
              <b>{r[0]}</b>
              <span>{r[1]}</span>
              <span>{r[2]}</span>
              <i>
                <Icon name="check" /> {r[3]}
              </i>
            </div>
          ))}
          <div className="table-labels">
            <b>MEASUREMENT</b>
            <span>YOU</span>
            <span>BRAND M</span>
            <i>FIT</i>
          </div>
        </div>
      </div>
      <div className="result-actions">
        <button className="outline-button" onClick={() => navigate("profile")}>
          Update measurements
        </button>
        <button className="dark-button" onClick={() => navigate("brands")}>
          Explore another brand <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    [
      "01",
      "Measure yourself once",
      "Add 12 simple body measurements using our guided profile. No special equipment—just a soft tape measure.",
      "measure",
    ],
    [
      "02",
      "Choose a fashion brand",
      "Search our growing directory of global and local brands, each with mapped and verified charts.",
      "brand",
    ],
    [
      "03",
      "Select a category",
      "Choose exactly what you are sizing. We account for the different cut of a shirt, trouser, dress or jacket.",
      "cloth",
    ],
    [
      "04",
      "Get your recommended size",
      "See your best size, confidence score, fit explanation and alternatives—instantly.",
      "size",
    ],
  ];
  return (
    <main className="inner-page how-page">
      <div className="page-title wide">
        <Eyebrow>HOW UNIVERSAL FIT WORKS</Eyebrow>
        <h1>
          From your measurements
          <br />
          to <em>the perfect fit.</em>
        </h1>
        <p>A precise, private process designed to end size-chart confusion.</p>
      </div>
      <section className="journey">
        {steps.map((s, i) => (
          <article key={s[0]} className={i % 2 ? "reverse" : ""}>
            <div className="journey-visual">
              <span>{s[0]}</span>
              {s[4] === "measure" ? (
                <div className="measure-object">
                  <i />
                  <i />
                  <i />
                </div>
              ) : s[4] === "brand" ? (
                <div className="cube">
                  <b>Z</b>
                </div>
              ) : s[4] === "cloth" ? (
                <div className="shirt-object">UF</div>
              ) : (
                <div className="result-object">
                  M<small>94% MATCH</small>
                </div>
              )}
            </div>
            <div className="journey-copy">
              <span>STEP {s[0]}</span>
              <h2>{s[1]}</h2>
              <p>{s[2]}</p>
              {i === 0 && (
                <button className="text-link" onClick={() => navigate("profile")}>
                  View measurement guide <Icon name="arrow" />
                </button>
              )}
            </div>
          </article>
        ))}
      </section>
      <CTA />
    </main>
  );
}

function Brands() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const filtered = brands.filter(
    (b) =>
      b.name.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "All" || b.cats.includes(filter)),
  );
  return (
    <main className="inner-page brands-page">
      <div className="page-title">
        <Eyebrow>BRAND DIRECTORY</Eyebrow>
        <h1>
          One profile.
          <br />
          <em>A world of brands.</em>
        </h1>
        <p>Explore supported size charts and categories.</p>
      </div>
      <div className="directory-tools">
        <label className="search large">
          <Icon name="search" />
          <input
            placeholder="Search all brands"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="filters">
          {["All", "T-shirts", "Jeans", "Dresses", "Jackets"].map((f) => (
            <button className={filter === f ? "active" : ""} onClick={() => setFilter(f)} key={f}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="directory-grid">
        {filtered.map((b, i) => (
          <article key={b.name}>
            <div className="directory-logo">{b.name}</div>
            <div className="directory-meta">
              <i className={b.verified ? "verified" : ""}>
                {b.verified ? (
                  <>
                    <Icon name="check" /> VERIFIED
                  </>
                ) : (
                  "CHART IN PREPARATION"
                )}
              </i>
              <h3>{b.name}</h3>
              <p>
                {b.cats.slice(0, 4).join(" · ")}
                {b.cats.length > 4 ? ` +${b.cats.length - 4}` : ""}
              </p>
            </div>
            {b.verified && (
              <button onClick={() => navigate("find")} aria-label={`Find your ${b.name} size`}>
                <Icon name="arrow" />
              </button>
            )}
            <span className="index">{String(i + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </div>
    </main>
  );
}

function Profile() {
  const [unit, setUnit] = useState<"CM" | "IN">("CM");
  const [fit, setFit] = useState("Regular");
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.values(measurements)
      .flat()
      .reduce((all, [name, value]) => ({ ...all, [name]: value }), {}),
  );
  const displayValue = (name: string) =>
    unit === "IN" && name !== "Weight" ? (Number(values[name]) / 2.54).toFixed(1) : values[name];
  const updateValue = (name: string, next: string) => {
    const normalized =
      unit === "IN" && name !== "Weight" ? String((Number(next) * 2.54).toFixed(1)) : next;
    setValues((current) => ({ ...current, [name]: normalized }));
  };
  return (
    <main className="inner-page profile-page">
      <div className="profile-header">
        <div>
          <Eyebrow>MEASUREMENT PROFILE</Eyebrow>
          <h1>
            Your dimensions,
            <br />
            <em>beautifully defined.</em>
          </h1>
        </div>
        <div className="profile-score">
          <span>PROFILE COMPLETION</span>
          <strong>92%</strong>
          <i>
            <b />
          </i>
        </div>
      </div>
      <div className="profile-layout">
        <aside>
          <Mannequin small />
          <div className="fit-select">
            <span>PREFERRED FIT</span>
            <div>
              {["Slim", "Regular", "Relaxed", "Oversized"].map((f) => (
                <button className={fit === f ? "active" : ""} onClick={() => setFit(f)} key={f}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </aside>
        <section className="measurement-panel">
          <div className="panel-top">
            <div>
              <h2>Your measurements</h2>
              <p>Last updated today</p>
            </div>
            <div className="unit-toggle">
              <button className={unit === "CM" ? "active" : ""} onClick={() => setUnit("CM")}>
                CM
              </button>
              <button className={unit === "IN" ? "active" : ""} onClick={() => setUnit("IN")}>
                IN
              </button>
            </div>
          </div>
          {Object.entries(measurements).map(([group, items]) => (
            <div className="measure-group" key={group}>
              <h3>{group}</h3>
              <div>
                {items.map(([name]) => (
                  <label key={name}>
                    <span>{name}</span>
                    <div>
                      <input
                        aria-label={name}
                        value={displayValue(name)}
                        inputMode="decimal"
                        onChange={(event) => updateValue(name, event.target.value)}
                      />
                      <small>{name === "Weight" ? "kg" : unit.toLowerCase()}</small>
                      <Icon name="edit" />
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="dark-button full" onClick={() => navigate("account")}>
            Update Measurements <Icon name="arrow" />
          </button>
        </section>
      </div>
    </main>
  );
}

function Account() {
  const [logged, setLogged] = useState(true);
  if (!logged)
    return (
      <main className="inner-page login-page">
        <div className="login-card">
          <Logo />
          <Eyebrow>WELCOME BACK</Eyebrow>
          <h1>
            Your fit profile
            <br />
            is waiting.
          </h1>
          <label>
            Email address
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="dark-button full" onClick={() => setLogged(true)}>
            Log in <Icon name="arrow" />
          </button>
          <p>
            New to Universal Fit? <button onClick={() => setLogged(true)}>Create profile</button>
          </p>
        </div>
      </main>
    );
  return (
    <main className="inner-page account-page">
      <div className="account-welcome">
        <div>
          <Eyebrow>MY ACCOUNT</Eyebrow>
          <h1>
            Good morning,
            <br />
            <em>Alex.</em>
          </h1>
          <p>Your fit profile is ready to use.</p>
        </div>
        <div className="avatar">AM</div>
      </div>
      <div className="account-grid">
        <section className="identity-card">
          <div className="card-heading">
            <span>PERSONAL DETAILS</span>
            <button>
              <Icon name="edit" />
            </button>
          </div>
          <div className="identity">
            <div className="avatar small">AM</div>
            <div>
              <h3>Alex Morgan</h3>
              <p>
                <Icon name="mail" /> alex.morgan@example.com
              </p>
            </div>
          </div>
          <div className="consent">
            <Icon name="shield" />
            <div>
              <b>Data consent active</b>
              <span>Your measurements are private and protected.</span>
            </div>
            <Icon name="check" />
          </div>
        </section>
        <section className="completion-card">
          <span>PROFILE COMPLETION</span>
          <div className="completion-ring">
            <strong>
              92<small>%</small>
            </strong>
          </div>
          <h3>Almost perfect.</h3>
          <p>Add your arm circumference to improve recommendations.</p>
          <button className="outline-button" onClick={() => navigate("profile")}>
            Complete profile
          </button>
        </section>
        <section className="summary-card">
          <div className="card-heading">
            <span>SAVED MEASUREMENTS</span>
            <button onClick={() => navigate("profile")}>
              <Icon name="edit" />
            </button>
          </div>
          <div className="summary-list">
            {[
              ["Chest", "96 cm"],
              ["Waist", "81 cm"],
              ["Hips", "98 cm"],
              ["Height", "178 cm"],
              ["Fit", "Regular"],
            ].map((x) => (
              <div key={x[0]}>
                <span>{x[0]}</span>
                <b>{x[1]}</b>
              </div>
            ))}
          </div>
          <button className="text-link" onClick={() => navigate("profile")}>
            View all 13 measurements <Icon name="arrow" />
          </button>
        </section>
        <section className="account-action">
          <div>
            <Eyebrow>READY WHEN YOU ARE</Eyebrow>
            <h2>
              Find your size
              <br />
              in any brand.
            </h2>
            <p>Your profile will be matched against verified brand charts.</p>
          </div>
          <button className="light-button" onClick={() => navigate("find")}>
            Find My Size <Icon name="arrow" />
          </button>
        </section>
      </div>
      <button className="logout" onClick={() => setLogged(false)}>
        Log out
      </button>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <Logo />
        <p>
          Know your size.
          <br />
          In every brand.
        </p>
      </div>
      <div>
        <span>EXPLORE</span>
        <button onClick={() => navigate("how")}>How it works</button>
        <button onClick={() => navigate("brands")}>Brands</button>
        <button onClick={() => navigate("find")}>Find my size</button>
      </div>
      <div>
        <span>PROFILE</span>
        <button onClick={() => navigate("profile")}>Measurements</button>
        <button onClick={() => navigate("account")}>My account</button>
        <button>Privacy</button>
      </div>
      <div className="footer-note">
        <b>UNIVERSAL FIT</b>
        <small>
          © 2025 UNIVERSAL FIT
          <br />
          Designed for a better fit.
        </small>
      </div>
    </footer>
  );
}

export default function App() {
  const getPage = () => {
    const hash = location.hash.slice(1) as Page;
    return ["home", "how", "brands", "find", "profile", "account"].includes(hash) ? hash : "home";
  };
  const [page, setPage] = useState<Page>(getPage);
  useEffect(() => {
    const onPop = () => setPage(getPage());
    addEventListener("popstate", onPop);
    return () => removeEventListener("popstate", onPop);
  }, []);
  const changePage = (p: Page) => {
    setPage(p);
    history.pushState(null, "", `#${p}`);
  };
  const content = useMemo(
    () =>
      ({
        home: <Home />,
        how: <How />,
        brands: <Brands />,
        find: <FindSize />,
        profile: <Profile />,
        account: <Account />,
      })[page],
    [page],
  );
  return (
    <div className="app">
      <Header page={page} setPage={changePage} />
      {content}
      <Footer />
    </div>
  );
}
