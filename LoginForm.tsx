import { useState } from 'react';
import { AuthService } from './services/AuthService';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    
    // BUG: AuthService is not initialized properly
    // This will throw: TypeError: Cannot read property 'authenticate' of undefined
    await AuthService.authenticate(email, password);
    
    setIsLoading(false);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}

