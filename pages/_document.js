import Document,  {  Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }


    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                      (function(){
                      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                      s1.async=true;
                      s1.src='https://embed.tawk.to/60cc20327f4b000ac03839d9/1f8elrhal';
                      s1.charset='UTF-8';
                      s1.setAttribute('crossorigin','*');
                      s0.parentNode.insertBefore(s1,s0);
                      })();
                      `,
                      }}
                    ></script>
                </body>
            </Html>
        )
    }
}
export default MyDocument
