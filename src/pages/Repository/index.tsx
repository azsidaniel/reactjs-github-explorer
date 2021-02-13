import React, { FC, useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';

type RepositoryParams = {
  repository: string;
};

interface RepositoryType {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssuesType {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<RepositoryType | null>(null);
  const [issues, setIssues] = useState<IssuesType[]>([]);

  useEffect(() => {
    const fetchIssues = () => {
      /*  const [responseIssues, responseRepository] = await Promise.all([
          api.get(`repos/${params.repository}`),
          api.get(`repos/${params.repository}/issues`),
        ]); */

      api.get(`repos/${params.repository}`).then(response => {
        setRepository(response.data);
      });

      api.get(`repos/${params.repository}/issues`).then(response => {
        setIssues(response.data);
      });
    };
    fetchIssues();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
