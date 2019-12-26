import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Todos from '../components/todos/todos';
import PropTypes from 'prop-types';
import LoginSection from '../components/login/login-section';

const imgStyle = { maxWidth: '300px', marginBottom: '1.45rem' }

const pStyle = {
  fontSize: 'calc(5px + 3vw)',
  lineHeight: 'calc(12px + 3vw)',
  margin: '2px'
}

const IndexPage = ({ todos, userId }) => {

  return (
    <Layout>
      <SEO title='Home' />
      <div style={imgStyle}>
        <Image />
      </div>

      <div style={pStyle}>
        <p>Welcome to your new Gatsby site...</p>
        <p>Now go build something great!</p>
      </div>

      <LoginSection userId={userId} />

      <Todos todos={todos} />

      <Link to='/page-2/'>Go to page 2</Link>

    </Layout>
  );
};

IndexPage.propTypes = {
  // userId: PropTypes.number,
  // todos: PropTypes.arrayOf(new Todo({title:"", description:""}) )
}


const mapStateToProps = state => {
  return {
    todos: state.todosReducer.todos,
    userId: state.loginReducer.userId,
  };
};

export default connect(mapStateToProps)(IndexPage);
