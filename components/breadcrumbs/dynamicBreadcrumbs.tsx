"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { StyledLink } from "../navbar/Navbar.styles";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DynamicBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function DynamicBreadcrumbs({ items }: DynamicBreadcrumbsProps) {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{
        mb: 4,
        fontSize: {
          xs: 12,
          md: 14,
        },
        overflowX: "auto",
        whiteSpace: "nowrap",

        "& .MuiBreadcrumbs-ol": {
          flexWrap: "nowrap",
        },
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast || !item.href) {
          return (
            <Typography
              variant="body2"
              key={item.label}
              sx={{
                maxWidth: {
                  xs: 70,
                  sm: 100,
                  md: "unset",
                },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Typography>
          );
        }

        return (
          <StyledLink key={item.label} href={item.href}>
            {item.label}
          </StyledLink>
        );
      })}
    </Breadcrumbs>
  );
}
