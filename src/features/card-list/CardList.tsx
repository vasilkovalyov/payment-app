import { Box, Grid, GridSize, Skeleton, Typography } from "@mui/material";

interface ResponsiveType {
  xs: GridSize;
  sm: GridSize;
  md: GridSize;
  lg: GridSize;
  xl: GridSize;
}

interface CardListProps<T> {
  title?: string;
  items: T[];
  loading?: boolean;
  skeletonSizeLoading?: number;
  renderCard?: (item: T) => React.ReactNode;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const defaultResponsive: ResponsiveType = {
  xs: 6,
  sm: 6,
  md: 3,
  lg: 2,
  xl: 2
};

const CardList = <T extends { id: string }>({
  title,
  items,
  loading = false,
  skeletonSizeLoading = 6,
  renderCard,
  xs = defaultResponsive.xs,
  sm = defaultResponsive.sm,
  md = defaultResponsive.md,
  lg = defaultResponsive.lg,
  xl = defaultResponsive.xl
}: CardListProps<T>): JSX.Element => {
  const arrayOfSkeletons = Array.from(Array(skeletonSizeLoading).keys());

  return (
    <Box>
      {title && (
        <Typography variant="h6" mb="20px">
          {title}
        </Typography>
      )}
      <Grid container spacing={2}>
        {loading ? (
          <>
            {arrayOfSkeletons.map((_, index) => (
              <Grid
                key={index}
                item
                xs={xs}
                sm={sm}
                md={md}
                lg={lg}
                xl={xl}
                display="flex"
              >
                <Skeleton variant="rectangular" width="100%" height="110px" />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {items.length ? (
              <>
                {items.map((item) => (
                  <Grid
                    item
                    key={item.id}
                    xs={xs}
                    sm={sm}
                    md={md}
                    lg={lg}
                    xl={xl}
                    display="flex"
                  >
                    {renderCard && renderCard(item)}
                  </Grid>
                ))}
              </>
            ) : null}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default CardList;
