import { Box, Stack, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import Post from './Post';
import sunset from '../images/pexels-ben-mack-5708069.jpg';
import store from '../images/pexels-rachel-claire-4819658.jpg';
import flowerLady from '../images/pexels-marta-dzedyshko-7693865.jpg';
import rain from '../images/pexels-sebastiaan-stam-1545732.jpg';
import manAtBeach from '../images/pexels-bas-masseus-1074535.jpg';

const Feed = ({ imgsrc }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant='text' height={100} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='text' height={20} />
          <Skeleton variant='rectangular' height={300} />
        </Stack>
      ) : (
        <>
          <Post imgsrc={sunset} />
          <Post imgsrc={store} />
          <Post imgsrc={flowerLady} />
          <Post imgsrc={rain} />
          <Post imgsrc={manAtBeach} />
        </>
      )}
    </Box>
  );
};

export default Feed;
