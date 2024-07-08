const TOKEN_KEY = 'jwt_token';
export const login = async (username, password) => {
    try {

        // for testing implementation
        const test_token = "test_token"
        localStorage.setItem(TOKEN_KEY, test_token);
        return test_token

        //login implementation
        const response = await fetch('https://example.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        const token = data.token;

        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
        }


        return token
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    const token = localStorage.getItem(TOKEN_KEY);

    // for testing purpose
    if (!token) {
        return false;
    }else{
        return true
    }

    // is authenticated implementation for actual use 
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;

    if (expiry && Date.now() >= expiry * 1000) {
        logout();
        return false;
    }

    return true;
};