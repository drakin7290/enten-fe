import GameContainer from '~/containers/GameContainer';
import PlayGameContainer from '~/containers/PlayGameContainer';
import MainLayout from '~/layout/MainLayout';

export default function Games() {
  return (
    <MainLayout>
      {/* <GameContainer /> */}
      <PlayGameContainer />
    </MainLayout>
  );
}
