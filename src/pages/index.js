import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from "../../styles/indexStyle";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, me chamo Igor Sousa</Name>
          <Function>Desenvolvedor Fullstack</Function>
          <Intro>Atualmente estudando Backend</Intro>
          <Img className="gif" src="/images/mario.gif" alt="mario" />
          <Link href="projects">
            <LinkProjects className="glow-on-hover" type="button">
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/logo.png" alt="logo" />
        </Logo>

        <div className="link">
          <h2>Visite meu Github</h2>
          <a href="https://www.github.com/sousair185/">Clique aqui</a>
        </div>
      </Content>
    </Container>
  );
}
