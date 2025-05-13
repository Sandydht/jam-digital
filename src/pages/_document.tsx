import Document, { Html, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'

class MyDocument extends Document<{ nonce: string }> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { nonce?: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    const nonce = ctx.req?.headers['x-nonce'] as string | undefined;
    return { ...initialProps, nonce };
  }

  render() {
    const nonce = this.props.nonce;

    return (
      <Html lang='id'>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
