# kwjs-i18n-demo

A live demo app and reference guide for JavaScript internationalization (i18n),
presented at the Kitchener-Waterloo JavaScript meetup (KWJS) in April 2026.

The demo app is built with Vue 3, vue-i18n, and Vite, and covers the full surface
of the browser's built-in `Intl` API as well as the modern `Temporal` API for
date and time handling.

---

## What is i18n and why does it matter?

Internationalization (abbreviated **i18n** — 18 letters between the *i* and the *n*)
is the process of making an app ready to work correctly for users in different
locales — handling not just language translation but also number formats, date
formats, currencies, calendars, sort order, and more.

Getting i18n right means users see information in a language they understand and
in formats that are familiar to them. Getting it wrong is a strong negative signal
about software quality.

---

## The standards landscape

Several standards bodies define the data and rules that i18n depends on:

- **Unicode Consortium** — maintains the [CLDR (Common Locale Data Repository)](https://cldr.unicode.org/),
  which is the authoritative source of locale-specific data used by browsers and
  runtimes, and [ICU (International Components for Unicode)](https://icu.unicode.org/),
  a widely used i18n library.
- **BCP 47** — the standard governing locale identifier naming (e.g. `en-CA`, `fr-CA`,
  `de-DE`). A basic locale identifier combines an ISO 639 language code with an
  ISO 3166 country code.
- **ISO** — maintains [ISO 639 Language Codes](https://www.iso.org/iso-639-language-code),
  [ISO 3166 Country Codes](https://www.iso.org/iso-3166-country-codes.html), and
  [ISO 4217 Currency Codes](https://www.iso.org/iso-4217-currency-codes.html).
- **ECMA International** — responsible for the ECMAScript specification, including
  the built-in `Intl` object covered below.

---

## The `Intl` API — quick reference

The `Intl` object is built into every modern JavaScript runtime. It provides
locale-aware formatting and comparison without any external dependencies.

Full documentation: [MDN — Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

| Class | What it does |
|---|---|
| [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) | Formats dates and times for a locale |
| [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) | Formats numbers, currencies, percentages, and units |
| [`Intl.ListFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat) | Formats arrays as human-readable lists ("a, b, and c") |
| [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) | Formats relative time expressions ("3 minutes ago") |
| [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) | Determines the plural category for a number in a locale |
| [`Intl.DurationFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) | Formats durations ("1 year, 3 months, 2 days") with correct plurals |
| [`Intl.Collator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) | Locale-aware string comparison and sorting |
| [`Intl.DisplayNames`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) | Translates codes into display names (language, region, currency, calendar) |
| [`Intl.Locale`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) | Represents and interrogates a locale identifier |
| [`Intl.supportedValuesOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf) | Returns supported values for a given key (`"calendar"`, `"currency"`, `"timeZone"`, etc.) |

### Useful patterns

```js
// Format a number as currency
new Intl.NumberFormat('fr-CA', { style: 'currency', currency: 'CAD' }).format(1234567.89);

// Format a date
new Intl.DateTimeFormat('de-DE', { dateStyle: 'full' }).format(new Date());

// Sort German names correctly
const collator = new Intl.Collator('de', { collation: 'phonebk' });
names.sort(collator.compare);

// Relative time
new Intl.RelativeTimeFormat('en-CA', { numeric: 'auto' }).format(-1, 'day'); // "yesterday"

// Plural rules
new Intl.PluralRules('en-CA').select(1); // "one"
new Intl.PluralRules('en-CA').select(2); // "other"

// List formatting
new Intl.ListFormat('en-CA', { type: 'conjunction' }).format(['a', 'b', 'c']); // "a, b, and c"
```

### `Intl.DisplayNames` — supported types

Valid `type` values: `"calendar"`, `"currency"`, `"dateTimeField"`, `"language"`,
`"region"`, `"script"`.

**Not valid:** `"collation"`, `"numberingSystem"`, `"timeZone"`, `"unit"` — these
have no `DisplayNames` support despite being valid keys for `Intl.supportedValuesOf()`.

---

## The Temporal API

The legacy `Date` object has well-known problems — month indexing from zero,
poor timezone support, mutable instances, and an awkward API. The `Temporal`
API is its modern replacement.

Full documentation: [MDN — Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)

Key types:

- `Temporal.Now` — current instant, date, time, or zoned date-time
- `Temporal.ZonedDateTime` — a date and time with a timezone
- `Temporal.PlainDate` / `PlainTime` / `PlainDateTime` — date/time without timezone
- `Temporal.Duration` — a duration between two points in time
- `Temporal.Instant` — a fixed point on the timeline (like a UTC timestamp)

`Temporal` is shipping in major browsers but is not yet universally available —
check [caniuse.com](https://caniuse.com/temporal) for current support before
shipping without a polyfill. A polyfill is available if you need broader coverage:

```html
<script src="https://cdn.jsdelivr.net/npm/@js-temporal/polyfill/dist/index.umd.js"></script>
```

---

## Translation frameworks

Most i18n work requires both the `Intl` API (for formatting) and a translation
framework (for managing translated strings). Popular choices by framework:

| Environment | Library |
|---|---|
| Vue | [vue-i18n](https://vue-i18n.intlify.dev/) |
| React | [react-i18next](https://react.i18next.com/) (wrapper around i18next) |
| Angular | [@angular/localize](https://angular.io/guide/i18n-overview) (compile-time), [@ngx-translate/core](https://github.com/ngx-translate/core) (runtime) |
| Svelte | [svelte-i18n](https://github.com/kaisermann/svelte-i18n) |
| Plain JS | [i18next](https://www.i18next.com/), [FormatJS](https://formatjs.io/) |

### Common patterns across frameworks

- Translation strings stored in JSON or YAML files, one file per locale
- A translation function `t('my.key')` to look up strings
- Interpolation: `t('greeting', { name: 'Alice' })` → `"Hello, Alice!"`
- Plural handling via pipe-separated alternatives or ICU message format
- Lazy loading of translation files for better performance


---

### Detecting the user's locale in production

Most production apps do not offer a locale chooser — instead they detect the user's preferred locale from the browser. `navigator.language` gives the single preferred language (e.g. `"en-CA"`), while `navigator.languages` gives the full ranked list (e.g. `["en-CA", "en"]`). Both are populated automatically from the user's browser and OS language settings without any explicit action on the user's part. In production, `navigator.languages` is the more useful of the two — walk down the list and use the first locale your app supports, falling back to a sensible default:

```js
const supportedLocales = ['en-CA', 'fr-CA', 'de-DE'];
const defaultLocale = 'en-CA';

const preferred = navigator.languages.find(lang =>
  supportedLocales.includes(lang)
) ?? defaultLocale;
```

---

## Gotchas

These are hard-won lessons that will save you time.

### Vue / vue-i18n specific

- **Always use `locale.value`** (not `locale`) when passing the current locale
  to `Intl` constructors inside `<script setup>`. `locale` is a Vue ref; passing
  it directly gives you `[object Object]` as the locale string.
- **`tm()` vs `t()`** — use `tm('my.key', [], { returnObjects: true })` when
  your translation value is an array and you need the array back. `t()` will
  stringify it.
- **`Intl.PluralRules(locale)` bug** — same as above: `new Intl.PluralRules(locale)`
  will not work correctly; use `new Intl.PluralRules(locale.value)`.
- **Computed refs need `.value` in script** — if you wrap an `Intl` formatter in
  `computed()`, remember to call `moonFormatter.value.format(...)` in the script
  section. Vue auto-unwraps refs in templates but not in `<script setup>`.

### `Intl.DateTimeFormat`

- **`dateStyle`/`timeStyle` cannot be mixed with individual component options**
  such as `hour`, `minute`, `timeZoneName`, etc. Use one approach or the other
  in a given formatter instance.
- **`Intl.DateTimeFormat.format()` does not accept `Temporal.ZonedDateTime`
  directly.** Either call `.toLocaleString(locale, options)` on the
  `ZonedDateTime`, or extract `.toInstant().epochMilliseconds` and pass that.
- **`Temporal.ZonedDateTime.since()` requires matching timezone identifiers.**
  Mixing a named timezone (e.g. `America/Toronto`) with a fixed offset
  (e.g. `-04:00`) will throw when using day-or-larger units.

### `Intl.RelativeTimeFormat`

- Valid unit values: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`,
  `"hour"`, `"minute"`, `"second"` (singular and plural forms both accepted).

### `Intl.Collator`

- The `"phonebk"` collation (which treats ä/ö/ü as ae/oe/ue for sorting) only
  produces results different from `"standard"` when the locale is `de-DE`.
- `Array.sort()` is stable since ES2019 — when two items compare as equal under
  a collation, original array order is preserved.

### HTML

- **Set `<html lang="...">` in your base HTML.** An empty `lang=""` attribute
  will cause screen readers to misbehave. Use your app's default locale language
  as the baseline (e.g. `lang="en"`).

### General

- **`Intl.supportedValuesOf('locale')` does not exist** — there is no built-in
  way to enumerate all supported locale identifiers. This is a notable omission.
- **MDN documentation for `Intl` has gaps and inaccuracies** in places — when
  in doubt, test in the browser.
- **Determining the right currency for a locale** is not built into `Intl`.
  Options include the [`locale-currency`](https://www.npmjs.com/package/locale-currency)
  npm package, the Unicode CLDR data, or a hand-rolled lookup table.
- **Right-to-left languages** (Arabic, Hebrew, etc.) require CSS and layout
  changes beyond just translation. Check `new Intl.Locale("ar").textInfo.direction`
  — though note `textInfo` is not yet universally supported.
---

## Further reading

- [MDN — Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [MDN — Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [Unicode CLDR](https://cldr.unicode.org/)
- [BCP 47 language tags](https://www.ietf.org/rfc/rfc5646.txt)
- [vue-i18n documentation](https://vue-i18n.intlify.dev/)
- [i18next documentation](https://www.i18next.com/)
- [FormatJS documentation](https://formatjs.io/)
- [locale-currency npm package](https://www.npmjs.com/package/locale-currency)

---

*Presented at KWJS, Kitchener-Waterloo, April 2026.*
