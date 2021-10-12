import { useEffect } from 'react';

import { useGetDealersQuery } from '../generated/types';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const { data, error, loading } = useGetDealersQuery();

  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading]);

  return (
    <Main
      meta={
        <Meta
          title="Project Auto Evolution"
          description="The new and revolutionary auto shopping experience."
        />
      }
    >
      {data?.getDealers.map(({ dealerName }, i) => (
        <p key={i + 1}>{dealerName}</p>
      ))}
    </Main>
  );
};

export default Index;
