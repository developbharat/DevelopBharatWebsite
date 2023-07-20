# Deployment Instructions

Current pipeline is setup to automatically deploy the application to vercel, incase we create a release on github. Steps to create a github release are mentioned in this document.

Use the below provided deployment instructions to deploy our website to main domain name at [https://www.developbharat.com](https://www.developbharat.com)

### Create Github Release

> TODO: In future we will be automating this step.

1. List existing tag

```sh
git tag --list
```

2. Create a repository release tag.

```sh
git checkout main
git tag 1.0.001
```

3. Upload the tag on github.

```sh
git push origin --tags
```

4. Visit Github Repository and manually create a release via
   [Github repository link](https://github.com/developbharat/mehra-records-entertainment)
