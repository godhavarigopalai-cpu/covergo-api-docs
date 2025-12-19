# Deployment Instructions

## GitHub Pages Setup

The MkDocs documentation has been pushed to the repository with GitHub Actions configured for automatic deployment. Follow these steps to enable GitHub Pages:

### 1. Enable GitHub Pages
1. Go to your repository: https://github.com/godhavarigopalai-cpu/covergo-api-docs
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### 2. Trigger Deployment
The deployment will automatically trigger on the next push to the `main` branch, or you can:
1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Click **Re-run jobs** if needed

### 3. Access Your Documentation
Once deployed, your documentation will be available at:
```
https://godhavarigopalai-cpu.github.io/covergo-api-docs/
```

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Install dependencies
pip install -r requirements.txt

# Build the site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## GitHub Actions Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Triggers on pushes to the `main` branch
- Builds the MkDocs site using Python 3.11
- Deploys to GitHub Pages
- Can also be triggered manually via the Actions tab

## Repository Structure

```
covergo-api-docs/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── mkdocs.yml                      # MkDocs configuration
├── docs/                           # Documentation files
│   ├── index.md
│   ├── getting-started.md
│   ├── authentication/
│   │   ├── token.md               # token_2 API documentation
│   │   └── refreshtoken.md        # refreshToken API documentation
│   └── api-reference/
│       ├── schema.md
│       └── mutations.md
├── requirements.txt                # Python dependencies
└── README.md                       # Project documentation
```

## API Documentation Features

- **token_2 API**: Complete documentation with input arguments, response structure, and examples
- **refreshToken API**: Detailed refresh token functionality with error handling
- **GraphQL Schema**: Introspection-based documentation with real API structure
- **Material Theme**: Modern, responsive documentation interface

The documentation is now live and will automatically update whenever you push changes to the `main` branch!
