import styles from '../styles/SearchBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputFocused: false
    };
  }

  handleInputClick = () => {
    this.setState({ isInputFocused: !this.state.isInputFocused });
  };

  render() {
    console.log('render')
    return (
      <div className={styles.searchBox} style={{border: this.props.border ? '1px solid lightgray' : 'none'}}>
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'white' }} />
        </button>
        <input type='text' className={styles.searchInput} placeholder='Search for services'
          onClick={this.handleInputClick} />
        {this.state.isInputFocused && <div className={styles.searchNames}>
          <ul className={styles.names}>
            <Link href='/explore' className={styles.name}>Photographer</Link>
            <Link href='/explore' className={styles.name}>Cinematographer</Link>
            <Link href='/explore' className={styles.name}>Drone Operator</Link>
          </ul>
        </div>}
      </div>
    )
  }
}

export default SearchBox;