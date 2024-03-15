"use client"
// src/app/auth/login.tsx
import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    // 这里应该处理登录逻辑，比如调用一个API
  };

  return (
    <div>
      <h1>登录</h1>
      <form onSubmit={handleLogin}>
        <label>
          邮箱:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          密码:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br/>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default LoginPage;