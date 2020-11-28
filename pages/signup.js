import React from 'react'
import Layout from '@global/Layout/'
import SignUpForm from '@global/SignUpForm/'

const SignUp = (props) => {
    return (
        <Layout title="Login" {...props}>
            <SignUpForm />
        </Layout>
    )
}


export default SignUp