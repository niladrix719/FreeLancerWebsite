import styles from '../styles/SearchBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputFocused: false,
      options: ['Photographer', 'Cinematographer', 'Drone Operator'],
      searchTerm: '',
    };
  }

  setSearchTerm = (term) => {
    this.setState({ searchTerm: term });
  };

  handleInputClick = () => {
    this.setState({ isInputFocused: !this.state.isInputFocused });
  };

  handleSearch = (event) => {
    this.setSearchTerm(event.target.value);
  };

  handleKeyDown = (event) => {
    const { options, searchTerm } = this.state;
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (event.key === "Enter" && filteredOptions.length > 0) {
      event.preventDefault();
      Router.push("/explore");
    }
  };

  render() {
    const { options, searchTerm, isInputFocused } = this.state;
    const filteredOptions = options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={styles.searchBox} style={{ border: this.props.border ? '1px solid lightgray' : 'none' }}>
        <button className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} style={{ color: 'white' }} />
        </button>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for services"
          onClick={this.handleInputClick}
          onChange={this.handleSearch}
          value={searchTerm}
          onKeyDown={this.handleKeyDown}
        />
        {isInputFocused && (
          <div className={styles.searchNames}>
            <ul className={styles.names}>
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <Link href="/explore" className={styles.name} key={index}>
                    {option}
                  </Link>
                ))
              ) : (
                <li className={styles.name}>No results found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBox;