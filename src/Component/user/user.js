const set_data_user=({data})=>{
    localStorage.setItem('Name', data.name)
    localStorage.setItem('Email', data.email)
    localStorage.setItem('isLogin', true)
    localStorage.setItem('token', data.token)
}
const get_data_user={
    name:localStorage.getItem('Name'),
    email:localStorage.getItem('Email'),
    isLogin:localStorage.getItem('isLogin'),
    token:localStorage.getItem('token'),

}
const remove_data_user=()=>{
    localStorage.removeItem('Name');
    localStorage.removeItem('Email');
    localStorage.removeItem('isLogin');
    localStorage.removeItem('token');
    console.log('remove');
}

export   {set_data_user,get_data_user,remove_data_user};








