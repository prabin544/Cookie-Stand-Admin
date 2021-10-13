import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Form from "../components/Form";
import Reporttable from "../components/Reporttable";
import { hours } from "../data";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../reduxStore/countSlice";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";

export default function Home() {
  const { user, login, logOut } = useAuth();
  console.log("USER", user);
  const { resources } = useResource();
  console.log(resources);

  return (
    <Layout>
      {user ? (
        <div className="space-y-10">
          <Form />
          <Reporttable reports={resources} hours={hours} />
        </div>
      ) : (
        <LoginForm />
      )}
    </Layout>
  );
}
