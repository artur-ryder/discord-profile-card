import './App.css';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
        <UserProfile
            avatar_img='https://cdn.discordapp.com/avatars/769618105990643803/a_1e0f47e31cbbf39caec3d0a1bcfafec4.gif?size=80'
            username='Vordlex'
            status='online'
            discriminator={1000}
            createdAt={Date.now()}
            bannerColor='9e9ffe'
            aboutMe="Some about me here"
            activity={{
               title: 'Nagatoro',
               description: 'Nagatoro',
               state: 'Nagatoro',
               largeImageKey: 'https://cdn.discordapp.com/attachments/918527756692762674/1070102395687796766/image.png',
               smallImageKey: 'https://cdn.discordapp.com/attachments/918527756692762674/1070102431511359649/image.png'
            }}
        />
    </div>
  );
}

export default App;
