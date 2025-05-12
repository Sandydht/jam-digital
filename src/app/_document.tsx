'use client'

// pages/_document.tsx
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = ctx.res?.getHeader('x-nonce') as string;

    return {
      ...initialProps,
      nonce,
    };
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const nonce = this.props.nonce;

    console.log('nonce: ', nonce);

    return (
      <Html>
        <Head />
        <body>
          <Main />
          {/* Gunakan nonce di sini */}
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
