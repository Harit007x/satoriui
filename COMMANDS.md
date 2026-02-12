-> Npm Commands

- npm login --auth-type=legacy
- npm whoami
- npm publish --access public

-> Steps to create new component

- Created new component Package
- Add the component in registry.json
- Run pnpm registry:build
- Test is locally first
- Deploy if everything works fine

  "registries": {
  "@aceternity": "https://ui.aceternity.com/registry/{name}.json",
  "@satoriui": "https://satoriui.site/r/{name}.json"
  }

npx shadcn@latest add @satoriui/dotted-modern
npx shadcn@latest add http://localhost:3000/r/dotted-modern.json

-> Github login in wsl or linx
gh auth login
