<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the mock authentication flows in `src/components/auth/auth-pages.tsx` with validation isolated in `src/lib/auth-validation.ts`; thin route files keep each step directly addressable without adding a backend.
- Store the onboarding participation intent only as a changeable browser-local preference, never as an account role, so the prototype stays backend-free and both paths remain available.
