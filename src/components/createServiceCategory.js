import React from 'react';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/serviceCategory_new.gql';
import query from 'src/graphql/queries/categories.gql';
import CreateItem from 'src/components/createItem';

@graphql(mutation)
class CreateServiceCategory extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(name) {
    this.props.mutate({
      variables: { name },
      refetchQueries: [{ query }],
    });
  }

  render() {
    return (
      <CreateItem onSubmit={this.onSubmit} />
    );
  }
}

export default CreateServiceCategory;
