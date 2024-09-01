import React from 'react';
import { Link } from '@strapi/design-system/v2';
import { Typography } from '@strapi/design-system/Typography';

const LabelLinkItem = metric => <li >
  <Typography>
    {`${metric.name}: `}
    <Link isExternal href={metric.url}>
      {metric.value}
    </Link>
  </Typography>

</li>

export default function Index({ metrics }) {
  return (
      <ul>
        {metrics.map((metric, idx) => {
          if (metric.hasOwnProperty('url')) return (
              <LabelLinkItem key={idx} metric={metric}/>
              // <li key={idx}>
              //   <Typography>
              //     {`${metric.name}: `}
              //     <Link isExternal href={metric.url}>
              //       {metric.value}
              //     </Link>
              //   </Typography>
              //
              // </li>
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
