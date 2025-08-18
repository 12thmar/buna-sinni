# make sure main is up to date
git checkout main
git pull origin main

# create a release branch
git checkout -b release/$(date +%Y-%m-%d)

# (optional) bump version, update changelog, etc.
git commit -am "chore: bump version and release notes"

# push the release branch and open a PR -> base: prod, compare: release/2025-08-16
git push -u origin release/2025-08-16

