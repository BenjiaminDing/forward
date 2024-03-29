

const   creatorValue='西蓝花'

// let  str=``
function getBooks() {
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        params:{
            creator:creatorValue
        }
    }).then(res =>{


        const listRes=res.data.data;
        console.log('---9----')
        console.log(listRes)
        const htmlArr= listRes.map((v, index) =>{
            // console.log(v)
            // console.log(v.bookname)
            // console.log(index)
            return ` <tr>
                     <td>${index + 1}</td>
                    <td>${v.bookname}</td>   
                    <td>${v.author}</td>
                    <td>${v.publisher}</td>
                       <td data-id="${v.id}">
                       <span class="del ggc">删除</span>
                       <span class="editx">编辑</span>
                    </td>
                 </tr>`;
        })
        // 拼接 一行标签   叠加join
        const htmlStr = htmlArr.join('')
        // console.log(htmlStr)

        document.querySelector('.list').innerHTML=htmlStr
        // console.log('99999999')

    })
}

getBooks()





// 创建弹框
const addModal = new bootstrap.Modal(document.querySelector('.add-modal'))

// 点击增加按钮 隐藏弹框
document.querySelector('.add-btn').addEventListener('click', () => {
    // 收集用户数据 并提交到服务器
    const addForm = document.querySelector('.add-form')
    const data = serialize(addForm, { hash: true, empty: true })
    console.log("-------入参--------")
    console.log(data)
    // 提交到服务器
    axios({
        url: 'http://hmajax.itheima.net/api/books',
        method: 'post',
        data: {
            creator:creatorValue,
            ...data
        }
    }).then(res => {
        console.log("----------x新增一个-----")
        console.log(res)
        // 调用函数获取图书数据
        getBooks()
        // 清空表单 reset
        addForm.reset()
        // 关闭弹框
        addModal.hide()
    })

})

// 原本  <button data-bs-toggle="modal" data-bs-target=".add-modal" type="button" class="btn btn-primary plus-btn"> + 添加
// 也可以通过左上角的   js按钮 弹框
document.querySelector('.btn-show').addEventListener('click', () => {
    addModal.show()
})



// 删除

document.querySelector('.list').addEventListener('click', (e) => {
    console.log("点del或者edit")
    console.log(e.target.classList.contains('del'))

    if (!e.target.classList.contains('del')) {return }
    console.log(e.target.parentNode)
    // dataset就是一个自定义id 对象
    console.log(e.target.parentNode.dataset)
    console.log(typeof e.target.parentNode.dataset)
    const { id } = e.target.parentNode.dataset
    console.log(id)
    axios({
        url: `http://hmajax.itheima.net/api/books/${id}`,
        method: 'DELETE'
    }).then(res => {

        console.log(res)
        // 重新获取数据
        getBooks()
    })
})


// 修改
// edit
// edit 没有通过bootstrp 方式 弹框 只可以 通过js
const editModal = new bootstrap.Modal(document.querySelector('.edit-modal'))
// editModal.show()


document.querySelector('.list').addEventListener('click', (e) => {


    console.log("点del或者edit")
    console.log(e.target.classList.contains('editx'))

    // if (!e.target.classList.contains('editx')) {return }
    // 收集用户数据 并提交到服务器
    // const editForm = document.querySelector('.edit-form')
    // const editData = serialize(editForm, { hash: true, empty: true })
    //
    // console.log(editData)

    if (!e.target.classList.contains('editx')) {
        return
    }
    // console.log('点了编辑')
    // 获取图书id 通过编辑元素的父元素的自定义属性 data-id获取id
    // console.log(e.target.parentNode.dataset)
    const { id } = e.target.parentNode.dataset
    // console.log(id)
    // 获取图书数据
    axios({
        url: `http://hmajax.itheima.net/api/books/${id}`
    }).then(res => {
        // console.log(res)
        const book = res.data.data
        console.log(book)
        // 设置获取到的图书数据
        // document.querySelector('.edit-modal .id').value = book.id
        // document.querySelector('.edit-modal .bookname').value = book.bookname

        // Object.keys 获取对象的属性名 ['id', 'bookname', 'author', 'publisher']
        const keys = Object.keys(book)
        console.log(keys)
        Object.keys(book).forEach(key => {
          // console.log(key)
          document.querySelector(`.edit-modal .${key}`).value = book[key]
        })

        // 弹出编辑框
        editModal.show()
    })

})



document.querySelector('.edit-btn').addEventListener('click', () => {
    console.log('点了修改')
    // 通过插件获取表单中的数据
    // const book = serialize(document.querySelector('.edit-form'), { hash: true, empty: true })
    // console.log(book)
    const { author, bookname, id, publisher } = serialize(document.querySelector('.edit-form'), { hash: true, empty: true })
    // 调用修改接口
    axios({
        url: `http://hmajax.itheima.net/api/books/${id}`,
        method: 'PUT',
        data: {
            bookname,
            author,
            publisher,
            creator:creatorValue
        }
    }).then(res => {
        // 获取数据
        getBooks()
        // 关闭弹框
        editModal.hide()
    })
})
