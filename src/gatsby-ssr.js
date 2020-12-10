import React from "react";
exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  { siteId = "", head = false }
) => {
  if (process.env.NODE_ENV === `production` && siteId) {
    const CNZZ_ANALYTICS_SCRIPT = (
      <script
        key={`gatsby-plugin-cnzz-script`}
        dangerouslySetInnerHTML={{
          __html: `
            var cnzz_s_tag = document.createElement('script');
            cnzz_s_tag.type = 'text/javascript';
            cnzz_s_tag.async = true;
            cnzz_s_tag.charset = 'utf-8';
            cnzz_s_tag.src = '//w.cnzz.com/c.php?id=${siteId}&async=1';
            var root_s = document.getElementsByTagName('script')[0];
            root_s.parentNode.insertBefore(cnzz_s_tag, root_s);
              `
        }}
      />
    );
    const setComponents = head ? setHeadComponents : setPostBodyComponents;
    setComponents([CNZZ_ANALYTICS_SCRIPT]);
  }
};
