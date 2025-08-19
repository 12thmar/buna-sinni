#git branch -D release/2025-08-18
#git push origin --delete release/2025-08-18
git fetch origin
git checkout release/2025-08-17
( cd frontend && npm ci --include=dev && npm run build )
git merge origin/prod      # or: git rebase origin/prod
# resolve any conflicts
 # quick sanity build
git push
