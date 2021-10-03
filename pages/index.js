import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Form from "../components/form";
import Reporttable from "../components/Reporttable";
import { hours } from "../data";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-10">
        <Form />
        <Reporttable hours={hours} />
      </div>
    </Layout>
  );
}
