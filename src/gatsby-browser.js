exports.onRouteUpdate = ({ location = {} }) => {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof _czc === `function`) {
    window._czc.push([
      "_trackPageview",
      `${location.pathname}${location.search}${location.hash}`
    ]);
  }
};
