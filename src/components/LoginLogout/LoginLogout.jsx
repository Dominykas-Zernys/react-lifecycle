const LoginLogout = ({ status }) => {
  console.log('loginlogout component ran');

  return (
    <nav>
      {!status && (
        <>
          <a href='#login'>login</a>
          <a href='#register'>register</a>
        </>
      )}
      {status && <a href='#login'>logout</a>}
    </nav>
  );
};

export default LoginLogout;
