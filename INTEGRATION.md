# Growth Lab API - Frontend Integration Guide

## Table of Contents

- [Overview](#overview)
- [Base URL](#base-url)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
  - [Register User](#1-register-user)
  - [Login User](#2-login-user)
- [Error Handling](#error-handling)
- [Frontend Integration Examples](#frontend-integration-examples)

---

## Overview

This API provides authentication services for the Growth Lab application. It supports user registration and login with flexible identifier options (email or phone number).

## Base URL

**Development:** `http://localhost:5000`  
**Production:** `https://your-app.vercel.app`

All API endpoints are prefixed with `/api`

---

## Authentication

After successful registration or login, you'll receive a JWT token. Include this token in subsequent requests:

```
Authorization: Bearer <your-jwt-token>
```

Token expires after 7 days.

---

## API Endpoints

### 1. Register User

Register a new user account.

**Endpoint:** `POST /api/auth/register`

**Request Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "userType": "founder",
  "password": "securePassword123",
  "phoneNumber": "+1234567890",
  "socialMediaUrl": "https://linkedin.com/in/johndoe"
}
```

**Field Descriptions:**

| Field          | Type   | Required | Description                                             |
| -------------- | ------ | -------- | ------------------------------------------------------- |
| fullName       | string | Yes      | User's full name (2-100 characters)                     |
| email          | string | Yes      | Valid email address (unique)                            |
| userType       | string | Yes      | One of: `student`, `professional`, `recruiter`, `admin` |
| password       | string | Yes      | Minimum 6 characters                                    |
| phoneNumber    | string | Yes      | Valid phone number (unique, min 10 digits)              |
| socialMediaUrl | string | No       | Valid URL (LinkedIn, portfolio, etc.)                   |

**Success Response (201 Created):**

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "fullName": "John Doe",
      "email": "john.doe@example.com",
      "userType": "student",
      "phoneNumber": "+1234567890",
      "socialMediaUrl": "https://linkedin.com/in/johndoe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**

**400 Bad Request** - Missing fields or validation error:

```json
{
  "success": false,
  "message": "All required fields must be provided"
}
```

**409 Conflict** - User already exists:

```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

---

### 2. Login User

Authenticate a user with email or phone number.

**Endpoint:** `POST /api/auth/login`

**Request Headers:**

```
Content-Type: application/json
```

**Request Body:**

```json
{
  "identifier": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Field Descriptions:**

| Field      | Type   | Required | Description                   |
| ---------- | ------ | -------- | ----------------------------- |
| identifier | string | Yes      | Email address OR phone number |
| password   | string | Yes      | User's password               |

**Alternative Login with Phone:**

```json
{
  "identifier": "+1234567890",
  "password": "securePassword123"
}
```

**Success Response (200 OK):**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "fullName": "John Doe",
      "email": "john.doe@example.com",
      "userType": "student",
      "phoneNumber": "+1234567890",
      "socialMediaUrl": "https://linkedin.com/in/johndoe"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Responses:**

**400 Bad Request** - Missing fields:

```json
{
  "success": false,
  "message": "Identifier (email or phone) and password are required"
}
```

**401 Unauthorized** - Invalid credentials:

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

## Error Handling

All error responses follow this structure:

```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Optional array of specific error messages"]
}
```

**Common HTTP Status Codes:**

- `200` - Success
- `201` - Created (registration)
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid credentials)
- `404` - Not Found (route doesn't exist)
- `409` - Conflict (duplicate email/phone)
- `500` - Internal Server Error

---

## Frontend Integration Examples

### React/Next.js Example

#### 1. Register Component

```jsx
import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userType: "student",
    password: "",
    phoneNumber: "",
    socialMediaUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Store token in localStorage or state management
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        // Redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <select
        value={formData.userType}
        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
        required
      >
        <option value="student">Student</option>
        <option value="professional">Professional</option>
        <option value="recruiter">Recruiter</option>
      </select>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
        required
      />
      <input
        type="url"
        placeholder="LinkedIn/Social Media URL (optional)"
        value={formData.socialMediaUrl}
        onChange={(e) =>
          setFormData({ ...formData, socialMediaUrl: e.target.value })
        }
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
```

#### 2. Login Component

```jsx
import { useState } from "react";

const LoginForm = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Store token and user data
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        // Redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email or Phone Number"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
```

#### 3. Axios Example

```javascript
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
```

### Vanilla JavaScript Example

```javascript
// Register user
async function register(formData) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

// Login user
async function login(identifier, password) {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}
```

---

## Environment Setup

### Backend (.env file)

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=your_super_secret_jwt_key
NODE_ENV=development
```

### Frontend Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
# or for production
NEXT_PUBLIC_API_URL=https://your-app.vercel.app/api
```

---

## Testing with cURL

### Register

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "userType": "student",
    "password": "password123",
    "phoneNumber": "+1234567890",
    "socialMediaUrl": "https://linkedin.com/in/johndoe"
  }'
```

### Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "john@example.com",
    "password": "password123"
  }'
```

---

## Notes

- All passwords are hashed using bcrypt before storage
- Tokens are valid for 7 days
- Email and phone numbers must be unique
- User type must be one of: `student`, `professional`, `recruiter`, `admin`
- Social Media URL is optional
- Phone numbers should include country code for international support

---

## Support

For issues or questions, please contact the development team.
