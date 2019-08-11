import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeService} from '../actions/actionCreators';
import {connect} from 'react-redux';

class ServiceListClassBased extends Component {
  handleRemove = id => {
    this.props.removeService(id);
  }

  render() {
    const {items} = this.props;

    return (
      <ul>
        {items.map(({id, name, price}) => (
          <li key={id}>
            {`${name} ${price}`}
            <button onClick={() => this.handleRemove(id)}>✕</button>
          </li>
        ))}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeService: id => dispatch(removeService(id))
//   }
// };

const mapDispatchToProps = ({
  removeService,
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);