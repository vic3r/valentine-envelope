import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)
  const [couponExpanded, setCouponExpanded] = useState(false)

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true)
      setTimeout(() => setShowSurprise(true), 800)
    }
  }

  const handleCouponClick = (e) => {
    e.stopPropagation()
    if (showSurprise && !couponExpanded) {
      setCouponExpanded(true)
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
                    <div 
                      className="coupon-paper coupon-teaser"
                      onClick={handleCouponClick}
                    >
                      <div className="coupon-header">
                        <span className="matcha-icon">🍵</span>
                        <h2>MATCHA COUPON</h2>
                      </div>
                      <p className="coupon-tap-hint">Tap to open</p>
                    </div>
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
          {!isOpen ? 'Tap the envelope' : !couponExpanded ? 'Tap the coupon' : ''}
        </p>
      </main>

      {couponExpanded && (
        <div 
          className="coupon-overlay"
          onClick={() => setCouponExpanded(false)}
        >
          <div 
            className="coupon-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="coupon-card-inner">
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
                  Redeemable at any café, on any date, with Victor.
                </p>
              </div>
              <p className="punchline">
                P.S. I heard doctors need their matcha. Consider this prescribed.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
