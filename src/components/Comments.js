import React, { useContext, useEffect, useState } from 'react';

import { commentsService } from '../services';
import { useTable } from '../hooks';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/context';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const postContext = useContext(Context);
  const history = useHistory();

  const loadListData = async () => {
    const result = await commentsService.getCommentsByPostId(
      postContext.context.id
    );
    if (result) setComments(result);
  };

  const columns = [
    {
      field: 'id',
      title: 'Post ID',
      filtering: false,
    },
    {
      field: 'name',
      title: 'Name',
      filtering: false,
    },
    {
      field: 'email',
      title: 'Email',
      filtering: false,
    },
    {
      field: 'body',
      title: 'Content',
      filtering: false,
    },
  ];

  const commentsTable = useTable(
    columns,
    comments,
    `Comments from Post Id: ${postContext.context.id}`
  );

  const { table } = commentsTable;

  useEffect(() => {
    loadListData();
  }, []);

  return (
    <>
      {comments ? table : null}
      <button
        type='button'
        style={{
          color: 'white',
          backgroundColor: '#8A2BE2',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
          margin: '6px 2px',
          transitionDuration: '0.4s',
          cursor: 'pointer'
        }}
        onClick={() => history.push('/')}
      >
        Back to posts
      </button>
    </>
  );
}
