# Portfolio motion

- Page entrance: existing staggered CSS reveals (520–860 ms, ease-out). Content is visible without animation.
- Floating note / icon: on mount, 7 px vertical drift, 4–4.5 s ease-in-out, two iterations then rests. No animation library or frame loop.
- Cards: on pointer hover, lift 4–5 px and rotate at most 0.6 degrees over 250 ms. Touch retains the static layout.
- Theme switch: thumb slides over 260 ms; native button supports keyboard activation. Theme persists locally and follows the system until explicitly chosen.
- Reduced motion: ambient movement and hover transforms are disabled; existing reveal durations are reduced. All links, documents, and content remain immediately available.
