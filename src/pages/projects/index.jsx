import Link from "next/link.js";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LinkProjects } from "../../../styles/indexStyle.js";
import {
  Container,
  Content,
  Ul,
  Li,
  TitleProject,
  Url,
  Created_at,
} from "./../../lib/projectStyle.js";

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/sousair185/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Link href="/">
          <LinkProjects className="glow-on-hover" type="button">
            VOLTAR <FaArrowLeft />
          </LinkProjects>
        </Link>
        <Ul>
          {itemsApi.map((item) => (
            <Li key={item.id} className="list">
              <TitleProject>
                <button className="glow-on-hover" type="button">
                  {item.name.toUpperCase()}
                </button>
              </TitleProject>
              <Url>
                <a>URL: {item.url}</a>
              </Url>
              <Created_at>
                Data Criação:{" "}
                {Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
              </Created_at>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
