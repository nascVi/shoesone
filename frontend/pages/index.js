/* /pages/index.js */
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div>
        <Alert color="primary">
        lpChamps is building shoesone972.com here and now 2019 Jun the 12th, 22:35
        </Alert>
        &nbsp; <Button color="primary">Hello from nextjs</Button>
      </div>
    </Layout>
  );
};