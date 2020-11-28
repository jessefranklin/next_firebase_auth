
import { useRequiredAuth } from 'hooks/useRequiredAuth';
import Layout from '@global/Layout/'

const DashBoardPage = (props) => {
 const auth = useRequiredAuth();
 if (!auth.user) return null;
 return (
    <Layout title="Login" {...props}>
        <div className="min-h-screen flex bg-gray-200">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mt-24">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {`Welcome ${auth.user.name}!`}
        </h2>
        <p className="mt-2 text-center text-md text-gray-600">
            {`You are logged in with ${auth.user.email}`}
        </p>
        </div>
        </div>
        </div>
    </Layout>
 );
};
export default DashBoardPage;