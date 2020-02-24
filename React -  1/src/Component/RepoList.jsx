import React from 'react';

const RepoList = props => {
  return (
    <tr>
      <td data-toggle='tooltip' data-placement='top' title='Click To Visit'>
        <a href={props.repo.html_url}>{props.repo.name}</a>
      </td>
      <td>{props.repo.description || 'No Description'}</td>
      <td>{props.repo.language || 'NA'}</td>
      <td>{props.repo.created_at}</td>
      <td>{props.repo.updated_at}</td>
    </tr>
  );
};

export default RepoList;
