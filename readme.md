## Hosted On
https://adarsh-dayanand-portfolio.netlify.app/

## Deployment

### Option 1
To deploy it to netlify, push the code to master branch

### Option 2
```
netlify login

rm -rf dist node_modules
npm install
npm run build

netlify deploy --prod --dir=dist
```
