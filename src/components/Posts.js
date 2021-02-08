import React, { useContext, useEffect, useState } from 'react';

import { postService } from '../services';
import { useTable } from '../hooks';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/context';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const postContext = useContext(Context);
  const history = useHistory();

  const columns = [
    {
      field: 'id',
      title: 'Comment ID',
      filtering: false,
    },
    {
      field: 'userId',
      title: 'User ID',
      filtering: false,
    },
    {
      field: 'title',
      title: 'Title',
      filtering: false,
    },
    {
      field: 'body',
      title: 'Content',
      filtering: false,
    },
  ];

  const loadListData = async () => {
    const result = await postService.getAllPosts();
    if (result) setPosts(result);
  };

  const postsTable = useTable(columns, posts, 'Posts');

  const { table, selectedRow } = postsTable;

  useEffect(() => {
    loadListData();
  }, []);

  useEffect(() => {
    const strObj = JSON.stringify(selectedRow.row);
    if (strObj !== '{}') {
      console.log(selectedRow.row);
      postContext.setContext(selectedRow.row);
      history.push('/comments');
    }
  }, [selectedRow]);

  return (
    <>
      {posts ? table : null}
    </>
  );
}
