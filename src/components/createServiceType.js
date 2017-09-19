import React from 'react';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/serviceType_new.gql';
import query from 'src/graphql/queries/service_types.gql';
import CreateItemType from './createItemType';

@graphql(mutation)
class CreateServiceType extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(name, nameEng, hasSubCat, hasOperator) {
    this.props.mutate({
      variables: {
        name,
        nameEng,
        hasSubCat,
        hasOperator,
      },
      refetchQueries: [{ query }],
    });
  }

  render() {
    return (
      <CreateItemType onSubmit={this.onSubmit} />
    );
  }
}

export default CreateServiceType;
