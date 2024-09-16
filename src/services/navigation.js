export async function navigateLogin(navigate, user){
    user.role==='admin' ? navigate('/admin'):navigate('/home');
    console.log(user);
}

