import LoginForm from '@global/LoginForm/'
import Layout from '@global/Layout/'

export default function Login(props) {
    return (
        <Layout title="Login" {...props}>
            <LoginForm />
        </Layout>
    )
}