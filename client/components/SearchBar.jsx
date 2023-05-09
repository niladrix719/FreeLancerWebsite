import styles from '../styles/SearchBar.module.css';
import SearchBox from '../components/SearchBox';
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
          <SearchBox border={this.props.border} />
        </div>
        {/* <div className={styles.suggestions}>
          <Link className={styles.link} href='/photographer'>Photographer, </Link> &nbsp;
          <Link className={styles.link} href='/cinematographer'>Cinematographer, </Link> &nbsp;
          <Link className={styles.link} href='/droneOperator'>Drone Operator</Link>
        </div> */}
      </div>
    )
  }
}

export default SearchBar;