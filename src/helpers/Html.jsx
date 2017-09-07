import React from 'react';
import ReactDOM from 'react-dom/server';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

export default class Html extends React.Component {
  render() {
    const { assets, component, store, client } = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();
    const state = store.getState();
    state.apollo = client.getInitialState();

    return (
      <html lang="en-US">
        <head>
          { head.base.toComponent() }
          { head.title.toComponent() }
          { head.meta.toComponent() }
          { head.link.toComponent() }
          { head.script.toComponent() }

          { /* Favicons generated with the plugin */ }
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          { /* Styles (which will only be present in production. In dev, styles are embedded in JS */ }
          {
            Object.keys(assets.styles).map((style, key) =>
              <link href={assets.styles[style]} key={key} media="screen, projection" rel="stylesheet" type="text/css" />
            )
          }

          { /* Boostrap and App css?? */ }
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          {
            store &&
              <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__=${serialize(state)};` }} />
          }
          {
            Object.keys(assets.javascript).map((script, key) =>
              <script type="text/javascript" src={assets.javascript[script]} />
            )
          }
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  assets: PropTypes.shape({
    styles: PropTypes.objectOf(PropTypes.string),
    javascript: PropTypes.objectOf(PropTypes.string)
  }),
  component: PropTypes.node.isRequired,
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired
};

Html.defaultProps = {
  assets: { styles: [], javascript: [] },
};
