import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { GridLayout } from '@strapi/design-system';
import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';

import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [health, setHealth] = useState();

  useEffect(() => {
    fetch('/health')
    .then((res) => res.json())
    .then(setHealth)
  }, []);

  if (!health) return null;

  return (
  <>
    <BaseHeaderLayout
        title="Strapi CMS Health"
        subtitle="Get the latest health and metrics of the CMS application"
        as="h2"
    />
    <ContentLayout>
      <GridLayout>
        <Typography variant="beta">{health.message}</Typography>
        <br />
        <Box padding={4} hasRadius background="neutral0" shadow="tableShadow">
          <ul>
            {health.healthMetrics.map((metric, idx) => {
              return (
                    <li key={idx}>
                      <Typography>{`${metric.name}: ${metric.value}`}</Typography>
                    </li>
              )
            })}
          </ul>
        </Box>
      </GridLayout>
    </ContentLayout>
  </>
  );
};

export default HomePage;
