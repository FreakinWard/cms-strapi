import React from 'react';
import { Link } from '@strapi/design-system/v2';
import { Typography } from '@strapi/design-system/Typography';

export default function Index({ metrics }) {
  return (
      <ul>
        {metrics.map((metric, idx) => {
          if (metric.hasOwnProperty('url')) return (
              <li key={idx}>
                <Typography>
                  {`${metric.name}: `}
                  <Link isExternal href={metric.url}>
                    {metric.value}
                  </Link>
                </Typography>

              </li>
          )

          return (
              <li key={idx}>
                <Typography>{`${metric.name}: ${metric.value}`}</Typography>
              </li>
          )
        })}
      </ul>
  );
}
