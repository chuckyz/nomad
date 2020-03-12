import Document, { Head, Main, NextScript } from 'next/document'
import HashiHead from '@hashicorp/react-head'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <HashiHead
          is={Head}
          siteName="Nomad by HashiCorp"
          description="Nomad is a highly available, distributed, data-center aware cluster and application scheduler designed to support the modern datacenter with support for long-running services, batch jobs, and much more."
          image="https://www.nomadproject.io/img/og-image.png"
          stylesheet={[
            { href: '/css/nprogress.css' },
            {
              href:
                'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap'
            }
          ]}
          icon={[{ href: '/favicon.ico' }]}
          preload={[
            { href: '/fonts/klavika/medium.woff2', as: 'font' },
            { href: '/fonts/gilmer/light.woff2', as: 'font' },
            { href: '/fonts/gilmer/regular.woff2', as: 'font' },
            { href: '/fonts/gilmer/medium.woff2', as: 'font' },
            { href: '/fonts/gilmer/bold.woff2', as: 'font' },
            { href: '/fonts/metro-sans/book.woff2', as: 'font' },
            { href: '/fonts/metro-sans/regular.woff2', as: 'font' },
            { href: '/fonts/metro-sans/semi-bold.woff2', as: 'font' },
            { href: '/fonts/metro-sans/bold.woff2', as: 'font' },
            { href: '/fonts/dejavu/mono.woff2', as: 'font' }
          ]}
        />
        <body>
          <Main />
          <NextScript />
          <script
            noModule
            dangerouslySetInnerHTML={{
              __html: `window.MSInputMethodContext && document.documentMode && document.write('<script src="/ie-custom-properties.js"><\\x2fscript>');`
            }}
          />
        </body>
      </html>
    )
  }
}
