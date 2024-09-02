import React from "react";
import { Link } from "@strapi/design-system/v2";
import { Typography } from "@strapi/design-system/Typography";

const LabelLinkItem = ({ metric }) => (
  <li>
    <Typography>
      {`${metric.name}: `}
      <Link isExternal href={metric.url}>
        {metric.value}
      </Link>
    </Typography>
  </li>
);

const LabelItem = ({ metric }) => (
  <li>
    <Typography>{`${metric.name}: ${metric.value}`}</Typography>
  </li>
);

const MetricLabel = ({ metric }) => {
  return metric.hasOwnProperty("url") ? (
    <LabelLinkItem metric={metric} />
  ) : (
    <LabelItem metric={metric} />
  );
};

export default function Index({ metrics }) {
  return (
    <ul>
      {metrics.map((metric, idx) => (
        <MetricLabel key={idx} metric={metric} />
      ))}
    </ul>
  );
}
