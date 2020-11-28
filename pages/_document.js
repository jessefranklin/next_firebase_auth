import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {    
    render() {
        const { user } = this.props.__NEXT_DATA__.props
        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}