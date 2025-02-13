# better-groupby 🎭

Is your JavaScript groupBy having an existential crisis about types? Does it wake you up at 3 AM screaming "undefined is not a function"? Well, throw away those anxiety meds because this TypeScript-powered groupBy is here to save your sanity!

🎪 Roll Up, Roll Up!

```ts
import { groupBy } from "better-groupby"; // Import happiness

// Your boring data (we'll fix that)
const circus = [
  { performer: "clown", skill: "juggling" },
  { performer: "acrobat", skill: "flying" },
  { performer: "clown", skill: "pratfalls" },
  { performer: "acrobat", skill: "defying death" },
];

// Group your circus performers (no animals were harmed)
const grouped = groupBy(circus, "performer");
// Look ma, no type errors! 🎪

// For the brave souls who like to live dangerously...
const circusExtravaganza = [
  { star: "Bob", act: { type: "fire-eating", danger: "very yes" } },
  { star: "Alice", act: { type: "lion-taming", danger: "much wow" } },
  { star: "Bob", act: { type: "fire-eating", danger: "still very yes" } },
];

// Group by nested properties like a coding ninja 🥷
const byAct = groupBy(circusExtravaganza, (item) => item.act.type);
// TypeScript: "I got your back, fam" 👍
```

Why This Is Better Than Your Regular groupBy

- ✨ Type-safe: Because runtime errors are sooo 2010
- 🎯 Precise: Like a Swiss watch, but for data grouping
- 🦸‍♂️ Heroic: Saves you from the villainous undefined
- 🧙‍♂️ Magical: Works with nested properties without summoning demons
  Made with ❤️ and probably too much coffee ☕

#### Warning: May cause excessive confidence in your TypeScript abilities and spontaneous high-fiving of nearby developers.
