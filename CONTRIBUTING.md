# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

## Prerequisites

- Minimal Node.js version 14.15.0
- [Gatsby CLI](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)



## Setup

Get a local copy of the website repository

```sh
git clone https://github.com/cmubtg/website.git
cd website
```

### Install Dependencies

Only required on the first run. Note: it will take a while for the package manager to install all modules.

```sh
npm install
```

You should now have **node_modules** appear in the sidebar.

## Access Locally

### Gatsby Updates

To get a local version running, input the following commands

```sh
gatsby clean
gatsby develop
```


[`gatsby clean`](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#clean) goes through and wipes out the cache.
[`gatsby develop`](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#develop) starts the development server.


In the default setting, you should now have a local version of the site running at [localhost:8000](http://localhost:8000). The admin site should also be running at [localhost:8000/admin](http://localhost:8000/admin).


### Netlify CMS Updates

After opening the [admin site](http://localhost:8000/admin). Create an account to access the information. The top of the page should look like this.

<img width="1418" alt="Screen Shot 2022-01-12 at 3 39 04 PM" src="https://user-images.githubusercontent.com/63127003/149218026-719cb169-f3b5-4c1e-bc67-d3dbdb2e6b38.png">

To add a new member, simple click on `New Members` and input the information accordingly.


## Pull Requests

All changes should be made in a branch before commiting to master. Please make sure to test your code locally before commiting to ensure that your change does not break the site.

1. Fork the repo.
2. Create a branch from `master`. Branches should be named with the user's andrewID and the issue they are resolving. For example, `dsyou_update_homepage_UI`.
3. Run [`gatsby build`](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#build) to compile the site and make it ready for deployment.
4. Run [`gatsby serve`](https://www.gatsbyjs.com/docs/reference/gatsby-cli/#serve) to serve the production build of the site.
5. Once you have confirmed your changes, you can make a pull request and a maintainer will review and accept it accordingly.

## License

By contributing to the Gatsby - Netlify CMS starter, you agree that your contributions will be licensed
under its [MIT license](LICENSE).
