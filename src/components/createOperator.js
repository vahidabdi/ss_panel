import React from 'react';
import { graphql } from 'react-apollo';
import mutation from 'src/graphql/mutations/operator_new.gql';
import query from 'src/graphql/queries/service_new.gql';
// import query from 'src/graphql/queries/operators.gql';
import CreateItemOperator from 'src/components/createItemOperator';

@graphql(mutation)
class createOperator extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(name, buyCharge, credit, internetCharge, operatorId, payBill) {
    this.props.mutate({
      variables: {
        name,
        buyCharge,
        credit,
        internetCharge,
        operatorId,
        payBill,
      },
      refetchQueries: [{ query }],
    });
  }

  render() {
    return (
      <CreateItemOperator onSubmit={this.onSubmit} />
    );
  }
}

export default createOperator;
