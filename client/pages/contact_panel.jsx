import Navbar from '@/components/Navbar'
import styles from '@/styles/Contact_panel.module.css'
import Footer from '@/components/Footer'
import ContactCard from '@/components/ContactCard';
import { useState, useEffect } from 'react';

function Contact_panel() {

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchMessages() {
      const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
      try {
        if (token) {
          const response = await fetch(`${process.env.SERVER_URL}/contact/messages`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await response.json();
          setMessages(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchMessages();
  }, []);

  return (
    <div className={styles.contactPanel}>
      <Navbar color='black' />
      <div className={styles.body}>
        <h1 className={styles.heading}>Contact Panel</h1>
        <div className={styles.contactCards}>
          {messages.map((message, index) => {
            return (
              <ContactCard key={index} message={message} />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact_panel;