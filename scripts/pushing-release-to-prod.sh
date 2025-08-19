( cd frontend && npm ci --include=dev && npm run build )
git fetch origin
git checkout release/2025-08-17
git merge origin/prod      # or: git rebase origin/prod
# resolve any conflicts
 # quick sanity build
git push
