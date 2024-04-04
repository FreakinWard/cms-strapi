import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { BaseHeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import HealthMetrics from '../../components/HealthMetrics'
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [health, setHealth] = useState();

  useEffect(() => {
    fetch('/api/health')
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
      <Typography variant="beta">{health.message}</Typography>
      <br />
      <Box padding={4} hasRadius background="neutral0" shadow="tableShadow">
        <HealthMetrics metrics={health.metrics} />
      </Box>
    </ContentLayout>
  </>
  );
};

export default HomePage;
