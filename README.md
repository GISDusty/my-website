# Dustin Stephens — Personal Website

This is a static website (HTML/CSS/JS) and is ready for GitHub Pages.

## Quick host setup

1. Initialize a git repo (if you haven’t already):

```bash
git init
git add .
git commit -m "Initial site version"
```

2. Create a new GitHub repository on your account, then connect it:

```bash
git branch -M main
git remote add origin git@github.com:YOUR_GITHUB_HANDLE/YOUR_REPO_NAME.git
git push -u origin main
```

3. In GitHub, open `Settings > Pages` and set:

- Source: `GitHub Actions`

GitHub will run the workflow in `.github/workflows/pages.yml` automatically on each push to `main` and publish `index.html` and related files.

## Local preview

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.
