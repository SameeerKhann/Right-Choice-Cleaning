import { motion } from 'framer-motion';
import { useState } from 'react';
import './LoginPage.css';

export default function LoginPage() {
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });
  const [signUpForm, setSignUpForm] = useState({ email: '', password: '', confirm: '' });

  return (
    <div className="login-page">
      <div className="login-overlay"></div>
      
      <div className="container login-container">
        <motion.div 
          className="login-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* =====================================================
              BOOKING KOALA LOGIN IFRAME PLACEHOLDER
              =====================================================
              If you want to use the actual Booking Koala embedded form,
              delete everything inside <div className="login-forms-wrapper">
              and paste your Booking Koala code there!
          ===================================================== */}
          <div className="login-forms-wrapper">
            
            {/* SIGN IN FORM */}
            <div className="auth-card">
              <h2 className="auth-title">Sign In Through Your Email</h2>
              <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <i className="fa-solid fa-envelope input-icon"></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={signInForm.email}
                    onChange={e => setSignInForm({...signInForm, email: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <i className="fa-solid fa-key input-icon"></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={signInForm.password}
                    onChange={e => setSignInForm({...signInForm, password: e.target.value})}
                  />
                </div>
                <button type="submit" className="auth-btn">
                  Sign In
                </button>
              </form>
              <div className="auth-links">
                <a href="#">Forgot password?</a>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="auth-divider"></div>

            {/* SIGN UP FORM */}
            <div className="auth-card">
              <h2 className="auth-title">Create An Account For Free!</h2>
              <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                  <i className="fa-solid fa-envelope input-icon"></i>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={signUpForm.email}
                    onChange={e => setSignUpForm({...signUpForm, email: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <i className="fa-solid fa-key input-icon"></i>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={signUpForm.password}
                    onChange={e => setSignUpForm({...signUpForm, password: e.target.value})}
                  />
                </div>
                <div className="input-group">
                  <i className="fa-solid fa-key input-icon"></i>
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    required 
                    value={signUpForm.confirm}
                    onChange={e => setSignUpForm({...signUpForm, confirm: e.target.value})}
                  />
                </div>
                <button type="submit" className="auth-btn">
                  Sign Up
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
