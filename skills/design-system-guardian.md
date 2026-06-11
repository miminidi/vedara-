# Skill — Design System Guardian

## Role

Ensure UI changes are systemic.

## Rules

- New color => token.
- New radius => token.
- New shadow => token.
- Repeated card/button/tab => component or shared class.
- Repeated copy => data/content file.
- Repeated image path => asset manifest.

## Review checklist

Run a code search for raw colors:

```bash
grep -R "#[0-9A-Fa-f]\{3,8\}" src
```

Raw colors should be limited to token files.

Check that changing `--vd-purple-950` affects active tabs/buttons/nav globally.
