import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true)
      setTimeout(() => setShowSurprise(true), 800)
    }
  }

  return (
    <div className="app">
      <div className="film-strip top" />
      <div className="film-strip bottom" />
      
      <main className="scene">
        <div className="title-block">
          <p className="chapter">Chapter I</p>
          <h1>February 14th</h1>
          <p className="subtitle">A Special Delivery</p>
        </div>

        <div className="envelope-container">
          <div 
            className={`envelope ${isOpen ? 'open' : ''}`}
            onClick={handleEnvelopeClick}
          >
            <div className="envelope-flap" />
            <div className="envelope-body">
              <div className="envelope-inner">
                {showSurprise ? (
                  <div className="surprise-content">
                    <div className="coupon-paper">
                      <div className="coupon-header">
                        <span className="matcha-icon">🍵</span>
                        <h2>MATCHA COUPON</h2>
                      </div>
                      <div className="coupon-body">
                        <p className="coupon-value">One Free Matcha</p>
                        <p className="coupon-details">Valid for one (1) matcha latte of your choice</p>
                        <hr />
                        <p className="coupon-code">Code: MATCHA14</p>
                        <p className="coupon-expiry">Expires: Never — you deserve it</p>
                        <p className="coupon-note">
                          Redeemable at any café, on any date, with the person who gave you this.
                        </p>
                      </div>
                    </div>
                    <p className="punchline">
                      P.S. I heard doctors need their matcha. Consider this prescribed.
                    </p>
                  </div>
                ) : (
                  <div className="letter-preview">
                    <p>{isOpen ? '...' : 'Click to open'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <p className="instruction">
          {!isOpen ? 'Tap the envelope' : ''}
        </p>
      </main>
    </div>
  )
}

export default App
