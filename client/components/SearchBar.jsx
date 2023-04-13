import Image from 'next/image';
import styles from '../styles/SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
      isInputFocused: false
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      showDropDown: !prevState.showDropDown,
    }));
  };

  handleInputFocus = () => {
    this.setState({ isInputFocused: true });
  };

  handleInputBlur = () => {
    this.setState({ isInputFocused: false });
  };

  render() {
    return (
      <div>
        <div className={styles.searchMain}>
          <div className={styles.location}>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: 'red' }} /> Kolkata
            <FontAwesomeIcon
              icon={faChevronDown}
              className={styles.arrow}
              onClick={this.toggle}
            />
            <div
              className={styles.dropDown}
              style={{ display: this.state.showDropDown ? "block" : "none" }}
            >
              <p>Currently Available in Kolkata Only</p>
            </div>
          </div>
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
        </div>
        <div className={styles.suggestions}>
          <Link className={styles.link} href='/photographer'>Photographer, </Link> &nbsp;
          <Link className={styles.link} href='/cinematographer'>Cinematographer, </Link> &nbsp;
          <Link className={styles.link} href='/droneOperator'>Drone Operator</Link>
        </div>
      </div>
    )
  }
}

export default SearchBar;