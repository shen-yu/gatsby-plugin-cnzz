# gatsby-plugin-cnzz
Add CNZZ Analytics to your Gatsby site.

## Install

`npm install --save gatsby-plugin-cnzz`

## How to use in gatsby


```javascript
// gatsby-config.js
plugins: [
  .
  .
  .
  {
    resolve: `gatsby-plugin-cnzz`,
    options: {
	    // cnzz analytics siteId
      siteId: "YOUR_CNZZ_ANALYTICS_SITE_ID",
      // Put analytics script in the head instead of the body [default:false]
      head: false,
    },
  },
  .
  .
  .
];
```

## How to get the `siteId`

![get the siteId screen shoot](tip.png)