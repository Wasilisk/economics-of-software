import { Routing } from "pages";
import { Layout } from "shared/ui/layout";

import { Navigation } from "features/navigation/ui";

import { withProviders } from "./providers";
import AppStyles from "./styles";

const App = () => (
  <>
    <Layout>
      <Layout.Header leftSide={<Navigation />} title='Created by Vasyl Petryna' />
      <Layout.Content>
        <Routing />
      </Layout.Content>
    </Layout>
    <AppStyles/>
  </>
)

export default withProviders(App);
