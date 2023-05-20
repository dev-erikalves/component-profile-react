import Profile from "./components/profile/index"
import imgPerfil01 from "./assets/myPhoto.png"

export default function App() {
  return (
      <>
        <Profile imgPerfil={imgPerfil01}
          name="Erik Alves"
          bio="FullStack Developer"
          contact="(89) 99430-7093"
          email="dev.eriksantos@gmail.com"
          githubUrl="https://github.com/dev-erikalves"
          linkedinUrl="https://www.linkedin.com/in/dev-erikalves/"
          instagramUrl="https://www.instagram.com/developerik.web/"
        />
      </>
    )
}