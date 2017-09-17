import React from 'react';
import sass from 'src/styles/index.scss';

class CommentLastest extends React.Component {


  render() {
    return (
      <tr className={`${sass.table__row} ${(this.props.socialUsers.approved ? 'feature' : 'noFeature')}`}>
        <td>{this.props.socialUsers.id}</td>
        <td>
          <div className={sass.table__name}>{this.props.socialUsers.name}</div>
        </td>
        <td>
          <div className={sass.table__name}>{this.props.socialUsers.phoneNumber}</div>
        </td>
      </tr>
    );
  }
}
export default CommentLastest;
