import React from 'react';
import { Helmet } from 'react-helmet';

const MyHelmet = () => {
  return (
    <div>
      <Helmet>
        <title>BerlinVogue Collective</title>
        <meta
          name="Discover the epitome of style at BerlinVogue Collective"
          content="Discover the epitome of style at BerlinVogue Collective"
        />
        {/* Add more meta tags as needed */}
      </Helmet>
      

    </div>
  );
};

export default MyHelmet;