# AlSawyTech — عرض فني ومقترح تنفيذ

Arabic RTL A4 proposal PDF for a construction-company management system.

## Files

- `index.html` — full proposal content (Egyptian Arabic)
- `styles.css` — A4 print styles (navy / gold / teal)
- `fonts/` — embedded Cairo fonts
- `assets/logo-placeholder.svg` — brand mark placeholder
- `build-pdf.sh` — Chrome headless PDF builder
- `AlSawyTech-Proposal.pdf` — print-ready output

## Rebuild

```bash
chmod +x build-pdf.sh
./build-pdf.sh
```

Requires Google Chrome. Output: `AlSawyTech-Proposal.pdf`.

## Notes

- No prices, costs, or payment terms are included.
- Phase durations use `[المدة]` placeholders.
- Technical terms remain in English inside Arabic copy.
