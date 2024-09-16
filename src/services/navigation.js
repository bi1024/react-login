export const navigateLogin=(navigate, user)=>{
    switch(user.role){
        case('admin'):{
            navigate('/admin');
            break;
        }
        case('user'):{
            navigate('/user');
            break;
        }
    }
}