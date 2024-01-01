

//
document.querySelector('.btn-login')
    .addEventListener('click',()=>{
        const  username=document.querySelector('.username').value
        const  password=document.querySelector('.password').value
        console.log(username,password)

        // 长度
        if (username.length<8){
            myAlert2('用户名字长度需要大于8',false)
        }
        if (password.length<6){
            myAlert2('密码字长度需要大于8',false)
        }

        // 基本长度通过 进行请求发送
        axios({
            url:'hhtp',
            method:'POST',
            data:{
                username:username,
                password:password
            }
        }).then(res =>{
            myAlert2(res.data.message,true)
        }).catch(err =>{
            myAlert2(err.response.data.message,false)
        })

    })



// 封装

function myAlert2(messageValue, flag) {
    // 弹框
  const  alertDom= document.querySelector('.my-alert')

    // 显示弹框 添加 show
    alertDom.classList.add('show')
    //更改 弹框使用m
    alertDom.innerText=messageValue

    // 更具flag boolen 控制显示颜色样式  类属性 和bootsrap3有关
    alertDom.classList.add(flag ? 'a' :'b')

    setTimeout(() =>{
        alertDom.classList.remove('show')
        alertDom.classList.remove(flag ? 'alert-success':'aler-danger')
    })



}
