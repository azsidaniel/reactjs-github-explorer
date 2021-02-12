import React, { FC } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/44439702?s=460&u=37b77857e20d142439f4cd85e0f026141c2441af&v=4"
            alt="Repositório"
          />
          <div>
            <strong>azsidaniel/nodejs</strong>
            <p>Descrição da minha biblioteca</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/44439702?s=460&u=37b77857e20d142439f4cd85e0f026141c2441af&v=4"
            alt="Repositório"
          />
          <div>
            <strong>azsidaniel/nodejs</strong>
            <p>Descrição da minha biblioteca</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/44439702?s=460&u=37b77857e20d142439f4cd85e0f026141c2441af&v=4"
            alt="Repositório"
          />
          <div>
            <strong>azsidaniel/nodejs</strong>
            <p>Descrição da minha biblioteca</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
