import React from "react";

type Props = {
  readonly htmlAttributes: JSX.IntrinsicElements["html"];
  readonly headComponents: JSX.Element;
  readonly bodyAttributes: JSX.IntrinsicElements["body"];
  readonly preBodyComponents: JSX.Element;
  readonly body: string;
  readonly postBodyComponents: JSX.Element;
};

const HTML: React.VFC<Props> = (props: Props) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>astarix</title>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
