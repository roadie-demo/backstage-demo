import { Page, Content } from '@backstage/core-components';
import {
  HomePageCompanyLogo,
  TemplateBackstageLogo,
  HomePageStarredEntities,
  HomePageToolkit,
  HomePageTopVisited,
  HomePageRecentlyVisited,
} from '@backstage/plugin-home';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { tools, useLogoStyles } from './shared';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://313fd8343a4948630cc175655ccff227@o4508461602439168.ingest.de.sentry.io/4508461853311056",
  integrations: [],

  tracesSampleRate: 1.0,
});

Sentry.setTag("myTag", "tag-value");
Sentry.setExtra("myExtra", "extra-value");
Sentry.addBreadcrumb({ message: "test" });

Sentry.captureMessage("Hello from Backstage Demo, Sentry!");

const useStyles = makeStyles(theme => ({
  searchBarInput: {
    maxWidth: '60vw',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '50px',
    boxShadow: theme.shadows[1],
  },
  searchBarOutline: {
    borderStyle: 'none',
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  const { svg, path, container } = useLogoStyles();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Content>
          <Grid container justifyContent="center" spacing={2}>
            <HomePageCompanyLogo
              className={container}
              logo={<TemplateBackstageLogo classes={{ svg, path }} />}
            />
            <Grid container item xs={12} justifyContent="center">
              <HomePageSearchBar
                InputProps={{
                  classes: {
                    root: classes.searchBarInput,
                    notchedOutline: classes.searchBarOutline,
                  },
                }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={6}>
                <HomePageTopVisited />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageRecentlyVisited />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={7}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={5}>
                <HomePageToolkit tools={tools} />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
