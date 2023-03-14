import LoginContainer from '~/containers/LoginContainer';
import MainLayout from '~/layout/MainLayout';

export default function Login() {
  return (
    <MainLayout hideHeaderFooter>
      <LoginContainer />
    </MainLayout>
  );
}
