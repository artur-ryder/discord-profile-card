import './App.css';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
        <UserProfile
            avatar_img='/ryder.webp'
            username='Ryder'
            discriminator={"0001"}
            status='idle'
            createdAt={Date.now()}
            bannerColor='9e9ffe'
            aboutMe="Hello, I'm ryder!"
            activity={{
               title: 'GTA V',
               description: 'A very good game.',
               state: 'Playing',
               largeImageKey: '/gta-v.webp',
               smallImageKey: ''
            }}
            badges={[{name: "Test", imgLink: "https://cdn.discordapp.com/badge-icons/6bdc42827a38498929a4920da12695d9.png"}]}
        />
    </div>
  );
}

export default App;
