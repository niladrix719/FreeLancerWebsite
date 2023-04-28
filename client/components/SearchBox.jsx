import styles from '../styles/SearchBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputFocused: false
    };
  }

  handleInputFocus = () => {
    this.setState({ isInputFocused: true });
  };

  handleInputBlur = () => {
    this.setState({ isInputFocused: false });
  };
  render() {
    return (
      <div className={styles.searchBox}>
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} />
        </button>
        <input type='text' className={styles.searchInput} placeholder='Search for services'
          onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} />
        {this.state.isInputFocused && <div className={styles.searchNames}>
          <ul className={styles.names}>
            <li className={styles.name}>Photographer</li>
            <li className={styles.name}>Cinematographer</li>
            <li className={styles.name}>Drone Operator</li>
          </ul>
        </div>}
      </div>
    )
  }
}

export default SearchBox;