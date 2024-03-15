import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      <h1>注册</h1>
      <form>
        {/* 表单输入字段 */}
        <input type="text" placeholder="用户名" required />
        <input type="email" placeholder="邮箱地址" required />
        <input type="password" placeholder="密码" required />
        <input type="password" placeholder="确认密码" required />

        {/* 提交按钮 */}
        <button type="submit">创建帐户</button>
      </form>
    </div>
  );
};

export default RegisterPage;