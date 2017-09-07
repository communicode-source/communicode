import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import { graphql } from 'react-apollo';

import UsersQuery from './UsersQuery.graphql';

class Users extends React.Component {
  render() {
    const { users } = this.props.data;
    return (
      <Grid>
        <Row>
          <Col sm={13}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>id</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.data.loading ?
                    (
                      <tr><td colSpan="2">Loading...</td></tr>
                    ) :
                    users.map(user => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.id}</td>
                      </tr>
                    ))
                }
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} lg={1}>
            <Button bsStyle="info" onClick={() => this.props.data.refetch()}>Reload</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Users.propTypes = {
  data: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string
    })),
    loading: PropTypes.bool,
    refetch: PropTypes.func
  }).isRequired
};

export default graphql(UsersQuery)(Users);
