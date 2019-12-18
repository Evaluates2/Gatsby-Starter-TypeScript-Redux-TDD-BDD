import React from 'react';
import { Link } from 'gatsby';
import { connect, useDispatch } from 'react-redux';
import { loginRequested, logout } from '../state/actions/login';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Todos from '../components/todos';

const IndexPage = ({ todos, userId }) => {

  const dispatch = useDispatch();

  const loginClicked = async () => {
    dispatch(loginRequested());
  };

  const logoutClicked = () => {
    dispatch(logout());
  };

  return (
    <Layout>
      <SEO title='Home' />
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>

      <p>Welcome to your new TypeScript-Redux-BDD Gatsby site.</p>
      <p>Now go build something great!</p>

      <h2>User Id: {userId}</h2>

      {!userId &&
        <button onClick={event => { loginClicked(); }} >
          Login
    </button>}

      {userId &&
        <button onClick={event => { logoutClicked(); }} >
          Logout
    </button>}

      <br />
      <br />
      <hr />

      <Todos todos={todos} />

      <hr />
      <br />
      <br />
      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    userId: state.loginReducer.userId,
  };
};

export default connect(mapStateToProps)(IndexPage);
