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

## Checking Deployment Status

### 1. Enable GitHub Pages (if not done)
1. Go to your repository: https://github.com/godhavarigopalai-cpu/covergo-api-docs
2. Click **Settings** tab → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### 2. Check GitHub Actions Status
1. Go to the **Actions** tab in your repository
2. Look for the latest workflow run (should be "Deploy MkDocs to GitHub Pages")
3. Click on the workflow to see the build status
4. If it failed, check the error logs

### 3. Manual Deployment Trigger
If needed, you can manually trigger a deployment:
1. Go to **Actions** tab
2. Click **Deploy MkDocs to GitHub Pages**
3. Click **Run workflow** → **Run workflow**

## GitHub Actions Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Triggers on pushes to the `main` branch
- Builds the MkDocs site using Python 3.11
- Uses enhanced Material theme with dark/light mode
- Includes Mermaid diagrams with custom styling
- Deploys to GitHub Pages automatically
- Can also be triggered manually via the Actions tab

### Configuration Notes

The MkDocs configuration uses the default `docs/` directory structure with enhanced theming:
- **Material Theme** with indigo color scheme
- **Dark/Light mode toggle** for better user experience
- **Mermaid2 plugin** for professional diagram rendering
- **GitHub integration** with repository links

## Repository Structure

```
covergo-api-docs/
├── .github/workflows/deploy.yml    # GitHub Actions workflow
├── mkdocs.yml                      # MkDocs configuration
├── requirements.txt                # Python dependencies
├── token_introspection.json        # GraphQL schema data
└── docs/                           # Documentation source files
    ├── DEPLOYMENT.md               # Setup instructions
    ├── README.md                   # Project documentation
    ├── index.md                    # Home page
    ├── getting-started.md          # Getting started guide
    ├── authentication/
    │   ├── token.md               # token_2 API docs
    │   └── refreshtoken.md        # refreshToken API docs
    └── api-reference/
        ├── schema.md               # GraphQL schema reference
        └── mutations.md            # Available mutations list
```

## API Documentation Features

- **token_2 API**: Complete documentation with input arguments, response structure, and examples
- **refreshToken API**: Detailed refresh token functionality with error handling
- **GraphQL Schema**: Introspection-based documentation with real API structure
- **Material Theme**: Modern, responsive documentation interface

The documentation is now live and will automatically update whenever you push changes to the `main` branch!
