import React from "react"
import { Link } from "gatsby"
import { connect, useDispatch } from 'react-redux';
import { loginFailed, loginRequested, loginSuccess } from '../state/actions/login';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import callApiService from '../services/simple-login.service';


const IndexPage = ({ error }) => {
  
  const dispatch = useDispatch();

  const loginClicked = async event => {
    try {
      dispatch(loginRequested());

      const result = await callApiService()

      console.log('got a result! ', result)

      dispatch(loginSuccess());
   
    } catch (error) {
      // dispatch(loginFailed(error.response.data.message));
    }
  };

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      {/* <button onClick=loginClicked()> */}
    <button onClick={loginClicked}>
        Login
    </button>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    // authenticatedUser: state.authenticatedUserReducer.user,
    // loggedIn: state.authenticatedUserReducer.loggedIn,
    error: state.reducer1.error
  };
};

export default connect(mapStateToProps)(IndexPage);