import React, { FC } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

type RepositoryParams = {
  repository: string;
};

const Repository: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  console.log(params);

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars.githubusercontent.com/u/44439702?s=460&u=37b77857e20d142439f4cd85e0f026141c2441af&v=4"
            alt="Github profile img"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>descrição do repo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/asrhuiashr">
          <div>
            <strong>ashurhasr</strong>
            <p>ahsursaiurh</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
