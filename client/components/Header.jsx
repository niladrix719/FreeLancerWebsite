import styles from '../styles/Header.module.css';
import Image from 'next/image';
import SearchBar from '../components/SearchBar';
import React from 'react';
import { text } from '@fortawesome/fontawesome-svg-core';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: ['Photographer', 'Cinematographer', 'Drone Operator'],
      index: 0
    };
  }

  componentDidMount() {
    setInterval(() => {
      const newIndex = (this.state.index + 1) % this.state.texts.length;
      this.setState({ index: newIndex });
    }, 2000);
  }

  render() {
    const { texts, index } = this.state;
    const currentText = texts[index];

    return (
      <div className={styles.header}>
        <div className={styles.headingText}>
          Hire Freelance <span className={styles.AnimationText}>{currentText}</span> Anywhere.
        </div>
        <SearchBar />
      </div>
    )
  }
}

export default Header;