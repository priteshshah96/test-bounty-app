export class AuthService {
  private static apiUrl = 'https://api.example.com';

  static async authenticate(email: string, password: string) {
    const response = await fetch(`${this.apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    return response.json();
  }

  static async logout() {
    // Logout logic
    localStorage.removeItem('auth_token');
  }
}

