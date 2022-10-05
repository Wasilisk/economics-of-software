import { Routing } from "pages";
import { Layout } from "shared/ui/layout";
import { Header } from "widgets/header/ui";

import { withProviders } from "./providers";
import AppStyles from "./styles";

const App = () => (
  <>
    <Layout>
      <Header />
      <Layout.Content>
        <Routing />
      </Layout.Content>
    </Layout>
    <AppStyles/>
  </>
)

export default withProviders(App);
