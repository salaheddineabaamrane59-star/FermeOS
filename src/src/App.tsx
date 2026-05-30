import React from 'react'

export default function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0fdf4',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#16a34a',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>🐔 FermeOS</h1>
        <p style={{ fontSize: '1.1rem' }}>إدارة الضيعة الذكية</p>
        <p style={{ fontSize: '0.9rem', marginTop: '10px', opacity: 0.8 }}>
          Gestion avicole au Maroc
        </p>
      </div>
    </div>
  )
}
